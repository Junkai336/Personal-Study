package com.example.hellopractice1.repository;

import com.example.hellopractice1.domain.Member;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class MemoryMemberRepository implements MemberRepository {

    private static Map<Long, Member> store = new HashMap<>();

    private static long sequence = 0L;

    // sequence 값이 증가하고 그걸 id 번호로 넣는다. (sequence의 값은 초기화되지 않나봄. 이 객체에서만 도니깐)
    // map에 set한 id 저장하고 , Member 클래스 타입의 member 객체를 저장함. (key:id, value:member)
    // 리턴타입이 멤버. 멤버를 되돌려준다. 라는 건 그냥 저장하고 다시 돌려준다는 의미 같은데??? (void는 안되나?)
    @Override
    public Member save(Member member) {
        member.setId(++sequence);
        store.put(member.getId(), member);
        return member;
    }

    // ofNullable : null 값을 허용하겠다.
    // of : null 값을 허용하지 않겠다.
    @Override
    public Optional<Member> findById(Long id) {
        return Optional.ofNullable(store.get(id));
    }

    // .values() : map의 value 얘긴듯
    // .filter()...
    // .findAny()... : 처음 필터링 된 요소 1개를 리턴
    @Override
    public Optional<Member> findByName(String name) {
        return store.values().stream()
                .filter(member -> member.getName().equals(name))
                .findAny();
    }

    // map의 value를 리스트로 만들겠다. 이런 표현식이 되는듯
    @Override
    public List<Member> findAll() {
        return new ArrayList<>(store.values());

    }

    public void clearStore() {
        store.clear();
    }

}
