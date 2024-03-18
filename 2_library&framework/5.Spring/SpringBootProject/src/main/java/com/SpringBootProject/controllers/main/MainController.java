package com.SpringBootProject.controllers.main;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import static jdk.nashorn.internal.runtime.PropertyDescriptor.GET;

@Controller
public class MainController {
    @GetMapping(value = "/")
    public String index() {
        return "index";
    }

    @GetMapping(value = "/hello")
    public String hello() {
        return "hello";
    }
}
