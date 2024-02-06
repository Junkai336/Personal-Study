package com.example.hellopractice1.controller;

import com.example.hellopractice1.domain.Member;
import com.example.hellopractice1.domain.MemberDto;
import com.example.hellopractice1.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;
import java.util.Optional;

@Controller
//@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }


    // 컨트롤러가 정적 컨텐츠보다 우선순위가 높음
    @GetMapping(value = "/")
    public String home () {
        return "home";
    }

    // a태그로 member/new로 오면 createMemberForm.html로 가게 한다. (다이렉트로 안하는 이유는 잘 모르겠음)
    // createMemberform에서 form_action으로 form에 작성한 데이터는 member/new로 간다. (submit 타입의 button 누르면 경로로 전송되는 듯)
    // => new에서 다 처리하려고 하는 듯?
    @GetMapping(value = "/member/new")
    public String createForm() {
        return "member/createMemberForm";
    }

    // members 선언. 리스트타입이고. memberRepository의 findAll 메소드
    // 그것을 모델로 키 값을 저장해서 리스트로 반환.
    // 경로 또한 리스트로 바로 이동한다.
    @PostMapping(value = "/member/new")
    public String createMember(MemberDto memberDto) {

        Member member = new Member();

        // input으로 날라온 name이 적용되는 것인지..? 아무래도 맞는거같은데?
        member.setName(memberDto.getName());

        // 이건 안되는듯;
//        member.builder()
//                .name(memberDto.getName())
//                .build();

        memberService.join(member);

        return "redirect:/";
    }



    // 회원목록으로
    @GetMapping(value = "/member/list")
    public String list(Model model) {

        List<Member> members = memberService.findMember();
        model.addAttribute("members", members);

        // 그냥한거
        Optional<Member> test = memberService.findOne(1L);
        System.out.println(test.get().getName());


        return "member/memberlist";
    }


}
