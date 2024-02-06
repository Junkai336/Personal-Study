package com.example.hellopractice1.service;

import com.example.hellopractice1.domain.Member;
import com.example.hellopractice1.repository.MemberRepository;
import com.example.hellopractice1.repository.MemoryMemberRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
//@RequiredArgsConstructor
public class MemberService {

    // 이건 안되나?
//    private final MemoryMemberRepository memoryMemberRepository;

    private final MemberRepository memberRepository;
    @Autowired
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    //    회원가입
    // 왜 굳이 id를 리턴하지???
    public Long join(Member member) {
        validateDuplicateMember(member);
        memberRepository.save(member);
        return member.getId();
    }

    // isPresent : Optional 객체가 값을 가지고 있으면 true 없으면 false
    // ifPresent : Optional 객체가 값을 가지고 있으면 실행 없으면 넘어감
    private void validateDuplicateMember(Member member) {
        memberRepository.findByName(member.getName())
    .ifPresent(m -> {
        throw new IllegalStateException("이미 존재하는 회원입니다.");
    });
    }

    // 회원 조회
    public List<Member> findMember() {
        return memberRepository.findAll();
    }

    // memberId?
    public Optional<Member> findOne(Long memberId) {
        return memberRepository.findById(memberId);
    }


}
