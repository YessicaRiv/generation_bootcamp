package com.generation.excepciones;

public class Excepciones {

	public static void main(String[] args) {
		int num1 = 10;
		int num2 = 0;
		
		float division;
		
		
		//try-catch finally 
		try {
			//codigo que vamos a probar 
			division = num1 / num2;
		}catch(ArithmeticException ex) { //la excepcion a observar
			//lo que se va a realizar cuando se detecte una excepcion 
			division = 0.0f;
			System.out.println("Error: " +ex.getMessage());
		}catch(NullPointerException ex)	 {
			
		}finally {
			System.out.println("Finalizó el try catch");
		}
		

	}

}
