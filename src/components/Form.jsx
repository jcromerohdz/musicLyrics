import { useState } from 'react'
import useLyrics from '../hooks/useLyrics'

const Form = () => {

  const { setAlert, lyricsSearch } = useLyrics()

  const [ search, setSearch ] = useState({
    artist: '',
    song: ''
  })

  const handleSubmit = e => {
    e.preventDefault()

    if(Object.values(search).includes('')){
      setAlert('Please put an artist name and a song name!!')
      return
    }

    lyricsSearch(search)
  }

  return (
    <form 
      onSubmit={handleSubmit}
    >
      <legend>Search by artist and song</legend>

      <div className="form-grid">
        <div>
          <label>Artist</label>
          <input 
            type="text"
            name="artist"
            placeholder="Artist Name"
            value={search.artist}
            onChange= { e => setSearch({
              ...search, 
              [e.target.name]: e.target.value
            })}
          />
        </div>
        <div>
          <label>Song</label>
          <input 
            type="text"
            name="song"
            placeholder="Song Name"
            value={search.song}
            onChange= { e => setSearch({
              ...search, 
              [e.target.name]: e.target.value
            })}
          />
        </div>
        <input type="submit" value="Search"/>
      </div>


    </form>
  )
}

export default Form