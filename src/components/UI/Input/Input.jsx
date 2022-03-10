import React from 'react'

export const Input = ({place, clase, id, event}) => {
    return (
        <>
            <input placehorder={place} className={clase} id={id} onKeyDown={event} />
        </>
    )
}
