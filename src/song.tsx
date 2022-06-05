import React, { Fragment, useMemo } from 'react'
import { pathOr } from 'ramda'

const Song = (props:any) => {
    const info = useMemo(()=>pathOr({},['info'],props),[props])    
    const name = useMemo(()=>pathOr('',['name'],info),[info])
    const duracion = useMemo(()=>pathOr('',['duration_ms'],info),[info])
    const spotify = useMemo(()=>pathOr('',['spotify_url'],info),[info])
    
  return (
    <div className='containerSong'>
        <div className='containerMusic'>
            <div className='container-tracks'>
                <div className="texto-song">{name}</div>
                <div className="tracks-song">{duracion}</div>
            </div>
        </div>    
        <div>
            sugerencias    
        </div>    
    </div>
  )
}

export default Song