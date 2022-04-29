const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const formulario = document.querySelector("form")
/* console.log(formulario); */

const inputs = document.querySelectorAll("input")
/*console.log(inputs); */

const nombreError = doc.querySelector("#errorNombre");
const ApellidoError = doc.querySelector("#errorNombre");
const emailError = doc.querySelector("#errorEmail");
const passwordError = doc.querySelector("#errorPassword");
const telefonoError = doc.querySelector("#errorTelefono");

/*console.log(TelefonoError); */

const statusInf = {
	nombre: false, 
	apellido: false,
	email: false,
	password: false,
	telefono: false, 
}


inputs.forEach((inp,i,inputsCompleto)=>{
/*console.log(inp); */
inp.addEventListener("keyup",(e)=>{
	/*console.log(e.target.name); */

	switch(e.target.name){
		case "nombre":
			/*console.log(e.target.value); */
			if (expresiones.nombre.test(e.target.value)){
				statusInf.nombre = true;
				nombreError.textContent = ""
			}
			/* console.log e.target.value)); { */
			if (expresiones.nombre.test(e.target.value)){
				statusInf.nombre = true;
				nombreError.textContent = ""
			}

			 
				else 
			{
				
			}
		


			break
			case "apellido":
			
				if(expresiones.nombre.test(e.target.value)) {
					
						statusInf.nombre = true;
						nombreError.textContent = ""
				} 

				else {
					
				}
				statusInf.nombre = true;
				nombreError.textContent = ""


				break
				case "email":
				
					if(expresiones.nombre.test(e.target.value)) {
						console.log("email")
					} 
	
					else {
						console.log("email");
					}

					break
			case "password":
			
				if(expresiones.nombre.test(e.target.value)) {
					console.log("password correcto")
				} 

				else {
					statusInf.nombre = true;
				nombreError.textContent = ""
				}

				break
			case "telefono":
			
				if(expresiones.nombre.test(e.target.value)) {
					console.log("telefono correcto")
				} 

				else {
					console.log("telefono incorrecto");
				}


			}
				
})

formulario.addEventListener("submit",(e)=>{
	e.preventDefault();
	/*console.log(Object.values(statusInf)); */
	/*console.log(Object.values(statusInf).includes(false)); */
	const check = document.querySelector("#terminos").checked 
	/*console.log(check) */
	if(Object.values(statusInf).includes(false)) {
		console.log("Enviado")
	}
	else 
     {

	console.log("No enviado")
}

}


