package com.SpringBootProject.domain.practice;

import com.SpringBootProject.core.MyBatisMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface PracticeMapper extends MyBatisMapper {
    int insert(Map<String, Object> param);
//    List<TableMap> select(Map<String, Object> param);
    int update(Map<String, Object> param);
    int delete(Map<String, Object> param);
}

//mybatis 사용 시 mapper interface가 반드시 필요한 경우는
//mapper xml 파일을 어노테이션 방식으로 대체하고자 하는 경우입니다.
//즉 mybatis @기능 사용을 위해 mapper interface가 필요한 것입니다.
//물론 mybatis에서는 유연성을 제공하기 위해 mybatis @ + xml + mapper interface 혹은 xml + mapper interface 조합도 가능하도록 만들었습니다.
//
//@ 어노테이션을 통해 mapper xml 설정을 대체하지 않더라도
//mapper interface 사용 시 장점을 꼽자면,
//DAO 클래스의 불필요한 코드와 작업을 줄여줄 수 있다는 점입니다.
//일반적으로 DAO클래스에서는 statement id 호출 기능만 하는 경우가 많습니다.
//예를 들어 void insert(vo) { insert("queryId", vo); } 이런식으로 구성됩니다.
//ServiceImpl에서는 insert를 호출하면, DAO클래스 메서드 내부에서는 queryId를 파라미터로 또 다시 insert메서드를 호출하게 됩니다.
//여기서 DAO의 핵심 역할이 queryId를 호출한다라는 것이라면, 굳이 insert, insert를 두번 호출하는 구조를 가질 필요가 없겠죠.
//그러나 interface로 변경하게 되면 굳이 statement id를 호출하는 메서드 정의부를 작성할 필요가 없어지게 되고,
//메서드명 자체가 각 statement id로 동작하기 때문에 코드 작성도 간편해지게 됩니다.
//
//mapper interface 로 구현하시는 경우에는 extends 구문이 없습니다.