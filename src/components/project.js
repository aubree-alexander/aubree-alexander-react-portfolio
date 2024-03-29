import React from 'react'
import '../style.css'
import { Parallax } from 'react-parallax'

function Project() {
    return (

        <Parallax blur={0} bgImage="https://img.freepik.com/premium-photo/white-grey-marble-texture-background-natural-pattern-with-high-resolution-tiles-luxury-stone-floor-seamless-glitter-interior-exterior_38607-418.jpg?w=2000" bgImageAlt="the cat" strength={500}>

        <section id="projects" className="projects fade-in-text d-flex">

        <div className="projects-gallery">
            
            {/* streamline project */}
           
            <div id="streamline" className="tile">
                <div>
                    <div className='p-4'>
                        <h3 className='tile-text-background'>streamline</h3>
                    </div>
                    <div>
                        <a href='https://peaceful-earth-43575.herokuapp.com/' target='_blank' className='tile-text-background p-2'>Deployed application</a>
                        <a href='https://github.com/aubree-alexander/streamline' target='_blank' className='tile-text-background p-2'>GitHub repo</a>
                    </div>
                </div>
            </div>

            {/* nasa spirit project */}
            
            <div id="the-nasa-spirit" className="tile">
                <div>
                    <div className='p-4'>
                        <h3 className='tile-text-background'>The NASA Spirit</h3>
                    </div>
                    <div>
                        <a href='https://aubree-alexander.github.io/the-nasa-spirit/' target='_blank' className='tile-text-background p-2'>Deployed application</a>
                        <a href='https://github.com/aubree-alexander/the-nasa-spirit' target='_blank' className='tile-text-background p-2'>GitHub repo</a>
                    </div>
                </div>
            </div>
            

            {/* smaller tile section */}

            <div className="small-tiles-1">

                
                {/* tech blog */}
                {/* <div id='tech-blog' className="tile">
                    <div className='p-2'>
                        <h3 className='tile-text-background'>Tech Blog</h3>
                    </div>
                    <div>
                        <a href='https://mighty-hollows-58259.herokuapp.com/' target='_blank' className='tile-text-background p-2'>Deployed application</a>
                        <a href='https://github.com/aubree-alexander/tech-blog' target='_blank' className='tile-text-background p-2'>GitHub repo</a>
                    </div>
                </div> */}

                   {/* run buddy */}
                   <div id='run-buddy' className="tile">
                    <div className='p-2'>
                        <h3 className='tile-text-background'>Run Buddy</h3>
                    </div>
                    <div>
                        <a href='https://aubree-alexander.github.io/run-buddy/' target='_blank' className='tile-text-background p-2'>Deployed application</a>
                        <a href='https://github.com/aubree-alexander/run-buddy' target='_blank' className='tile-text-background p-2'>GitHub repo</a>
                    </div>
                </div>


                {/* weather dashboard */}
                <div id='weather-dashboard' className="tile">   
                    <div className='p-2'>
                        <h3 className='tile-text-background'>Weather Dashboard</h3>
                    </div>
                    <div>
                        <a href='https://aubree-alexander.github.io/weather-dashboard/' target='_blank' className='tile-text-background p-2'>Deployed application</a>
                        <a href='https://github.com/aubree-alexander/weather-dashboard' target='_blank' className='tile-text-background p-2'>GitHub repo</a>
                    </div>
                </div>

            </div>

                
            <div className="small-tiles-2">

                {/* Workday scheduler */}
                <div id='workday-scheduler' className="tile">
                    <div  className='p-2'>
                        <h3 className='tile-text-background'>Workday Scheduler</h3>
                    </div>
                    <div>
                        <a href='https://aubree-alexander.github.io/work-day-scheduler/' target='_blank' className='tile-text-background p-2'>Deployed application</a>
                        <a href='https://github.com/aubree-alexander/work-day-scheduler' target='_blank' className='tile-text-background p-2'>GitHub repo</a>
                    </div>
                </div>


                {/* Class Yearbook */}
                <div id='class-yearbook' className="tile">
                    <div className='p-2'>
                        <h3 className='tile-text-background'>Class yearbook</h3>
                    </div>
                    <div>
                        <a href='https://wrapped-in-bananas.herokuapp.com/' target='_blank' className='tile-text-background p-2'>Deployed application</a>
                        <a href='https://github.com/cthomas265/wrapped-in-bananas' target='_blank' className='tile-text-background p-2'>GitHub repo</a>
                    </div>
                </div>

                </div>

        </div>

    </section>

    <div style={{ height: '150px' }} />
    </Parallax>
    )
}

export default Project