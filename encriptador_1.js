function validarTexto(texto) {
    // Obtiene el valor del campo de texto
    var valor = texto.value;
    // Crea una expresión regular que permite minúsculas y espacios
    var expReg = new RegExp("^[a-z ]+$");
    // Valida el valor del campo de texto con la expresión regular
    if (!expReg.test(valor)) {
      // Si el valor no es válido, muestra una alerta
      alert("El texto solo puede contener minúsculas y espacios.");
      // Limpia el campo de texto
      texto.value = "";
    }
}
  

function encriptar(){
    let texto = document.getElementById("textoo").value;
    let titulomensaje= document.getElementById("titulodelmensaje");
    let parrafousuario= document.getElementById("parrafousuario");
    let imagenencriptar= document.getElementById("imagencriptar");


    let textoCifrado = texto
      .replace(/e/gi,"enter")
      .replace(/i/gi,"imes")
      .replace(/a/gi,"ai")
      .replace(/o/gi,"ober")
      .replace(/u/gi,"ufat");
      
      if (texto.length !=0 ) {
        document.getElementById("textoo").value = textoCifrado;
        titulomensaje.textContent = "Texto encriptado con exito";
        parrafousuario.textContent = " ";
        imagenencriptar.src="imagenes/celebrando - copia.png";
     }else {
        imagenencriptar.src="imagenes/lupa_azul.png ";
        parrafousuario.textContent= " Ingresa el texto que deseas encriptar ";
        titulomensaje.textContent= "Ningun mensaje fue encontrado";
        alert("Debes ingresar algún texto");
     }
}
      

function desencriptar(){
    let texto = document.getElementById("textoo").value;
    let titulomensaje= document.getElementById("titulodelmensaje");
    let parrafousuario= document.getElementById("parrafousuario");
    let imagenencriptar= document.getElementById("imagencriptar");

    let textoCifrado = texto
       .replace(/enter/gi,"e") 
       .replace(/imes/gi,"i") 
       .replace(/ai/gi,"a") 
       .replace(/ober/gi,"o") 
       .replace(/ufat/gi,"u") ;

    
       if (texto.length !=0 ) {
        document.getElementById("textoo").value= textoCifrado;
        titulomensaje.textContent= "Texto Desencriptado con exito";
        parrafousuario.textContent= " ";
        imagenencriptar.src="imagenes/group-of-people-jumping-celebrating-confetti-party-vector.png";
    } else {
        imagenencriptar.src="imagenes/lupa_azul.png ";
        parrafousuario.textContent= " Ingresa el texto que deseas encriptar o desencriptar ";
        titulomensaje.textContent= "Ningun mensaje fue encontrado";
        alert("Debes ingresar algún texto");
    }  
    
}   

// Función para copiar texto encriptado al portapapeles
function copiarEncriptadoTeclado() {
    const texto = document.getElementById('textoEncriptado').textContent;
    navigator.clipboard.writeText(texto);
  }
  
  // Función para pegar texto del portapapeles al texto desencriptado
  function pegarDesencriptadoTeclado() {
    navigator.clipboard.readText().then(text => {
      document.getElementById('textoDesencriptado').textContent = text;
    });
  }
  
  // Agregar event listeners para teclado
  window.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'c') {
      copiarEncriptadoTeclado();
    } else if (event.ctrlKey && event.key === 'v') {
      pegarDesencriptadoTeclado();
    }
  });
