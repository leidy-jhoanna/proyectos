import React from 'react'

export const H2 = ({contenido, clase, id}) => {
    return (
        <>
            <h2 className={clase} id={id}>{contenido}</h2>
        </>
    )
}
