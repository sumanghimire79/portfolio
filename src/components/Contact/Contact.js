import Loader from 'react-loaders'
import { useEffect, useRef, useState } from 'react'
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters'
import emailjs from '@emailjs/browser'
import {
  MapContainer,
  TileLayer,
  // useMap,
  Marker,
  Popup,
} from 'react-leaflet'
import './contact.scss'
export const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_j6c4e5o',
        'template_04so67g',
        e.target,
        'dMn6105ofd9AOPusd'
      )
      .then(
        (result) => {
          console.log(result.text)
          alert(`${result.text} your message is sussessifully sent`)
          window.location.reload(false)
        },
        (error) => {
          console.log(error.text)
          alert(`${error.text} your message is was not sent`)
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in webdevelopment opportunities: internships,
            entrylevel positions or any other role within IT industry. However,
            if you have other request or question, please contact me using below
            form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Suman ghimire
          <br />
          ishøj
          <br />
          Danmark <br />
          <span>
            <a href="mailto:sumanghimire79@yahoo.com">
              sumanghimire79@yahoo.com
            </a>
          </span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[55.614, 12.35625]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[55.614, 12.35625]}>
              <Popup>
                Suman lives here !<br /> You are welcome to visit Ishøj :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
