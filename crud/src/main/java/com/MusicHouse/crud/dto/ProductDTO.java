package com.MusicHouse.crud.dto;

import org.springframework.web.multipart.MultipartFile;

import java.util.Arrays;

public class ProductDTO {

    private String name;
    private String category;
    private float price;
    private String description;
    private MultipartFile image;

    public ProductDTO(){

    }

    public ProductDTO(String name, String category, float price, String description, MultipartFile image) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.description = description;
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public MultipartFile getImage() {
        return image;
    }

    public void setImage(MultipartFile image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "ProductDTO{" +
                "name='" + name + '\'' +
                ", categoryId='" + category + '\'' +
                ", price=" + price +
                ", description='" + description + '\'' +
                ", image=" +
                '}';
    }
}
