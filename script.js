document.getElementById("formulario").addEventListener("submit", function(e){

    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    if(nombre === ""){
        alert("El nombre es obligatorio.");
        return;
    }

    if(correo === ""){
        alert("El correo es obligatorio.");
        return;
    }

    if(!correo.includes("@")){
        alert("Ingrese un correo válido.");
        return;
    }

    if(mensaje.length < 10){
        alert("El mensaje debe contener al menos 10 caracteres.");
        return;
    }

    alert("Formulario enviado correctamente.");

    document.getElementById("formulario").reset();

});