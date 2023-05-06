package com.ico.api.service.student;

import com.ico.api.dto.user.AccountDto;
import com.ico.api.dto.student.StudentListResDto;
import com.ico.api.dto.student.StudentResDto;
import com.ico.api.dto.user.StudentSignUpRequestDto;

import java.util.List;

/**
 * Student Service
 *
 * @author 강교철
 * @author 변윤경
 * @author 서재건
 */
public interface StudentService {

    /**
     * StudentSignUpRequestDto 를 받아 학생 회원가입
     *
     * @param requestDto
     * @return student.getId()
     */
    public Long signUp(StudentSignUpRequestDto requestDto);

    public void teacherUpdateAccount(Long id, AccountDto accountDto);

    /**
     * 우리 반 학생 목록 조회
     *
     * @return
     */
    List<StudentListResDto> findAllStudent();

    /**
     * 학생 상세보기 조회
     *
     * @return
     */
    StudentResDto findStudent(Long studentId);

}