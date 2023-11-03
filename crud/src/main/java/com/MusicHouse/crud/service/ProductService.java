package com.MusicHouse.crud.service;

import com.MusicHouse.crud.dto.ProductDTO;
import com.MusicHouse.crud.entity.Product;

import java.util.List;

public interface ProductService {

    List<Product> findAAll();
    List<Product> findByCategoryOrName( String categoryOrName);
    Product findById(int id);
    void deleteById(int id);
    Product save(Product theProduct);
}
