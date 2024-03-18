package com.SpringBootProject.controllers.practice;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class PracticeController {

    @RequestMapping(value = "/practice", method = RequestMethod.GET)
    public String crud() {
        return "practice";
    }






}
