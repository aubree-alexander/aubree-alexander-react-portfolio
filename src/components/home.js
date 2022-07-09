import React from 'react'
import { Parallax } from 'react-parallax'
import '../style.css'

function Home() {
    return (
        <div>
            <Parallax blur={0} bgImage="http://cdn.akc.org/content/article-body-image/siberian_husky_cute_puppies.jpg" bgImageAlt="the cat" strength={500}>
                <section id="about-me" className="about-me">
                    <div>
                        <img src="./assets/images/me.JPG" alt="Aubree Alexander" />
                    </div>
                    <div className="me-description">
                        <h1>About Me</h1>
                            <p>
                                I'm a student at the University of Wisconsin Extensions Coding Bootcamp. I've created front end, back end, and full stack projects within this bootcamp and am continuing to hone my skills. Feel free to take a look at some of my projects in the Projects page!
                            </p>
                    </div>
                </section>
                <div style={{ height: '1000px' }} />
            </Parallax>
        </div>
    )
}

export default Home