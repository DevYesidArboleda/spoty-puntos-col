import React, { Fragment, useMemo, useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { pathOr } from 'ramda'
import SpotifyPlayer from 'react-spotify-player';

const Reproductor = (props:any) => {
    const name = useMemo(()=>pathOr('',['name'],props),[props])
    //const spotify = useMemo(()=>pathOr('',['url'],props),[props])
    const song = useMemo(()=>pathOr([],['song'],props),[props])
    const [sugeridos, setSugeridos] = useState<any[]>([])
    const [cancion, setCancion] = useState<string>(pathOr('',['url'],props))
    
    //const [sugeridos, setSugeridos] = useState<any[]>([])
    //const sugeridos:any[] = []
    useEffect(() => {      
         for (let index = 0; index < 3; index++) {
            const rand = Math.floor((Math.random() * (song.length - 0 + 1)) + 0);
            //setSugeridos([...sugeridos, song[rand]])
            if(sugeridos.length<3){
                //sugeridos.push(song[rand])
                setSugeridos([...sugeridos, song[rand]])
            }            
         }     
    }, [song])
     
  return (
    <div>
        <SpotifyPlayer
            uri={cancion}
        />
        <div>
            <div>
                sugeridos                
            </div>
            <div>
                {sugeridos.map((item: any,index:number)=>{
                    const name = pathOr('', ['name'], item)
                    const url = pathOr('', ['spotify_url'], item)
                    return (
                        <div key={index} onClick={()=>{
                            setCancion(url)
                        }}>
                            {name}
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Reproductor