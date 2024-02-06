package com.example.hellopractice1.service;

import com.example.hellopractice1.domain.Member;
import com.example.hellopractice1.repository.MemberRepository;
import com.example.hellopractice1.repository.MemoryMemberRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

// class MemberServiceTest {

//    MemberService memberService = new MemberService();
//    MemoryMemberRepository memberRepository;
//
//    @BeforeEach
//    public void beforeEach() {
//        memberRepository = new MemoryMemberRepository();
////        memberService = new MemberService(memberRepository);
//    }
//
//    @AfterEach
//    public void afterEach() {
//        memberRepository.clearStore();
//    }
//
//    @Test
//    public void 회원가입() throws Exception {
//        Member member = new Member();
//        member.setName("hello");
//
//        Long saveId = memberService.join(member);
//
//        Member findMember = memberRepository.findById(saveId).get();
//        assertEquals(member.getName(), findMember.getName());
//    }
//
//    @Test
//    public void 중복회원예외() throws Exception {
//        Member member1 = new Member();
//        Member member2 = new Member();
//
//        member1.setName("hello");
//        member2.setName("hello");
//
//        memberService.join(member1);
//
//        // 예외가 발생해야 한다? 안되는데?
//        IllegalStateException e = assertThrows(IllegalStateException.class,
//                () -> memberService.join(member1));//예외가 발생해야 한다.
//        assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원입니다.");
//    }
//}

