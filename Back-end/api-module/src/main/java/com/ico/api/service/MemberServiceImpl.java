package com.ico.api.service;

import com.ico.api.dto.LoginDto;
import com.ico.api.user.JwtTokenProvider;
import com.ico.core.entity.Student;
import com.ico.core.entity.Teacher;
import com.ico.core.repository.StudentRepository;
import com.ico.core.repository.TeacherRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {

    private final TeacherRepository teacherRepository;
    private final StudentRepository studentRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final PasswordEncoder passwordEncoder;

    @Override
    public String login(LoginDto members) {
//        String password = passwordEncoder.encode(members.getPassword());      // 받은 비밀번호를 인코딩하면 다르게 인코딩(암호화)돼서 비교가 안됌

        if (teacherRepository.findTeacherByIdentity(members.getIdentity()).isPresent()) {
            Teacher teacher = teacherRepository.findTeacherByIdentity(members.getIdentity())
                    .orElseThrow(() -> new IllegalArgumentException("가입되지 않은 ID 입니다."));

//            if (!teacher.getPassword().equals(password)) {
            if (!passwordEncoder.matches(members.getPassword(), teacher.getPassword())) {
                throw new IllegalArgumentException(teacher.getPassword() + members.getPassword() + "잘못된 비밀번호입니다.");
            }
        }
        else {
            Student student = studentRepository.findStudentByIdentity(members.getIdentity())
                    .orElseThrow(() -> new IllegalArgumentException("가입되지 않은 ID 입니다."));
//            if (!student.getPassword().equals(password)) {
            if (!passwordEncoder.matches(members.getPassword(), student.getPassword())) {
                throw new IllegalArgumentException(student.getPassword() + members.getPassword() + "잘못된 비밀번호입니다.");
            }
        }

        return jwtTokenProvider.generateJwtToken(members);
    }

}
