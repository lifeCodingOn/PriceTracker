package com.example.demo.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entites.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

}