import { useState } from "react"
import { useNavigate } from "react-router-dom"

import basedatosusuarios from "../utils/basedatosusuraios.json"
import Swal from 'sweetalert2'

export function Formulario(){

    const[verCedula,guardarCedula]=useState("")
    const[verContraseña,guardarContraseña]=useState("")

    // Para Navegar entre componentes debo declarar un variable que almacene el hook

    let enrutador=useNavigate()

    function procesarFormulario(evento){
        // Que hago si le hacn clic al boton de formulario?
        evento.preventDefault()

        // buscamos cohincidencias entre lo que escribe el usuario formulario y el jsn de la BD

         let busqueda=basedatosusuarios.find(function(usuario){
            return(usuario.documento==verCedula)
         })

         if(busqueda==undefined) {
       
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });

         }else {

        //Voy a enrutar otro componente (como lanzo un componente desde otro?)
         enrutador("/home")

         }

       
    }


    return(
        <>
        <section className="container" >
            <div className="row justify-content-center text-center">
            <div className="col-12 col-md-6">
                <img src="../../src/assets/img/logo-sura.png" alt="logo" className="img-fluid" />
                <form className="border rounded p-4" onSubmit={procesarFormulario}>
                    <h2>Controla tu salud</h2>
                    <div class="input-group mb-3 mt-5">
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-vcard"></i></span>  
                    <input
                    type="text"
                    class="form-control" 
                    placeholder="Numero cedula"
                    id="identificacion"
                    onChange={function(evento){guardarCedula(evento.target.value)}}
                    />
                  </div>
                  <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1"><i class="bi bi-key"></i></span>
                  <input 
                  type="password" 
                  class="form-control" 
                  placeholder="Contraseña"
                  id="contraseña"
                  onChange={function(evento){guardarContraseña(evento.target.value)}}
                 />
                </div>
                <button type="submit" className="btn btn-primary mt-3 ">Ingresar</button>
                </form>               
            </div>
            </div>
        </section>
        </>
    )
}