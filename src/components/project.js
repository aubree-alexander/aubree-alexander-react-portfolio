import React from 'react'
import '../style.css'

function Project() {
    return (
        <section id="projects" className="projects fade-in-text">

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
            <div className="small-tiles">

                {/* tech blog */}
            <div className="small-tiles-1">

                    <div className="tile">
                        <div className='p-4'>
                            <h3 className='tile-text-background'>Tech Blog</h3>
                        </div>
                        <div>
                            <a href='https://github.com/aubree-alexander/tech-blog' target='_blank' className='tile-text-background p-2'>Deployed application</a>
                            <a href='https://mighty-hollows-58259.herokuapp.com/' target='_blank' className='tile-text-background p-2'>GitHub repo</a>
                        </div>
                    </div>


                {/* weather dashboard */}
                <div className="tile">
                    <h3>Weather Dashboard</h3>
                    <div>
                        <a href='https://aubree-alexander.github.io/weather-dashboard/' target='_blank'>Deployed application</a>
                        <a href='https://github.com/aubree-alexander/weather-dashboard' target='_blank'>GitHub repo</a>
                    </div>
                </div>

                </div>

                {/* Workday scheduler */}
                <div className="small-tiles-2">
                        <div className="tile">
                            <h3>Workday Scheduler</h3>
                            <div>
                                <a href='https://aubree-alexander.github.io/work-day-scheduler/' target='_blank'>Deployed application</a>
                                <a href='https://github.com/aubree-alexander/work-day-scheduler' target='_blank'>GitHub repo</a>
                            </div>
                        </div>



                {/* Deep Thoughts */}
                <div className="tile">
                    <h3 className="project-title">Deep Thoughts</h3>
                    <div>
                        <a href='#' target='_blank'>Deployed application</a>
                        <a href='https://github.com/aubree-alexander/deep-thoughts' target='_blank'>GitHub repo</a>
                    </div>
                </div>

                </div>

            </div>
        </div>

    </section>
    )
}

export default Project