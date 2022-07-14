import React from 'react'
import { Parallax } from 'react-parallax'
import '../style.css'

function Home() {
    return (
        <div class='page-content'>
            {/* <Parallax blur={0} bgImage="http://cdn.akc.org/content/article-body-image/siberian_husky_cute_puppies.jpg" bgImageAlt="the cat" strength={500}> */}
                <section id="about-me" className="about-me py-5">
                    <div className='fade-in-text'>
                        <img src="./assets/images/me.JPG" alt="Aubree Alexander" class='img-fluid' />
                    </div>
                    <div className="me-description">
                        <h1 className='fade-in-text' id='about-me'>About Me</h1>
                            <p className='fade-in-text'>
                                My name's Aubree. I'm an Anthropology and Archaeology lover who took an interest in coding and now I'm a student at the University of Wisconsin Extensions Coding Bootcamp. I've created front end, back end, and full stack projects within this bootcamp and am continuing to hone my skills. Feel free to take a look at some of my projects in the Projects page!
                            </p>
                    </div>
                </section>
                {/* <div style={{ height: '500px' }} />
            </Parallax> */}
        </div>
    )
}

export default Home