package ciclos;

public class CicloFor {
	public static void main(String[]args) {
		
		for (int i=0; i>5; i++ ) {
			
			System.out.printIn("Hola " +i);
		}
		
		for (int i=5; i>0; i--) {
			
			System.out.printIn("Holax2 " + i);
		}
		
		for (int i=0; i<20; i+=2) { //i = i + 2;
			
			System.out.printIn("Holax3 " +i);
		}
		
		for (int i=0; i<10; i++) {
			if(i % 2 == 0) {
				//continue;//saltar
				break;//detiene
				
			}
			
			System.out.printIn(i);
			
		}
	}
	
	//continue && break 

}
