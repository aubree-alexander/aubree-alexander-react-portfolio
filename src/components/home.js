import React from 'react'
import { Parallax } from 'react-parallax'
import '../style.css'

function Home() {
    return (
        <div class='page-content-short'>
            <Parallax blur={0} bgImage="https://img.freepik.com/premium-photo/white-grey-marble-texture-background-natural-pattern-with-high-resolution-tiles-luxury-stone-floor-seamless-glitter-interior-exterior_38607-418.jpg?w=2000" bgImageAlt="marble" strength={500}>

                <section id="about-me" className="about-me py-5 container d-flex justify-content-center">
                    <div className='row d-flex justify-content-around'>
                        <div className='fade-in-text col-md-3'>
                            <img src="./assets/images/me.JPG" alt="Aubree Alexander" class='img-fluid' />
                        </div>
                        <div className='me-description col-md-6 mt-2'>
                            <h1 className='fade-in-text' id='about-me'>About Me</h1>
                                <p className='fade-in-text'>
                                    Hello! My name's Aubree. I'm an Anthropology and Archaeology enthusiast turned full stack web developer. I recently graduated from the University of Wisconsin Extensions Coding Bootcamp. I've created front end, back end, and full stack projects within the bootcamp and am continuing to hone my skills. Feel free to take a look at some of my projects in the Portfolio page!
                                </p>
                        </div>
                    </div>
                </section>
                <div style={{ height: '175px' }} />
            </Parallax>
        </div>
    )
}

export default Home