package com.MusicHouse.crud.dao;

import com.MusicHouse.crud.entity.Product;

import java.util.List;

public interface ProductDAO {

    List<Product> findAll();

    List<Product> findByCategoryOrName( String categoryOrName);

    Product findById(int id);
    void deleteById(int id);

    Product save(Product theProductDTO);

}
