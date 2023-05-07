import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters'
import portfolioData from '../../data/portfolio.json'
import './portfolio.scss'
export const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.cover}
                className="portfolio-image"
                alt="portfolio-pic"
              />

              <div className="content">
                <h2 className="title">{port.title}</h2>
                <h4 className="description">{port.description}</h4>
                <button
                  className="view-more-btn"
                  onClick={() => window.open(port.live)}
                >
                  live
                </button>
                <button
                  className="view-more-btn"
                  onClick={() => window.open(port.url)}
                >
                  source
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        {renderPortfolio(portfolioData.portfolio)}
      </div>

      <Loader type="pacman" />
    </>
  )
}
