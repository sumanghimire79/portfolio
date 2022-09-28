import './solar-canvas.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
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
        <AnimatedLetters
          strArray={['P', 'O', 'R', 'T', 'F', 'O', 'L', 'I', 'O', '--']}
          idx={75}
        />
        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
      </NavLink>
    </div>
  )
}
SolarCanvas.propTypes = {
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
}
