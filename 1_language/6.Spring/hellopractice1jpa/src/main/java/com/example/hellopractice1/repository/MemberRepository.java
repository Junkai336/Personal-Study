package com.example.hellopractice1.repository;

import com.example.hellopractice1.domain.Member;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MemberRepository {

    // service에서 member를 set하고 서비스에서 memberrepository.save(전달인자) 메소드를 불러오면 전달인자는 service 시점의 member.
    // 그것을 repository에서 매개변수로 받고 Member 타입으로 저장한다.. 인듯?
    Member save(Member member);

    // 값 반환시 Null 일 수 있기 때문에 그에 관련된 걸 처리하려고 쓴다. 정도만.
    // 추상메소드들.
    Optional<Member> findById(Long id);
    Optional<Member> findByName(String name);

    // 저장된 모든 member를 리스트로 나열하려고?
    List<Member> findAll();
}
