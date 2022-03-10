import React from 'react'

export const Parrafo = ({contenido, clase, id}) => {
    return (
        <>
            <p className={clase} id={id}>{contenido}</p>
        </>
    )
}
