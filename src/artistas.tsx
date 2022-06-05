import React, { Fragment, useMemo } from 'react'
import { pathOr } from 'ramda'
import './artistas.css'

const Artistas = (props:any) => {
    const info = useMemo(()=>pathOr({},['info'],props),[props])    
    const image = useMemo(()=>pathOr('',['image'],info),[info])
    const name = useMemo(()=>pathOr('',['name'],info),[info])
    if (!image){
        return <Fragment/>
    }
  return (
    <div className='containerPrincipal'>
        <div className='containerSonOne'>
            <img src={image} alt="" className='imgPrincipal'/>
            <div className="texto-encima">{name}</div>
        </div>        
    </div>
  )
}

export default Artistas