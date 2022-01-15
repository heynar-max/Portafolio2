import React from 'react'
import Particles from 'react-tsparticles'

const Particle = () => {
    return (
        <>
        <Particles width="100%" height="100vh" 
            params={{
                
                particles: {
                    number:{
                    value:15,
                    density:{
                        enable: true,
                        value_area: 1100
                    
                    }
                    
                },
                    color:{
                    value: '#636e72'
                    },
                    shape:{
                    type: 'circle',
                    stroke: {
                        width: 0
                    },
                    polygon:{
                        nb_sides: 6
                    }
                    },
                    line_linked: {
                    enable: true,
                    distance: 150,
                    opacity: .5,
                    width: .5,
                    shadow: {
                        enable: true,
                        color: "#334052",
                        blur: 5
                    }
                    },
                    move:{
                    enable: true,
                    random: true,
                    speed: 1,
                    attract:{
                        rotateX: 600,
                        rotateY: 1200
                    }
                    },
                    size: {
                    value: 4,
                    random: true,
                    anim:{
                        speed: 40,
                        size_min: 0.1
                    }
                    },
                    opacity: {
                    value: 0.8,
                    anim: {
                        speed: 1,
                        opacity_min: 0.1
                    }
                    }
                }
            }}
        />
    </>
    )
}

export default Particle
