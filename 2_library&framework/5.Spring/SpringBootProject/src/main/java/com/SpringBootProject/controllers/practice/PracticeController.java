package com.SpringBootProject.controllers.practice;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
public class PracticeController {

    @RequestMapping(value = "crud", method = GET)
    public String crud() {
        return "crud";
    }

}
