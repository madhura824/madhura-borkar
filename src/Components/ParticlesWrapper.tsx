"use client"
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const ParticlesWrapper = ({children}:Readonly<{
    children: React.ReactNode;
  }>) => {
    const [ init, setInit ] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void>=>  {
        // console.log(container);
    };

    return (
        <>
        { 
            
            init  && <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                // background: {
                //     color: {
                //         value: "#f0f4f8", // Soft, light background color
                //     },
                // },
                fpsLimit: 60, // Reduced FPS for smoother transitions
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        // onHover: {
                        //     enable: true,
                        //     mode: "grab", // Soft hover effect
                        // },
                    
                    },
                    modes: {
                        push: {
                            quantity: 2, // Fewer particles added on click
                        },
                        grab: {
                            distance: 150, // Soft hover effect distance
                            line_linked: {
                                opacity: 0.1, // Light opacity on hover links
                            },
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#a3b8cc", // Soft, pastel color for particles
                    },
                    // links: {
                    //     color: "#cfd8dc", // Soft color for links
                    //     distance: 200,
                    //     enable: true,
                    //     opacity: 0.2, // Very subtle link opacity
                    //     width: 0.5, // Thin lines
                    // },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1.5, // Slower movement
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            // area: 1000, // Slightly spread out particles
                        },
                        value: 50, // Reduced particle count
                    },
                    opacity: {
                        value: 0.2, // Very low opacity for minimalistic feel
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 2, max: 4 }, // Small, soft particles
                    },
                },
                detectRetina: true,
            }}
            
        >
            </Particles>
}
{children}
</>
)
   
}


export default ParticlesWrapper;