package com.example.cardapio.controller;

import com.example.cardapio.food.Food;
import com.example.cardapio.food.FoodRepositor;
import com.example.cardapio.food.FoodRequestDTO;
import com.example.cardapio.food.FoodResponseDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("food")
public class FoodContoller {
    @Autowired
    private FoodRepositor repository;
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    @PostMapping
    public void saveFood(@RequestBody FoodRequestDTO data){
        Food foodData = new Food(data);
        repository.save(foodData);

    }
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    @GetMapping
    public List<FoodResponseDTO> getALL(){
      List<FoodResponseDTO > foodList = repository.findAll().stream().map(FoodResponseDTO::new).toList();
      return foodList;
    }
}
