import React, { Fragment, useMemo } from 'react'
import { pathOr } from 'ramda'
import './albums.css'

const Albums = (props:any) => {
    const info = useMemo(()=>pathOr({},['info'],props),[props])    
    const image = useMemo(()=>pathOr('',['image'],info),[info])
    const name = useMemo(()=>pathOr('',['name'],info),[info])
    const canciones = useMemo(()=>pathOr('',['total_tracks'],info),[info])
    const spotify = useMemo(()=>pathOr('',['spotify_url'],info),[info])
    
  return (
    <div className='containerAlbum'>      
        <div className='containerAlbumSon'>
            <img src={image} alt="" className='imgMiniaturaAlbum'/>
            <div className='container-tracks'>
                <div className="texto-album">{name}</div>
                <div className="tracks-album">Canciones: {canciones}</div>
            </div>
        </div>        
    </div>
  )
}

export default Albums