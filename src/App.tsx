import React, { useEffect, useState, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';
import Artistas from './artistas/artistas';
import Albums from './album/albums';
import { pathOr, find } from 'ramda'
import Song from './song/song';
import Reproductor from './reproductor/reproductor';
import Footer from './main/footer';
import Header from './main/header';

const App = () => {
  const [infoArtista, setInfoArtista] = useState<any[]>([])
  const api_artistas = `https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api/artists`;
  const [albums, setAlbums] = useState<any[]>([])
  const [song, setSongs] = useState<any[]>([])
  const [ArtiSelect, setartiSelect] = useState<string>('')
  const [ArtiSelectName, setartiSelectName] = useState<string>('')
  const [ArtiSelectImg, setartiSelectImagen] = useState<string>('')
  const [AlbumSelect, setAlbumSelect] = useState<string>('')
  const [AlbumSelectName, setAlbumSelectName] = useState<string>('')
  const [AlbumSelectImage, setAlbumSelectImage] = useState<string>('')
  const [idSong, setidSong] = useState<string>('')
  const [urlSong, seturlSong] = useState<string>('')
  const [nameSong, setNameSong] = useState<string>('')

  useEffect(() => {
    fetch(api_artistas).then(response => response.json()).then((data) => {
      setInfoArtista(data)
    });
  }, [])

  useEffect(() => {

    if (ArtiSelect) {
      let api_album = `https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api/artists/:${ArtiSelect}/albums`
      fetch(api_album).then(response => response.json()).then((albums) => {        
        const finded = (a: any) => a?.artist == ArtiSelect
        const element = find(finded)(albums);
        setAlbums(element?.albums)
      });
    }

  }, [ArtiSelect])

  useEffect(() => {

    if (AlbumSelect) {
      let api_song = `https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api/albums/:${AlbumSelect}/songs`
      fetch(api_song).then(response => response.json()).then((song) => {
        const finded = (a: any) => a?.album == AlbumSelect
        const element = find(finded)(song);
        setSongs(element?.songs)
      });
    }
    
  }, [ AlbumSelect ])
  

  const changeArtiSelect = (id: string, name: string, image: string) => {
    setartiSelect(id)
    setartiSelectImagen(image)
    setartiSelectName(name)
  }
  const changeAlbumSelect = (id: string, name: string, image: string) => {
    setAlbumSelect(id)
    setAlbumSelectImage(image)
    setAlbumSelectName(name)
  }
  const changeSongSelect = (id: string, name: string, url: string) => {
    setidSong(id)
    seturlSong(url)
    setNameSong(name)
  }
  if (ArtiSelect && !AlbumSelect) {
    return <div>
      <div className='main-header'>
        <Header/>
      </div>
      <button className='buttonBack' onClick={()=>setartiSelect('')}>-</button>
      <div className='album-img-container'>
        <img src={ArtiSelectImg} alt="" className='album-img' />
        <div className="album-name">{ArtiSelectName}</div>
      </div>
      <div className='textAlbum'>Álbumes</div>
      {albums.map((album: any,index:number) => {
        const id = pathOr('', ['id'], album)
        const name = pathOr('', ['name'], album)
        const image = pathOr('', ['image'], album)
        return (
          <div key={index} onClick={() => changeAlbumSelect(id, name, image)}>
            <Albums info={album} />
          </div>
        )
      })}
      <div className='main-footer'>
      <Footer/>
    </div>
    </div>
  }
  if (AlbumSelect && ArtiSelect && !idSong) {
    return (
      <div>
        <button className='buttonBack' onClick={()=>setAlbumSelect('')}>-</button>
        <div className='albumImageSong'>
          <img className='imgSongAlbum' src={AlbumSelectImage} alt="" />
          <div className='textAlmbunSong'>{AlbumSelectName}</div>
        </div>
        <div className='CancionesText'>
          Caciones
        </div>
       {song.map((itemSong: any,index:number) => {
        const id = pathOr('', ['id'], itemSong)
        const name = pathOr('', ['name'], itemSong)
        const url = pathOr('', ['spotify_url'], itemSong)
        return (
          <div key={index} onClick={() => changeSongSelect(id, name, url)}>
            <Song info={itemSong} />
          </div>
        )
      })}
      </div>
    )
  }
  if(AlbumSelect && ArtiSelect && idSong){
    return <div>      
      <button className='buttonBack' onClick={()=>setidSong('')}>-</button>
      <Reproductor name={nameSong} url={urlSong} song={song}/>
    </div>
  }
  return (
    <div>
       <div className='main-header'>
        <Header/>
      </div>
      <div className='ContainerArtistas'>
      {infoArtista.map((item: any,index:number) => {
        const id = pathOr('', ['id'], item)
        const name = pathOr('', ['name'], item)
        const image = pathOr('', ['image'], item)
        return (
          <div key={index} onClick={() => changeArtiSelect(id, name, image)}>
            <Artistas info={item} />
          </div>
        )
      })}
    </div>
    <div className='main-footer'>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
