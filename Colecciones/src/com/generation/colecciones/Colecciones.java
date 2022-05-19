package com.generation.colecciones;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;


public class Colecciones {
	public static void main(String[] args) {
		
		//List - ArrayList 
		//picoparentesis
		System.out.println("\tList --- ArrayList");
		List<String> miArray = new ArrayList<String>(); 
		
		miArray.add("Pedro");
		miArray.add("Yair");
		miArray.add("Maria");
		miArray.add(1, "Raul");
		
		String elemento = miArray.remove(1);
		
		System.out.println(miArray);
		System.out.println(miArray.size());//length//se puede modificar el tamaño de las colecciones
		System.out.println(elemento);
		
		
		imprimir(miArray);
		
		/*wrappers
		 * long ==> Long
		 * double ==> Double 
		 * int ==> Integer
		 * boolean ==> Boolean
		 * 
		 */
		
		int num1 = 10;
		Integer num2 = 10;
		
		System.out.println(num1); 
		System.out.println(num2.getClass().getSimpleName()); 
		
		List<Object> miArray2 = new ArrayList<Object>();
		
		miArray2.add(3);
		miArray2.add(309876);
		miArray2.add(33456);
		miArray2.add(3);
		miArray2.add(33409876);
		miArray2.add(3398656);
		
		imprimir(miArray2);
		
		System.out.println("\t Set --- HashSet ");
		Set<String> miSet = new HashSet<String>();
		//no acepta elementos duplicados
		//no los guarda en un orden especifico
		//La coleccion que funciona más rápido
		miSet.add("Martha");
		miSet.add("Martha");
		miSet.add("Lupe");
		miSet.add("Juan");
		miSet.add("Juan");
		miSet.add("Gabriel");
		
		miSet.remove(2);
		
		System.out.println(miSet);
		
		imprimir(miSet);
		
		System.out.println(miSet.contains("Yair"));
		
		
		//Map -- HashMap
		//<Key/llave, value/valor
		System.out.println("\t Map --- HashMap");
		
		Map<String, Integer> miMap = new HashMap<String, Integer>(); 
		
		miMap.put("Valor 1", 45);
		miMap.put("Valor 2", 50);
		miMap.put("Valor 3", 67);
		miMap.put("Valor 4", 89);
		
		System.out.println(miMap.values()); //<-- "values" trae los valores en esta colección
		System.out.println(miMap.keySet()); //<-- todas las llaves
		System.out.println(miMap.get("Valor 1"));//<-- para buscar en especifico uno de los valores

		
		for(String llave : miMap.keySet()) {
			System.out.println(llave + ":" + miMap.get(llave));
		}
		
	}
	
	
	
	
	
	public static void imprimir(Collection coleccion) {
		for(Object elemento : coleccion ) {
			System.out.println("Elemento = " + elemento);
		}
		
	}
	
	
	

}
