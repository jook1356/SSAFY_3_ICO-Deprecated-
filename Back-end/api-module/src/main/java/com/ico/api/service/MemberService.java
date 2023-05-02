package com.ico.api.service;

import com.ico.api.dto.LoginDto;

/**
 * Member Service
 *
 * @author 강교철
 */
public interface MemberService {

    /**
     * LoginDto 로 아이디와 비밀번호를 받은 후 검사를 하고 jwtProvider 를 호출
     *
     * @param members
     * @return generateJwtToken
     */
    public String login(LoginDto members);
}
