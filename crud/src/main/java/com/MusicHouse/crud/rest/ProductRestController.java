package com.MusicHouse.crud.rest;


import com.MusicHouse.crud.dao.CategoryDAOImpl;
import com.MusicHouse.crud.dto.ProductDTO;
import com.MusicHouse.crud.entity.Category;
import com.MusicHouse.crud.entity.Product;
import com.MusicHouse.crud.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://127.0.0.1:5173")
public class ProductRestController {

    private ProductService productService;
    @Autowired
    private CategoryDAOImpl categoryDAO;

    @Autowired
    public ProductRestController(ProductService theProductService){
        productService = theProductService;
    }

    @GetMapping("/products")
    public List<Product> findAll(){
        return productService.findAAll();
    }

    @GetMapping("/products/{categoryOrName}")
    public List<Product> getProduct(@PathVariable String categoryOrName){
        List<Product> productsCatName= productService.findByCategoryOrName(categoryOrName);
        if( productsCatName.size() == 0){
            throw new RuntimeException("Product not found");
        }
        return productsCatName;
    }

    // Add mapping for POST /products - add new product
    @PostMapping("/products")
    public Product addProduct(@ModelAttribute ProductDTO theProductDTO) throws IOException {
        System.out.println(theProductDTO);

        byte[] imageBytes = null;

        try{
            imageBytes= theProductDTO.getImage().getBytes();
        }catch (IOException e){
            e.printStackTrace();
        }

        Product theProduct = new Product();
        theProduct.setName(theProductDTO.getName());
        theProduct.setPrice(theProductDTO.getPrice());
        theProduct.setDescription(theProductDTO.getDescription());
        theProduct.setImage(imageBytes);

        Category category = categoryDAO.findById(Integer.parseInt(theProductDTO.getCategory()));

        theProduct.setCategory(category);

        Product dbProduct = productService.save(theProduct);
        return  dbProduct;

    }

    @DeleteMapping("/products/{productId}")
    public String deleteProduct(@PathVariable int productId){
        Product theProduct = productService.findById(productId);

        if(theProduct == null){
            throw new RuntimeException("Product id not found" + productId);

        }
        productService.deleteById(productId);
        return "Deleted product id= "+ productId;

    }




}
