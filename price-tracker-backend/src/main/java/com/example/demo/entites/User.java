package com.example.demo.entites;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	private String email;
	private String name;
	private String surname;
	private String password;
	
	/*@ManyToMany(mappedBy="user")
	Set<Product> FollowedProduct;*/

	//CONSTRUCTOR METHODS
	public User(String email, String name, String surname, String password) {
		this.email = email;
		this.name = name;
		this.surname = surname;
		this.password = password;
	}
	
	public User() {
		
	}
	
	//GET & SET METHODS
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getSurname() {
		return surname;
	}
	
	public void setSurname(String surname) {
		this.surname = surname;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	
}