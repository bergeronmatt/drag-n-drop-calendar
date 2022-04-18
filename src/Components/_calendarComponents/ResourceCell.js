import React from 'react'

export const ResourceCell = (props) => {
  
    const { data: {color, text} }  = props

    const {avatar, age, discipline} = props.data.data
    console.log("props: ", props.data.data.discipline)

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
                Discipline: <b>{discipline}</b>
            </div>
        </div>
      )
}
