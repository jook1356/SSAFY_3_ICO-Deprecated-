package com.ico.api.service.teacher;

import com.ico.api.dto.teacherProduct.TeacherProductAllResDto;
import com.ico.api.dto.teacherProduct.TeacherProductDetailResDto;
import com.ico.api.service.S3UploadService;
import com.ico.api.service.transaction.TransactionService;
import com.ico.api.user.JwtTokenProvider;
import com.ico.core.dto.TeacherProductReqDto;
import com.ico.core.entity.Coupon;
import com.ico.core.entity.Nation;
import com.ico.core.entity.Student;
import com.ico.core.entity.TeacherProduct;
import com.ico.core.exception.CustomException;
import com.ico.core.exception.ErrorCode;
import com.ico.core.repository.CouponRepository;
import com.ico.core.repository.NationRepository;
import com.ico.core.repository.StudentRepository;
import com.ico.core.repository.TeacherProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @author 변윤경
 */
@Service
@RequiredArgsConstructor
@Transactional
public class TeacherProductServiceImpl implements TeacherProductService {
    private final NationRepository nationRepository;
    private final TeacherProductRepository teacherProductRepository;
    private final StudentRepository studentRepository;
    private final TransactionService transactionService;
    private final CouponRepository couponRepository;
    private final S3UploadService s3UploadService;
    private final JwtTokenProvider jwtTokenProvider;
    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy.MM.dd");

    /**
     * 교사 상품 등록
     *
     * @param product 교사 상품
     */
    @Override
    public void createProduct(HttpServletRequest request, TeacherProductReqDto product, List<MultipartFile> files) {
        Long nationId = jwtTokenProvider.getNation(jwtTokenProvider.parseJwt(request));

        Nation nation = nationRepository.findById(nationId)
                .orElseThrow(() -> new CustomException(ErrorCode.NATION_NOT_FOUND));

        // 같은 국가에 같은 선생님 상품 이름이 있는지 확인
        if (teacherProductRepository.findByNationIdAndTitle(nationId, product.getTitle()).isPresent()) {
            throw new CustomException(ErrorCode.ALREADY_EXIST_TITLE);
        }

        TeacherProduct teacherProduct = TeacherProduct.builder()
                .nation(nation)
                .title(product.getTitle())
                .amount(product.getAmount())
                .images(s3UploadService.saveImageURLs(files))
                .detail(product.getDetail())
                .count(product.getCount())
                .rental(product.getRental())
                .sold((byte) 0)
                .date(LocalDateTime.now())
                .build();
        teacherProductRepository.save(teacherProduct);
    }

    /**
     * 등록된 교사 상품 목록을 조회합니다.
     *
     * @return 교사상품목록
     */
    @Override
    public List<TeacherProductAllResDto> findAllProduct(HttpServletRequest request) {
        Long nationId = jwtTokenProvider.getNation(jwtTokenProvider.parseJwt(request));

        if (nationRepository.findById(nationId).isEmpty()) {
            throw new CustomException(ErrorCode.NATION_NOT_FOUND);
        }

        List<TeacherProduct> productList = teacherProductRepository.findAllByNationId(nationId);
        List<TeacherProductAllResDto> resProductList = new ArrayList<>();

        for (TeacherProduct product : productList) {
            TeacherProductAllResDto resDto = TeacherProductAllResDto.builder()
                    .id(product.getId())
                    .title(product.getTitle())
                    .amount(product.getAmount())
                    .images(s3UploadService.getImageURLs(product.getImages()))
                    .count(product.getCount())
                    .sold(product.getSold())
                    .rental(product.getRental())
                    .date(product.getDate().format(formatter))
                    .build();

            resProductList.add(resDto);
        }

        return resProductList;
    }

    /**
     * 쿠폰 유형의 교사 상품을 구매합니다.
     *
     * @param id 상품 id
     */
    @Transactional
    @Override
    public void buyCoupon(HttpServletRequest request, Long id) {
        String token = jwtTokenProvider.parseJwt(request);
        Long nationId = jwtTokenProvider.getNation(token);
        Long studentId = jwtTokenProvider.getId(token);

        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new CustomException(ErrorCode.USER_NOT_FOUND));

        // 타입이 일치하는지 확인
        TeacherProduct product = teacherProductRepository.findByIdAndNationId(id, nationId)
                .orElseThrow(() -> new CustomException(ErrorCode.NOT_AUTHORIZATION_NATION));
        if (product.getRental()) {
            throw new CustomException(ErrorCode.NOT_COUPON);
        }

        // 재고 있는지 확인
        if (product.getCount() == product.getSold()) {
            throw new CustomException(ErrorCode.SOLD_OUT);
        }

        // 잔고가 충분한지 확인
        int amount = product.getAmount();
        int account = student.getAccount();
        if (amount > account) {
            throw new CustomException(ErrorCode.LOW_BALANCE);
        }

        // 상품 가격 지불
        student.setAccount(account - amount);

        // 거래 내역 추가
        transactionService.addTransactionWithdraw("교사 상점", studentId, amount, product.getTitle());

        // 재고 개수 수정
        product.setSold((byte) (product.getSold() + 1));

        // 인벤토리에 추가
        Optional<Coupon> couponOptional = couponRepository.findByTeacherProductIdAndStudentId(id, studentId);
        Coupon coupon;
        if (couponOptional.isPresent()) {
            coupon = couponOptional.get();
            coupon.setCount((byte) (coupon.getCount() + 1));
        } else {
            coupon = Coupon.builder()
                    .student(student)
                    .teacherProduct(product)
                    .title(product.getTitle())
                    .isAssigned(false)
                    .build();
        }
        couponRepository.save(coupon);
    }

    @Override
    public TeacherProductDetailResDto detailProduct(HttpServletRequest request, Long id) {
        Long nationId = jwtTokenProvider.getNation(jwtTokenProvider.parseJwt(request));

        TeacherProduct product = teacherProductRepository.findByIdAndNationId(id, nationId)
                .orElseThrow(() -> new CustomException(ErrorCode.NOT_AUTHORIZATION_NATION));

        return TeacherProductDetailResDto.builder()
                .id(id)
                .title(product.getTitle())
                .amount(product.getAmount())
                .images(s3UploadService.getImageURLs(product.getImages()))
                .detail(product.getDetail())
                .count(product.getCount())
                .rental(product.getRental())
                .sold(product.getSold())
                .date(product.getDate().format(formatter))
                .build();
    }
}
