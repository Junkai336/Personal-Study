package com.SpringBootProject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

// enablewebmvc 어노테이션을 쓰면 jsp가 제대로 실행안됨
// Spring Boot 의 고유기능을 사용하기 위해서는 @EnableWebMvc 는 사용하지 않습니다.
//@EnableWebMvc를 사용하면 Spring MVC를 사용하게 되어 직접 MVC 설정을 해주어야 한다는 의미입니다.
//@EnableWebMvc
@SpringBootApplication
public class SpringBootProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootProjectApplication.class, args);
	}

}
