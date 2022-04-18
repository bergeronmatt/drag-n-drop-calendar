import React from 'react'

export const ResourceCell = (props) => {
  
    const { data: {color, text, data: { avatar, age, disipline } } }  = props


    return (
        <div className='dx-template-wrapper'>
            <div className='name' style={{background: color}}>
                <h2>{text}</h2>
            </div>
            <div className='avatar'>
                <img src={avatar} />
            </div>
            <div className='info' style={{color}}>
                Age: {age}
                <br />
                <b>{disipline}</b>
            </div>
        </div>
      )
}
