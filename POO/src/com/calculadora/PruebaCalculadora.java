package com.calculadora;


	public class PruebaCalculadora {
		
		public static void main(String[] args) {
			System.out.println("Vamos a calcular");
		
			int a = 10; 
			Scanner sc = new Scanner(System.in);
			
			//Instanciar - Crear un objeto a partir de una clase 
			Calculadora cal = new Calculadora();
			
			//Metodo que no retorna nada -void 
			cal.sumarMensaje();
			
			//Meotodo que regresa un valor 
			String mensaje = cal.mensaje();
			System.out.printlnmensaje);
			
			double prueba = cal.prueba();
			System.out.println(prueba);
			
			//Metodos con parametros 
			int suma = cal.sumar(10, 20);
			System.out.println(suma);
			
			cal.sumarM(8,  5);
			
			int resta = cal.restar(8, 1);
			System.out.println(resta);
			
			
			//Instanciar
			Areas calAreas = new Areas ();
			
			calAreas.mensaje();
			
			calAreas.areaCuadrado = calAreas.areaCuadrado(5);
			System.out.println(areaC);
			
			double areaT = calAreasTriangulo(5;10);
			System.out.println(areaT);
			
	}

}
