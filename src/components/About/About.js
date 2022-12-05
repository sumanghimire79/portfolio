import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  faNode,
  // faCss3,
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './about.scss'

export const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="about-page-outer-container">
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm very ambitious front-end developer looking for a role in an IT
            company with the opportunity to work with the latest technologies
            such as react, JavaScript, node etc on challenging and diverse
            projects.
          </p>
          <p align="LEFT">
            I'm cooperative, openminded, naturally curious, and perpetually
            working on improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of two children, a sports fanatic, photography
            enthusiast, and tech-obsessed!!!
          </p>
        </div>
        <div className="contact-me-cv-div">
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <Link exact="true" to="/portfolio" className="flat-button">
            PORTFOLIO
          </Link>
          <a
            className="flat-button"
            href="/images_portfolio/suman-resume.pdf"
            download
          >
            CV
          </a>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3Alt} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}
