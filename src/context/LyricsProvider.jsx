import { useState, createContext } from 'react'
import axios from 'axios'

const LyricsContext = createContext()


const LyricsProvider = ({children}) => {

  const [alert, setAlert] = useState('')
  const [lyric, setLyric] = useState('')
  const [loading, setLoading] = useState(false)

  const lyricsSearch = async(search) => {
    setLoading(true)
    try {
      const { artist, song } = search
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`
      const {data} = await axios(url)
      setLyric(data.lyrics)
      setAlert('')
    } catch (error) {
      console.log(error)
      setAlert('Song not found!!')
    }
    setLoading(false)
  }

  return (
    <LyricsContext.Provider
      value={{
        alert,
        setAlert,
        lyricsSearch,
        lyric,
        loading
      }}
    >
      {children}
  
    </LyricsContext.Provider>

  )
}

export {
  LyricsProvider
}

export default LyricsContext