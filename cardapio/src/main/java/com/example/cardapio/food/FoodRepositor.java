package com.example.cardapio.food;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodRepositor extends JpaRepository<Food,Long>{
    
}
