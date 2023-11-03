package com.MusicHouse.crud.dao;

import com.MusicHouse.crud.dto.ProductDTO;
import com.MusicHouse.crud.entity.Product;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class ProductDAOJPAImpl implements ProductDAO{

    // define field for entitymanager
    private EntityManager entityManager;

    // set up constructor

    @Autowired
    public ProductDAOJPAImpl( EntityManager theEntityManager){
        entityManager = theEntityManager;
    }

    @Override
    public List<Product> findAll() {

        // create a query
        TypedQuery<Product> theQuery = entityManager.createQuery("from Product", Product.class);
        // execute query and get result list
        List<Product> products = theQuery.getResultList();
        // return the results
        return products;
    }

    @Override
    public List<Product> findByCategoryOrName(String categoryOrName) {
        String queryString = "SELECT p FROM Product p WHERE p.name LIKE :term OR p.category.name LIKE :term";
        TypedQuery<Product> items = entityManager.createQuery(queryString, Product.class);
        items.setParameter("term","%" + categoryOrName + "%");
        List<Product> productsCN= items.getResultList();
        return productsCN;
    }

    @Override
    public Product findById(int id) {
        Product theProduct = entityManager.find(Product.class, id);

        return theProduct;
    }

    @Override
    public void deleteById(int id) {
        Product theProduct= entityManager.find(Product.class, id);
        entityManager.remove(theProduct);
    }

    @Override
    public Product save(Product theProduct) {

        Product dbProduct = entityManager.merge(theProduct);
        return dbProduct;
    }
}
