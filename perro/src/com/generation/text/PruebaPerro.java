package com.generation.text;

import com.generation.model.Perro;

public class PruebaPerro {
	

	public static void main(String[] args) {
		Perro pelusa = new Perro ("Pelusa", "French", "chico", 4, "Blanco");
		
		
		Perro solovino = new Perro("Solovino", "mestizo", "mediano", 2, "Cafe");
		
		pelusa.setHumano("Pedro");
		solovino.setHumano("Daniel");
	
		
		System.out.println(pelusa);
		System.out.println(solovino);
		
		pelusa.comer();
		
		
		
		
		

	}

}
