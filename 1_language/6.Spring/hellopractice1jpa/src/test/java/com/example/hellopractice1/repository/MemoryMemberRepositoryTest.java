package com.example.hellopractice1.repository;

import com.example.hellopractice1.domain.Member;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

class MemoryMemberRepositoryTest {

    // 메소드의 실행이 끝날 때마다 이걸 실행해준다!
    @AfterEach
            public void afterEach() {
        memoryMemberRepository.clearStore();
    }

    MemoryMemberRepository memoryMemberRepository = new MemoryMemberRepository();

    @Test
    void save() {
        Member member = new Member();
        member.setName("spring");
        memoryMemberRepository.save(member);

        Member result = memoryMemberRepository.findById(member.getId()).get();

        System.out.println("result = " + (result == member));

        Assertions.assertEquals(member, result);
        assertThat(result).isEqualTo(member);
    }

    // Optional에서 orElse...
    @Test
    void findById() {
        Member member1 = new Member();
        Member member2 = new Member();

        member1.setName("Spring1");
        member2.setName("Spring2");

        memoryMemberRepository.save(member1);
        memoryMemberRepository.save(member2);

        Member result = memoryMemberRepository.findByName("Spring1").orElse(null);
        Member result2 = memoryMemberRepository.findByName("Spring2").orElse(null);

        System.out.println(member1 == member2);
        System.out.println(member1 == result);
        System.out.println(member2 == result2);

        // 같지 않으면 에러가 뜬다!!!
        Assertions.assertEquals(member1, result);

    }

    @Test
    void findByName() {
        Member member1 = new Member();
        Member member2 = new Member();

        member1.setName("Spring1");
        member2.setName("Spring2");

        memoryMemberRepository.save(member1);
        memoryMemberRepository.save(member2);

        Member result = memoryMemberRepository.findById(member1.getId()).orElse(null);
        Member result2 = memoryMemberRepository.findById(member2.getId()).orElse(null);

        System.out.println(member1.getId());
        System.out.println(member2.getId());

        Assertions.assertEquals(member1, result);

    }

    @Test
    void findAll() {

    Member member1 = new Member();
    Member member2 = new Member();

    memoryMemberRepository.save(member1);
    memoryMemberRepository.save(member2);

        List<Member> result = memoryMemberRepository.findAll();

        assertThat(result.size()).isEqualTo(2);

    }
}