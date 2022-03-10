import React from 'react'

export const Forms = () => {
  return (
    <>
        <form className='email__form'>

            <label for='asunto' className='label_email'>Asunto</label>
            <input type='text' name='asunto' className='input_form' placeholder='Asunto' autoComplete='off' />

            <label for='email' className='label_email'>Correo</label>
            <input type='text' name='email' className='input_form' placeholder='Para' autoComplete='off' />

            <label for='mensaje' className='label_email'>Mensaje</label>
            <textarea id='mensaje' name='mensaje' className='textarea_form' placeholder='Mensaje'></textarea>

            <input type='submit' value='Enviar' className='boton_email' />

        </form>
    </>
  )
}
