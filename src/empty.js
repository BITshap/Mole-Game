import React from 'react'
import { useEffect } from 'react'
import MoleHill from './molehill.png'

function Empty(props){

useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 5000)
    let timer = setTimeout(() => {
        props.toggle(true)
    }, randSeconds)
    return () => clearTimeout
})

return (
    <div>
        <img style = {{'width': '20vw'}} src={MoleHill} />
    </div>
)
}

export default Empty