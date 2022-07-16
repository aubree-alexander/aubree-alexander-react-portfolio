import React from 'react'
import { Parallax } from 'react-parallax'
import '../style.css'

function Home() {
    return (
        <div class='page-content'>
            <Parallax blur={0} bgImage="https://img.freepik.com/premium-photo/white-grey-marble-texture-background-natural-pattern-with-high-resolution-tiles-luxury-stone-floor-seamless-glitter-interior-exterior_38607-418.jpg?w=2000" bgImageAlt="the cat" strength={500}>

                <section id="about-me" className="about-me text-center py-5 container d-flex justify-content-center">
                    <div className='row d-flex justify-content-center'>
                        <div className='fade-in-text col-md-3'>
                            <img src="./assets/images/me.JPG" alt="Aubree Alexander" class='img-fluid' />
                        </div>
                        <div className='me-description col-md-6'>
                            <h1 className='fade-in-text' id='about-me'>About Me</h1>
                                <p className='fade-in-text'>
                                    My name's Aubree. I'm an Anthropology and Archaeology enthusiast who took an interest in coding and now I'm a student at the University of Wisconsin Extensions Coding Bootcamp. I've created front end, back end, and full stack projects within this bootcamp and am continuing to hone my skills. Feel free to take a look at some of my projects in the Projects page!
                                </p>
                        </div>
                    </div>
                </section>
                <div style={{ height: '500px' }} />
            </Parallax>
        </div>
    )
}

export default Home