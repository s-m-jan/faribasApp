import React from 'react'
import MovieBg from '../../components/movieBg/MovieBg'
import AccQuestion from '../../components/accordionQuestion/AccQuestion'
import Divider from '../../components/divider/Divider'

export default function Home() {
  return (
    <div>
      <MovieBg/>
      <Divider/>
      <AccQuestion/>
    </div>
  )
}
