import React from 'react'
import '../style.css'

function Project() {
    return (
        <section id="projects" className="projects">

        <div className="project-section-title">
            <h2>
                Projects
            </h2>
        </div>

        <div className="projects-gallery">
            
            <div className="streamline-tile">
                <a href="https://peaceful-earth-43575.herokuapp.com/" target="_blank">
                    <div id="streamline" className="tile">
                        <h3 className="project-title">streamline</h3>
                    </div>
                </a>
            </div>

            <div className="coming-soon">

                <div className="coming-soon-1">

                    <a href="https://aubree-alexander.github.io/the-nasa-spirit/" target="_blank">
                        <div id="the-nasa-spirit" className="tile">
                            <h3 className="project-title">The Nasa Spirit</h3>
                        </div>
                    </a>
                    <a href="#" target="_blank">
                        <div className="tile">
                            <h3 className="project-title">Coming soon</h3>
                        </div>
                    </a>

                </div>

                <div className="coming-soon-2">
                    <a href="#" target="_blank">
                        <div className="tile">
                            <h3 className="project-title">Coming soon</h3>
                        </div>
                    </a>
                    <a href="#" target="_blank">
                        <div className="tile">
                            <h3 className="project-title">Coming soon</h3>
                        </div>
                    </a>
                </div>

            </div>
        </div>

    </section>
    )
}

export default Project