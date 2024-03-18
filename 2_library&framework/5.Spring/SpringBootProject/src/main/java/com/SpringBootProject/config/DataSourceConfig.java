package com.SpringBootProject.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;

// 마이바티스 연결을 위한 데이터소스 정의
// 데이터 소스 설정: Spring 설정 파일에서 데이터 소스를 정의하고 구성해야 합니다. 이 데이터 소스는 어플리케이션이 사용할 데이터베이스와의 연결을 설정합니다.
@Configuration
public class DataSourceConfig {
    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        dataSource.setUrl("jdbc:sqlserver://localhost:7700;databaseName=mybatispractice");
        dataSource.setUsername("sa");
        dataSource.setPassword("gkql123");
        return dataSource;
    }
}
