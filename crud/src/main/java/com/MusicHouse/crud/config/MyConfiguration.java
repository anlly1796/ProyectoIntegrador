package com.MusicHouse.crud.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MyConfiguration {

    @Bean
    public WebMvcConfigurer corsConfigurer(){
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // permite configurar CORS para todas las rutas
                        .allowedOrigins("http://127.0.0.1:5173") // permite solo a este origen
                        .allowedMethods("GET", "POST", "PUT", "DELETE"); // métodos permitidos
            }
        };
    }
}
