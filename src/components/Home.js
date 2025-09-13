import React from 'react'
import TypingText from './TypingText'

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="max-width">
          <div className="row">
            <div className="home-content">
                <div className="text-1">Hello, this is</div>
                <div className="text-2">Your Box of Yarn</div>
                <div className="text-3">we offer <span className="typing">  <TypingText />
                </span></div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Home
