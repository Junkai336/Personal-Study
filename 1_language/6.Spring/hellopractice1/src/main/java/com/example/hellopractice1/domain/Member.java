package com.example.hellopractice1.domain;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Member {

    private Long id;
    private String name;

}
