package javabasicp;

public class cicloWhile {
	
	public static void main(String[]args) {
		//while
		int condicion = 0;
		
		while(condicion <5) {//mientras que
			
			System.out.printIn("Hola");
			
			condicion++;
		}
	}
} */


//verificar contraseņa 

String clave = "Pedro";

String comparacion = "";

while(clave.equals(comparacion) == false) {
	
	comparacion = JOptionPane.showInputDialog("Introduce la contraseņa, por favor");
	
	if(clave.equals(comparacion) ==false) {
		System.out.printIn("La contraseņa es incorrecta");
	}
}

System.out.printIn("La contraseņa es correcta"); //clave == comparacion

}

}