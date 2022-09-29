import './solar-canvas.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase, faFile } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import { AnimatedLetters } from '../../AnimatedLetters/AnimatedLetters'
export const SolarCanvas = ({ draw, height, width }) => {
  const canvas = React.useRef()
  React.useEffect(() => {
    const context = canvas.current.getContext('2d')
    draw(context)
  })
  return (
    <div id="solar-canvas-container">
      <NavLink exact="true" to="/portfolio">
        <>
          <canvas id="canvas" ref={canvas} width={width} height={height} />
        </>
        {/* <NavLink exact="true" to="/portfolio"> */}
        <div>
          <span className="flat-button">
            <AnimatedLetters
              strArray={[
                'P',
                'O',
                'R',
                'T',
                'F',
                'O',
                'L',
                'I',
                'O',
                '  ',
                <FontAwesomeIcon icon={faSuitcase} color="#ffd700" />,
              ]}
              idx={75}
            />
          </span>
          <span>
            <a
              className="flat-button"
              href="/images_portfolio/suman-resume.pdf"
              download
            >
              <span>
                CV <FontAwesomeIcon icon={faFile} color="#ffd700" />
              </span>
            </a>
          </span>
        </div>
      </NavLink>
    </div>
  )
}
SolarCanvas.propTypes = {
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
}
