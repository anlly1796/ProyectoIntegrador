package com.MusicHouse.crud.service;

import com.MusicHouse.crud.dao.ProductDAO;
import com.MusicHouse.crud.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService{

    private ProductDAO productDAO;

    @Autowired
    public ProductServiceImpl(ProductDAO theProductDAO){
        productDAO = theProductDAO;
    }
    @Override
    public List<Product> findAAll() {
        return productDAO.findAll();
    }

    @Override
    public List<Product> findByCategoryOrName(String categoryOrName) {
        return productDAO.findByCategoryOrName(categoryOrName);
    }

    @Override
    public Product findById(int id) {
        return productDAO.findById(id);
    }

    @Transactional
    @Override
    public void deleteById(int id) {
        productDAO.deleteById(id);

    }

    @Transactional
    @Override
    public Product save(Product theProduct) {
        return productDAO.save(theProduct);
    }


}
