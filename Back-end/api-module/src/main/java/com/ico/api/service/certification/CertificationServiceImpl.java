package com.ico.api.service.certification;

import com.ico.api.dto.certification.CertificationResDto;
import com.ico.api.service.S3UploadService;
import com.ico.api.user.JwtTokenProvider;
import com.ico.core.code.Role;
import com.ico.core.entity.Certification;
import com.ico.core.entity.Teacher;
import com.ico.core.exception.CustomException;
import com.ico.core.exception.ErrorCode;
import com.ico.core.repository.CertificationRepository;
import com.ico.core.repository.TeacherRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * @author 강교철
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class CertificationServiceImpl implements CertificationService{

    private final CertificationRepository certificationRepository;
    private final TeacherRepository teacherRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final S3UploadService s3;

    @Transactional
    public void approveCertification(HttpServletRequest request, Long id) {
        String token = jwtTokenProvider.parseJwt(request);
        if (token != null && jwtTokenProvider.getRole(token).equals(Role.ADMIN)) {
            // Certification 객체 가져오기
            Optional<Certification> optionalCertification = certificationRepository.findById(id);
            if (optionalCertification.isPresent()) {
                Certification certification = optionalCertification.get();

                // S3 서버에서 파일 삭제
                s3.deleteFile(certification.getImage());

                Teacher teacher = certification.getTeacher();
                teacher.setAssigned(true);
                teacherRepository.save(teacher);

                // Certification 삭제
                certificationRepository.delete(certification);
            }
        }
    }

    public void deleteCertification(HttpServletRequest request, Long id) {
        String token = jwtTokenProvider.parseJwt(request);
        if (token != null && jwtTokenProvider.getRole(token).equals(Role.ADMIN)) {
            // Certification 객체 가져오기
            Optional<Certification> optionalCertification = certificationRepository.findById(id);
            if (optionalCertification.isPresent()) {
                Certification certification = optionalCertification.get();
                // S3 서버에서 파일 삭제
                s3.deleteFile(certification.getImage());
                // Certification 삭제
                certificationRepository.delete(certification);
            }
        }
    }

    @Override
    public Page<CertificationResDto> pageCertification(HttpServletRequest request, Pageable pageable) {
        String token = jwtTokenProvider.parseJwt(request);
        if (token == null || !jwtTokenProvider.getRole(token).equals(Role.ADMIN)) {
            throw new CustomException(ErrorCode.WRONG_ROLE);
        }

        Page<Certification> certificationPage = certificationRepository.findAll(pageable);

        List<CertificationResDto> certificationResDtoList = certificationPage.getContent()
                .stream()
                .map(CertificationResDto::new)
                .collect(Collectors.toList());

        return new PageImpl<>(certificationResDtoList, pageable, certificationPage.getTotalElements());

    }
}
