import './home.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'

import { SolarCanvas } from './SolarCanvas/SolarCanvas'

import suns from './sun1.png'
import earths from './earth1.png'
import moons from './moon1.png'

export const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['u', 'm', 'a', 'n', '', 'G', 'h', 'i', 'm', 'i', 'r', 'e']
  const jobArray = [
    'w',
    'e',
    'b',
    '-',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    //with return keyword infront setTimeout does not work
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const sun = new Image()
  const moon = new Image()
  const earth = new Image()
  function init() {
    sun.src = suns
    moon.src = moons
    earth.src = earths
    window.requestAnimationFrame(drawSolar)
  }

  function drawSolar() {
    const ctx = document.getElementById('canvas').getContext('2d')

    ctx.globalCompositeOperation = 'destination-over'
    ctx.clearRect(0, 0, 300, 300) // clear canvas

    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'
    ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)'
    ctx.save()
    ctx.translate(150, 150)

    // Earth
    const time = new Date()
    ctx.rotate(
      ((2 * Math.PI) / 60) * time.getSeconds() +
        ((2 * Math.PI) / 60000) * time.getMilliseconds()
    )
    ctx.translate(105, 0)
    ctx.fillRect(0, -12, 40, 24) // Shadow
    ctx.drawImage(earth, -12, -12, 50, 50)

    // Moon
    ctx.save()
    ctx.rotate(
      ((2 * Math.PI) / 6) * time.getSeconds() +
        ((2 * Math.PI) / 6000) * time.getMilliseconds()
    )
    ctx.translate(0, 28.5)
    ctx.drawImage(moon, -3.5, -3.5)
    ctx.restore()

    ctx.restore()

    ctx.beginPath()
    ctx.arc(150, 150, 100, 0, Math.PI * 2, false) // Earth orbit
    ctx.stroke()

    ctx.drawImage(sun, 100, 100, 100, 100)

    window.requestAnimationFrame(drawSolar)
  }

  init()

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}> H</span>
          <span className={`${letterClass} _12`}> i</span>
          <br />
          <span className={`${letterClass} _13`}> I</span>
          <span className={`${letterClass} _14`}> 'm</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2> Frontend Developer/ JavaScript Expert / openminded </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <div id="canvasses">
        <SolarCanvas draw={drawSolar} height={300} width={300} />
      </div>
      <Loader type="pacman" />
    </div>
  )
}
