package com.SpringBootProject.controllers.practice;

import com.SpringBootProject.domain.practice.PracticeService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;
import javax.xml.ws.Response;
import java.util.HashMap;
import java.util.Map;

@Controller
public class PracticeController {

    @Inject
    private PracticeService practiceService;

    @RequestMapping(value = "/practice", method = RequestMethod.GET)
    public String practice(Model model) {

//        List<>
//
//        model.addAttribute()

        return "practice";
    }

    @RequestMapping(value = "/createTable", method = RequestMethod.GET)
    public ResponseEntity createTable() {
        practiceService.create();
        return ResponseEntity.ok().build();
    }

    @RequestMapping(value = "/insert", method = RequestMethod.GET)
    public ResponseEntity insert() {
        practiceService.insert();
        return ResponseEntity.ok().build();
    }

    @RequestMapping(value = "/update", method = RequestMethod.GET)
    public ResponseEntity update() {
        practiceService.update();
        return ResponseEntity.ok().build();
    }

    @RequestMapping(value = "/delete", method = RequestMethod.GET)
    public ResponseEntity delete() {
        practiceService.delete();
        return ResponseEntity.ok().build();
    }


}
