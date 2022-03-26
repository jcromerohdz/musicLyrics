import React from 'react'
import Form from './Form'
import Alert from './Alert'
import Lyric from './Lyric'
import useLyrics from '../hooks/useLyrics'

const AppLyrics = () => {

  const { alert, lyric, loading } = useLyrics()
  
  return (
    <>
      <header>Music Lyrics Search</header>
      <Form />

      <main>
        {alert ? <Alert>{alert}</Alert> : 
          lyric ? <Lyric /> : 
            loading ? 'Loading..' :
            <p className='text-center'>
              Search you favorite songs from your favorite artists!
            </p>
        }

      </main>
    </>
  )
}

export default AppLyrics