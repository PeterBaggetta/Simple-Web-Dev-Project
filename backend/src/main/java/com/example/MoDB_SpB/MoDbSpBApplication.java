package com.example.MoDB_SpB;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class MoDbSpBApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoDbSpBApplication.class, args);
	}

}
