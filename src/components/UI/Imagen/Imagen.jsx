import React from 'react'

export const Imagen = ({src, clase, id}) => {
    return (
            <>
                <figure>
                    <img className={clase} src={src} alt='' id={id} />
                </figure>
            </>
    )
}
