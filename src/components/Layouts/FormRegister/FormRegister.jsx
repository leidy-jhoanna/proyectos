import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Label } from '../../UI/Label/Label'
import { Input } from '../../UI/Input/Input'
//import { BotonForms } from '../../UI/BotonForms/BotonForms'

export const FormRegister = () => {

    const [state, setState] = useState({
        form: {
            'name': "",
            'email': "",
            'password': "",
        },
        error: false,
        errorMsg: "",
    })

    const enviarDatos = (evnt) => {
        evnt.preventDefault()
        //evita que se recargue la pagina sola autmaticamente
    }

    const mostrarAlertaSucces = () => {
        Swal.fire({
        icon: "success",
        title: "Credenciales correctos",
        text: "Bienvenido de nuevo",
        })
    }

    const mostrarAlertaError = () => {
        Swal.fire({
            icon:'error',
            title:'Error Al conectar con El API',
            text:'La API no se encuentra'
        })
    }

    const mostrarAlertaWarning = () => {
        Swal.fire({
        icon: "warning",
        title: "Credenciales incorrectas",
        text: "Las credenciales ingresadas son incorrectas",
        })
    }

    const manejarCambios = async (evnt) => {
        await setState({
            form: {
                ...state.form,
                [evnt.target.name]: evnt.target.value,
            },
        })
    }

    const controlarBoton = () => {
        let url = "https://backend-edw.herokuapp.com/usuario"
        axios.post(url, state.form)
        .then((response) => {
            console.log(response)
            if (response.data.status === "ok") {
                mostrarAlertaSucces()
            } else {
                setState({
                    error: true,
                    errorMsg: response.data.Message,
                })
                mostrarAlertaWarning()
            }
        })
        .catch((error) => {
            console.log(error)
            mostrarAlertaError()
        })
    }

    return (
        <>
            <form className='form'>

                <Label para='nombre' clase='label' contenido='Nombre' />
                <Input type='text' name='name' clase='input_form' place='Ingrese su Nombre' auto='off' />

                <Label para='email' clase='label' contenido='Correo' />
                <Input type='text' name='email' clase='input_form' place='Ingrese su Correo' auto='off' />

                <Label para='contraseña' clase='label' contenido='Contraseña' />
                <Input type='password' name='password' clase='input_form' place='Ingrese su Contraseña' />

                <Input
                    type="submit"
                    value="Iniciar sesion"
                    clase="boton_form"
                    eventoOnClick={controlarBoton}
                />

            </form>
        </>
    )
}
