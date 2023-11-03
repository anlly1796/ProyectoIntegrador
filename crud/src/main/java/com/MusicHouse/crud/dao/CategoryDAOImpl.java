package com.MusicHouse.crud.dao;

import com.MusicHouse.crud.entity.Category;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CategoryDAOImpl implements CategoryDAO {

    private EntityManager entityManager;

    @Autowired
    public CategoryDAOImpl( EntityManager theEntityManager){
        entityManager = theEntityManager;
    }

    @Override
    public Category findById(Integer id) {
        return entityManager.find(Category.class, id);
    }
}
