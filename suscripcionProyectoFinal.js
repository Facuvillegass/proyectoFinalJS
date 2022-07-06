let nombreSuscripcion = document.getElementById("nombreSuscripcion")
let apellidoSuscripcion = document.getElementById("apellidoSuscripcion")
let correoElectronicoSuscripcion = document.getElementById("correoElectronicoSuscripcion")
let btnSuscripcion = document.getElementById("btnSuscripcion")

let datosSuscripciones = []


class DatoSuscripcion {
    constructor (nombre, apellido, correoElectronico)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correoElectronico = correoElectronico;
    }
}

btnSuscripcion.addEventListener("click", () => {
    let nuevoSuscriptor = new DatoSuscripcion (nombreSuscripcion.value,apellidoSuscripcion.value,correoElectronicoSuscripcion.value)
    localStorage.setItem("nuevoSuscriptor", JSON.stringify(nuevoSuscriptor))

    let validacionCorreo = correoElectronicoSuscripcion.value
    if (nombreSuscripcion.value != "" && apellidoSuscripcion.value != "" && correoElectronicoSuscripcion.value != "" && (validacionCorreo.includes("@")) )
    {swal(
        {
            text: "Perfecto! Te has suscripto correctamente!",
            customClass: "swal-text",
           }
      );
      nombreSuscripcion.value = ""
      apellidoSuscripcion.value = ""
      correoElectronicoSuscripcion.value = ""
      datosSuscripciones.push(nuevoSuscriptor)
    }

    else if (nombreSuscripcion.value != "" && apellidoSuscripcion.value != "" && correoElectronicoSuscripcion.value != "" && (!validacionCorreo.includes("@")) )
    {
        Toastify({
            text: "Tu correo electrónico no es correcto!",
            duration: 3000,
            newWindow: true,
            gravity: "top", 
            position: "right",
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #f08080, #ff0000)",
            }
          }).showToast();  
    }
    
    else if (nombreSuscripcion.value === "" || apellidoSuscripcion.value === "" || correoElectronicoSuscripcion.value === "")
    {
        Toastify({
            text: "Parece que falta rellenar algunos campos!",
            duration: 3000,
            newWindow: true,
            gravity: "top", 
            position: "right",
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #f08080, #ff0000)",
            }
          }).showToast();
    }
 
    
})
