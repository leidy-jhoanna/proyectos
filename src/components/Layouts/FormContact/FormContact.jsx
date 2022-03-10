import React from 'react'
import Swal from 'sweetalert2'
import { Label } from '../../UI/Label/Label'
import { Input } from '../../UI/Input/Input'
import { BotonForms } from '../../UI/BotonForms/BotonForms'

export const FormContact = () => {

    const mostrarAlertaSucces = () => {
        Swal.fire({
            icon:'success',
            title:'Alerta con SweetAlert',
            text:'Aqui se mostrara la informacion'
        })
    }

    const mostrarAlertaError = () => {
        Swal.fire({
            icon:'error',
            title:'Alerta con SweetAlert',
            text:'Aqui se mostrara la informacion'
        })
    }

    const mostrarAlertaWarning = () => {
        Swal.fire({
            icon:'warning',
            title:'Alerta con SweetAlert',
            text:'Aqui se mostrara la informacion'
        })
    }

    return (
        <>
            <form className='form'>

                <Label para='asunto' clase='label' contenido='Asunto' />
                <Input type='text' clase='input_form' place='Asunto' auto='off' />

                <Label para='email' clase='label' contenido='Correo' />
                <Input type='text' clase='input_form' place='Para' auto='off' />

                <Label para='mensaje' clase='label' contenido='Mensaje' />
                <textarea id='mensaje' className='textarea_form' placeholder='Mensaje'></textarea>

                <BotonForms
                    type='submit'
                    contenido='Enviar'
                    clase='boton_form'
                    evento={mostrarAlertaSucces}
                />

            </form>
        </>
    )
}
