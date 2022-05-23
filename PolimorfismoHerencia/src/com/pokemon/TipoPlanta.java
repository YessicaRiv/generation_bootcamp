package com.pokemon;

public class TipoPlanta extends Pokemon {
	
	
	//atributos
	private int numeroHojas;
	
	public int getNumeroHojas() {
		return numeroHojas;
	}

	public void setNumeroHojas(int numeroHojas) {
		this.numeroHojas = numeroHojas;
	}

	//constructor
	public TipoPlanta (int id, int edad, int nivel, String nombre, boolean evolucion, int numeroHojas) {
		super(id,edad,nivel,nombre,evolucion);
		this.numeroHojas = numeroHojas;
	}
	 
	//metodo
	public void paralizar() {
		System.out.println(getNombre() + "esta Paralizando");
	}
	
	public void envenenar() {
		System.out.println(getNombre() + "esta Envenenando");
	}

}
