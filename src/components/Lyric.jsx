import useLyrics from "../hooks/useLyrics"

const Lyric = () => {
  const { lyric } = useLyrics()
  return (
    <div className="letra">{ lyric }</div>
  )
}

export default Lyric