import React from 'react'
import '../Styles/Medal.css'

const Medal = ({
    text,
    img,
    achieved
}) => {
    const style = {
        fontFamily: 'Oxygen',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '15px',
        color: achieved ? 'var(--green-one)' : 'var(--red-error)',
        marginTop: '0px',
        marginBottom: '0px'
    }
    return (
        <div className='medal-container'>
            <img src={img} className='medal-icon'/>
            <h1 className='medal-header' style={style}>{text}</h1>
        </div>
    )
}

export default Medal