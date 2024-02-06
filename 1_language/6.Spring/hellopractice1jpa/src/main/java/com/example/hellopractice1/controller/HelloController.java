//package com.example.hellopractice1.controller;
//
//import com.example.hellopractice1.repository.HelloRepository;
//import com.example.hellopractice1.service.HelloService;
//import lombok.Getter;
//import lombok.RequiredArgsConstructor;
//import lombok.Setter;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.ResponseBody;
//
//@Controller
//@RequiredArgsConstructor
//public class HelloController {
//
//    private final HelloService helloService;
//
//    @GetMapping(value = "/")
//    public String toHello(Model model) {
//        model.addAttribute("gogo", "model.addAttribute");
//        return "/hello";
//    }
//
//    @GetMapping(value = "/a1")
//    public String toHello2(Model model) {
//        String name = "a";
//        String name2 = "a2";
//        model.addAttribute("name1", name);
//        model.addAttribute("name2", name2);
//        return "/hello2";
//    }
//
//    // 스프링2
//    // 안되는데?
//    @GetMapping(value = "/a2")
//    public String toHello3(@RequestParam("name1") String name1, @RequestParam("name2") String name2, Model model) {
//        model.addAttribute("name1", name1);
//        model.addAttribute("name2", name2);
//        return "/hello2";
//    }
//
//    // 스프링2
//    // http://localhost:8080/a3?name=dd
//    // 결과값이 hello3dd
//    @GetMapping(value = "/a3")
//    @ResponseBody
//    public String hmm(@RequestParam("name") String name) {
//        return "hello3" + name;
//    }
//
//
//    // http://localhost:8080/a4?name=22
//    // JSON 형식으로 데이터가 웹 브라우저로 감
//    @GetMapping("a4")
//    @ResponseBody // http body에 data 값을 넣어준다. // RequestParam으로 얻은 값을 보내주는듯?
//    public Hello helloapi(@RequestParam("name") String name) {
//        Hello hello = new Hello();
//        hello.setName(name);
//        return hello; // hello 객체를 return
//    }
//
//    @Getter
//    @Setter
//    static class Hello {
//        private String name;
//    }
//}