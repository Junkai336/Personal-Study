package com.SpringBootProject.domain.practice;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.Map;

@Service
public class PracticeService {
    //     @Inject와 @Autowired는 어노테이션 내에서의 차이점은 있지만, 의존성 주입을 위해 동일한 목적으로 사용됩니다.
    //     @Autowired를 사용하면 Spring의 다양한 기능과 호환성을 보장할 수 있으며,
    //     @Inject는 특정 상황에서 다른 프레임워크와의 호환성을 고려할 때 유용할 수 있습니다.
    @Inject
    private PracticeMapper practiceMapper;

    public void create() { practiceMapper.create();}
    public void insert() { practiceMapper.insert(); }
    public void update() {
        practiceMapper.update();
    }
    public void delete() {
        practiceMapper.delete();
    }

}
