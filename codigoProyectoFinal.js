let lista = []
let listaAgregados = []
let contenedorMiLista = document.getElementById("contenedorMiLista")
let listaDeJuagdores = document.getElementById("listaDeJugadores")
let inputBuscarEscrito = document.getElementById("buscarEscrito")
let btnLimpiarBusqueda = document.getElementById("btnLimpiarBusqueda")
let btnResetearFiltros = document.getElementById("btnResetFiltros")
let btnVaciarLista = document.getElementById("btnVaciar")

btnVaciarLista.addEventListener("click", function ()
{
    listaDeJuagdores.innerHTML = ""
    if (listaAgregados.length === 0) 
        {Toastify({
        text: "Su lista ya está vacía",
        duration: 2000,
        newWindow: true,
        gravity: "top", 
        position: "right",
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #f08080, #ff0000)",
        }
      }).showToast();}

    if (listaAgregados.length > 0)
     {
        {Toastify({
            text: "Su lista se ha vaciado correctamente!",
            duration: 2000,
            newWindow: true,
            gravity: "top", 
            position: "right",
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #90ee90, #add8e6)",
            }
          }).showToast();}
     } 

     listaAgregados = []
    
})

async function bienvenida ()
{   

    
    let respuesta = await fetch("baseDeDatos.json")
    let data = await respuesta.json()
    
    let campoSeleccionarResultados = document.getElementById("resultados")
    let btnBuscar = document.getElementById("buscarBtn")


    btnBuscar.addEventListener("click", () => {
  
        /* let seleccionarLiga = document.getElementById("Liga");
        let LigaSeleccionada = seleccionarLiga.selectedIndex;
        let valorLiga = seleccionarLiga.options[LigaSeleccionada].value; */
        
        let seleccionarPosicion = document.getElementById("PosicionUnica");
        let posicionSeleccionada = seleccionarPosicion.selectedIndex;
        let valorPosicion = seleccionarPosicion.options[posicionSeleccionada].value;

        let seleccionarEdad = document.getElementById("Edad");
        let edadSeleccionada = seleccionarEdad.selectedIndex;
        let valorEdad = seleccionarEdad.options[edadSeleccionada].value;

        let seleccionarValorMercado= document.getElementById("ValorMercado");
        let valorMercadoSeleccionado = seleccionarValorMercado.selectedIndex;
        let valorMercado = seleccionarValorMercado.options[valorMercadoSeleccionado].value;

        let seleccionarGoles= document.getElementById("Goles");
        let golesSeleccionado = seleccionarGoles.selectedIndex;
        let valorGoles = seleccionarGoles.options[golesSeleccionado].value;

        let seleccionarMinutosJugados= document.getElementById("MinutosJugados");
        let MinutosJugadosSeleccionado = seleccionarMinutosJugados.selectedIndex;
        let valorMinutosJugados = seleccionarMinutosJugados.options[MinutosJugadosSeleccionado].value;

        let seleccionarDG= document.getElementById("DuelosGanados");
        let DGSeleccionado = seleccionarDG.selectedIndex;
        let valorDuelosGanados = seleccionarDG.options[DGSeleccionado].value;

        let seleccionarPH = document.getElementById("PieHabil");
        let PHSeleccionado = seleccionarPH.selectedIndex;
        let valorPieHabil = seleccionarPH.options[PHSeleccionado].value;

        let seleccionarPas = document.getElementById("Pasaporte");
        let PasSeleccionado = seleccionarPas.selectedIndex;
        let valorPas = seleccionarPas.options[PasSeleccionado].value;

        btnLimpiarBusqueda.addEventListener("click", () =>
        {
           campoSeleccionarResultados.innerHTML = ""
           
        }) 

        btnResetearFiltros.addEventListener("click", () => {
            let formulario = document.getElementById("formulario")
           formulario.reset()
        })
             
     
        let mensajeNoHayJugadores = ' <h2 class="textoAlerta">\
                                    No hay jugadores con los filtros seleccionados.\
                                    <br>\
                                    ¡Cambialos y busca nuevamente!\
                                    </h2>';

        campoSeleccionarResultados.innerHTML = ""
        lista = []

        data.forEach((jugador) => {
            
            let div = document.createElement("div");
                      
            if (                
                (valorPosicion === "TodasPosiciones") ||
                (valorPosicion === "Arquero" && jugador.PosUnica === "GK") ||
                (valorPosicion === "Defensor" && jugador.PosUnica === "DEF")  ||
                (valorPosicion === "Volante" && jugador.PosUnica === "MED")  ||
                (valorPosicion === "Delantero" &&  jugador.PosUnica === "DEL")) { 
            
          /*   if (                
                (valorLiga === "TodasLigas") ||
                (valorLiga === "Argentina1" && jugador.Liga === "Argentina-1") ||
                (valorLiga === "Mexico1" && jugador.Liga === "Mexico-1") ||
                (valorLiga === "Ecuador1" && jugador.Liga === "Ecuador-1") ||
                (valorLiga === "Uruguay1" && jugador.Liga === "Uruguay-1")) { */

            if (
                (valorEdad === "TodasEdades") ||
                (valorEdad === "-20" && jugador.Edad <20) ||
                (valorEdad === "20a25" && jugador.Edad >=20 && jugador.Edad <=25) ||
                (valorEdad === "26a29" && jugador.Edad >=26 && jugador.Edad <=29) ||
                (valorEdad === "+29" && jugador.Edad >29)) {
            
            if (
                (valorGoles === "TodosGoles") ||
                (valorGoles === "0a3G" && jugador.Goles >=1 && jugador.Goles <=3) ||
                (valorGoles === "4a6G" && jugador.Goles >=4 && jugador.Goles <=6) ||
                (valorGoles === "+6G" && jugador.Goles >6)) {
    
            if (
                (valorMercado === "TodosValores") ||
                (valorMercado === "-1M" && jugador.ValorDeMercado <1000000) ||
                (valorMercado === "1a3M" && jugador.ValorDeMercado >=1000000 && jugador.ValorDeMercado <=3000000) ||
                (valorMercado === "3a6M" && jugador.ValorDeMercado >3000000 && jugador.ValorDeMercado <=6000000) ||
                (valorMercado === "+6M" && jugador.ValorDeMercado >6000000)) {

            if (
                (valorMinutosJugados === "TodosMinutosJugados") ||
                (valorMinutosJugados === "-400Min" && jugador.MinutosJugados <=400)||
                (valorMinutosJugados === "+401Min" && jugador.MinutosJugados >400) ||
                (valorMinutosJugados === "+800Min" && jugador.MinutosJugados >800)||
                (valorMinutosJugados === "+1000Min" && jugador.MinutosJugados >1000)) {

            if (
                (valorDuelosGanados === "TodosDuelosGanados") ||
                (valorDuelosGanados === "-25" && jugador.DuelosGanados <=25)||
                (valorDuelosGanados === "+25" && jugador.DuelosGanados >25) ||
                (valorDuelosGanados === "+50" && jugador.DuelosGanados >50)||
                (valorDuelosGanados === "+75" && jugador.DuelosGanados >75)) {

            if (
                (valorPieHabil === "AmbosPies") ||
                (valorPieHabil === "Derecho" && jugador.Pie === "derecho")||
                (valorPieHabil === "Izquierdo" && jugador.Pie === "izquierdo")) {

            if (
                (valorPas === "TodosPasaportes") ||
                (valorPas === "Si" && jugador.Pasaporte !== "Argentina" && jugador.Pasaporte !== "Uruguay" && jugador.Pasaporte !== "Paraguay" && jugador.Pasaporte !== "Brazil" && jugador.Pasaporte !== "Peru" && jugador.Pasaporte !== "Ecuador" && jugador.Pasaporte !== "Colombia" && jugador.Pasaporte !== "Venezuela" && jugador.Pasaporte !== "Canada" && jugador.Pasaporte !== "Chile" && jugador.Pasaporte !== "Mexico"))
                
                
                {{                                                    

            lista.push(jugador)
            
            div.innerHTML = `<div class="resultadoJugador">\
                                <div class="infoJugador">\
                                    <div class = "NombreJugador">${jugador.Jugador}</div>\
                                    <div class = "LigaJugador">${jugador.Liga}</div>\
                                    <div class = "EquipoJugador">${jugador.Equipo}</div>\
                                    <div class = "PosicionesJugador">Posiciones: ${jugador.PosicionEspecifica}</div>\
                                    <div class = "EdadJugador">Edad: ${jugador.Edad}</div>\
                                    <div class = "ValorMerJugador">Valor de mercado USD: ${jugador.ValorDeMercado}</div>\
                                    <button  class = "btnAgregarALista" type="button" id="btn${jugador.ID}">Agregar a mi lista</button>\
                                </div>\
                            </div>`
                            ;
            }                      
            campoSeleccionarResultados.appendChild(div) 

            
            let btnAgregarAMiLista = document.getElementById(`btn${jugador.ID}`)

            btnAgregarAMiLista.addEventListener("click", () =>
            {
            
                agregarALista(jugador.ID)
                
                
            })
            
           
    

        }}}}}}}}
    
    }

        );
       (lista.length === 0) ? campoSeleccionarResultados.innerHTML = mensajeNoHayJugadores : console.log()
    })

    function agregarALista (numeroIDjugador) {
        let jugador = data.find ((jugador) => jugador.ID === numeroIDjugador) 
        if (!listaAgregados.includes(jugador))
        {
            listaAgregados.push(jugador)
            localStorage.setItem("listaAgregados", JSON.stringify(listaAgregados))
            Toastify({
                text: "¡Jugador agregado!",
                duration: 2000,
                newWindow: true,
                gravity: "top", 
                position: "right",
                stopOnFocus: true, 
                style: {
                  background: "linear-gradient(to right, #20b2aa, #add8e6)",
                }
              }).showToast();}

        else {
            Toastify({
                text: "El jugador ya se encuentra en tu lista de agregados",
                duration: 2000,
                newWindow: true,
                gravity: "top", 
                position: "right",
                stopOnFocus: true, 
                style: {
                    background: "linear-gradient(to right, #dc143c, #ff0000)",
                }
              }).showToast();
        }
        actualizarLista()
    }

    
    
    function actualizarLista ()
    {
        listaDeJuagdores.innerHTML = ""
        listaAgregados.forEach(jugador => {
            let div = document.createElement("div")
            div.innerHTML = `<div class="resultadoJugador">\
                                <div class="infoJugador2">\
                                <div class = "NombreJugador">${jugador.Jugador}</div>\
                                <div class = "LigaJugador">${jugador.Liga}</div>\
                                <div class = "EquipoJugador">${jugador.Equipo}</div>\
                                <div class = "PosicionesJugador">Posiciones: ${jugador.PosicionEspecifica}</div>\
                                <div class = "EdadJugador">Edad: ${jugador.Edad}</div>\
                                <div class = "ValorMerJugador">Valor de mercado USD: ${jugador.ValorDeMercado}</div>\
                                <div class = "PartJugJugador">Partidos Jugados: ${jugador.PartidosJugados}</div>\
                                <div class = "MinJugJugador">Minutos Jugados: ${jugador.MinutosJugados}</div>\
                                <div class = "GolesJugador">Goles convertidos: ${jugador.Goles}</div>\
                                <div class = "PaisJugador">País de Nacimiento: ${jugador.PaisDeNacimiento}</div>\
                                <div class = "DuelosGanados">% de Duelos Ganados: ${jugador.DuelosGanados}</div>\
                                <div class = "PieHabil">Pie Hábil: ${jugador.Pie}</div>\
                                <div class = "Pasaporte">Pasaporte: ${jugador.Pasaporte}</div>\
                                <button class = "btnEliminar" id= "eliminar${jugador.ID}">Eliminar</button>
                                </div>\
                            </div> `

                            listaDeJuagdores.appendChild(div)          
            
                            let btnEliminar = document.getElementById(`eliminar${jugador.ID}`)
                            btnEliminar.addEventListener("click", function ()
                            {
                                btnEliminar.parentElement.remove()
                                listaAgregados = listaAgregados.filter ((jug) => jug.ID !== jugador.ID )
                                Toastify({
                                    text: "¡Jugador eliminado!",
                                    duration: 2000,
                                    newWindow: true,
                                    gravity: "top", 
                                    position: "right",
                                    stopOnFocus: true, 
                                    style: {
                                      background: "linear-gradient(to right, #dc143c, #ff0000)",
                                    }
                                  }).showToast();
                            })
        });
        
    }
   
}

  

bienvenida();
