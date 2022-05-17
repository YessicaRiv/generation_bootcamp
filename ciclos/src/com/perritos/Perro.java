package com.perritos;

public class Perro {
	
	//Atributos o propiedades
	String nombre;
	int edad;
	String raza;
	String tamanio;
	
	//constructor
	public Perro(String nombre) {
		this.nombre = nombre; 
		
	}
	
	//Metodos 
	public void ladrar() {
		System.out.println("El perro", + nombre + " hace Guauf");
		
		
	}

}
