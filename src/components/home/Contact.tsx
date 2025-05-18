import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Contact = () => {
    const airplaneRef = useRef<SVGSVGElement>(null);
    const airplaneContainerRef = useRef<HTMLDivElement>(null);
    const contactFormRef = useRef<HTMLFormElement>(null);
    const successMessageRef = useRef<HTMLDivElement>(null);
    const cloudsRef = useRef<(SVGSVGElement | null)[]>([]); // Allow null for initial ref population

    const [isTakingOff, setIsTakingOff] = useState(false);

    // --- GSAP Animations ---    
    let playTakeOffAnimation: (() => void) | undefined;
    useEffect(() => {
        // Ensure all refs are current
        const airplane = airplaneRef.current;
        const airplaneContainer = airplaneContainerRef.current;
        const form = contactFormRef.current;
        const successMessage = successMessageRef.current;
        // Filter out nulls from cloudsRef.current before passing to GSAP
        const currentClouds = cloudsRef.current.filter(c => c !== null) as SVGSVGElement[];

        if (!airplane || !airplaneContainer || !form || !successMessage || currentClouds.length < 3) {
            // console.warn("GSAP setup: One or more refs are not yet available.");
            return; // Wait for all refs to be defined
        }

        gsap.set(airplane, { x: 0, y: 0, rotation: 0, transformOrigin: "center center" });

        const hoverTimeline = gsap.timeline({ repeat: -1, yoyo: true });
        hoverTimeline.to(airplane, {
            y: -15,
            rotation: -3,
            duration: 2,
            ease: "sine.inOut"
        }).to(airplane, {
            y: 0,
            rotation: 0,
            duration: 2,
            ease: "sine.inOut"
        });

        currentClouds.forEach((cloud, index) => {
            const initialCloudOpacity = gsap.utils.random(0.65, 0.9);
            gsap.set(cloud, { opacity: initialCloudOpacity });
            gsap.to(cloud, {
                x: (index % 2 === 0) ? `+=${gsap.utils.random(20, 40)}` : `-=${gsap.utils.random(20, 40)}`,
                duration: gsap.utils.random(15, 25),
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: gsap.utils.random(0, 7)
            });
        });

        const resetAirplaneAndClouds = () => {
            gsap.set(airplane, {
                x: 0,
                y: 0,
                rotation: 0,
                scale: 1,
                opacity: 1
            });
            currentClouds.forEach((cloud) => {
                const resetOpacity = gsap.utils.random(0.65, 0.9);
                gsap.set(cloud, {
                    y: 0, // Ensure y is reset if modified by takeoff
                    opacity: resetOpacity
                });
            });
            hoverTimeline.restart().play();
            setIsTakingOff(false);
        };

        playTakeOffAnimation = () => {
            if (isTakingOff || !airplane || !airplaneContainer || currentClouds.length === 0) return;
            setIsTakingOff(true);
            hoverTimeline.pause();

            const takeOffTimeline = gsap.timeline({
                onComplete: () => {
                    if (successMessage) {
                        successMessage.classList.add('show');
                        setTimeout(() => {
                            successMessage.classList.remove('show');
                            form?.reset();
                            resetAirplaneAndClouds();
                        }, 3000);
                    }
                }
            });

            takeOffTimeline.to(airplane, {
                duration: 0.3,
                rotation: -25,
                ease: "power1.out"
            })
            .to(airplane, {
                duration: 1.5,
                x: airplaneContainer.offsetWidth * 0.8,
                y: -airplaneContainer.offsetHeight * 0.8,
                scale: 0.3,
                opacity: 0,
                ease: "power2.inOut"
            }, "-=0.2");

            currentClouds.forEach(cloud => {
                takeOffTimeline.to(cloud, {
                    y: `+=${gsap.utils.random(80, 120)}`,
                    opacity: 0,
                    duration: gsap.utils.random(1.0, 1.5),
                    ease: "power1.in"
                }, "<0.3");
            });
        };

        // Type explicitly as EventListener for addEventListener
        const handleFormSubmit: EventListener = (event: Event) => {
            event.preventDefault(); 
            if (!form) return;

            let isValid = true;
            // Type assertion for querySelectorAll elements
            form.querySelectorAll('[required]').forEach(input => {
                const el = input as HTMLInputElement | HTMLTextAreaElement;
                if (!el.value.trim()) {
                    isValid = false;
                    el.classList.add('border-red-500', 'ring-red-500');
                    el.classList.remove('focus:ring-[#d4d3c8]'); // Tailwind class from your HTML
                } else {
                    el.classList.remove('border-red-500', 'ring-red-500');
                    el.classList.add('focus:ring-[#d4d3c8]'); // Tailwind class from your HTML
                }
            });

            if (isValid) {
                console.log('Form submitted (simulated)');
                playTakeOffAnimation();
            } else {
                console.log('Form validation failed');
                gsap.fromTo(form, { x: -10 }, { x: 10, duration: 0.05, repeat: 5, yoyo: true, clearProps: "x" });
            }
        };
        
        form.addEventListener('submit', handleFormSubmit);
        resetAirplaneAndClouds(); // Initial call to set up opacities and hover

        return () => {
            hoverTimeline.kill();
            currentClouds.forEach(cloud => gsap.killTweensOf(cloud));
            gsap.killTweensOf(airplane);
            form.removeEventListener('submit', handleFormSubmit);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Rerun effect if isTakingOff changes, to re-evaluate playTakeOffAnimation guard

  return (
    <section id="contact" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
                {/* Form container will be centered by its own margin auto within this div */}
                <div className="animated-contact-form-container">
                    <div id="animated-contact-airplane-animation-area" className="flex flex-col justify-center items-center order-1 md:order-2">
                        <h2 className="text-3xl font-bold mb-2 text-center animated-contact-text-light-beige">CONTACT US</h2>
                        <p className="text-sm mb-6 text-center animated-contact-text-medium-gray">We'll fly your message right to us!</p>
                        <div id="animated-contact-airplane-container" ref={airplaneContainerRef}>
                            <svg ref={el => cloudsRef.current[0] = el} className="animated-contact-cloud animated-contact-cloud1" viewBox="0 0 120 60"> <path d="M15 40 A15 15 0 0 1 45 40 A15 15 0 0 1 75 40 A15 15 0 0 1 105 40 Q105 55 90 55 H30 Q15 55 15 40Z" /> </svg>
                            <svg ref={el => cloudsRef.current[1] = el} className="animated-contact-cloud animated-contact-cloud2" viewBox="0 0 96 50"> <path d="M12 30 A12 12 0 0 1 36 30 A12 12 0 0 1 60 30 A12 12 0 0 1 84 30 Q84 42 72 42 H24 Q12 42 12 30Z" /> </svg>
                            <svg ref={el => cloudsRef.current[2] = el} className="animated-contact-cloud animated-contact-cloud3" viewBox="0 0 150 70"> <path d="M20 50 A20 20 0 0 1 60 50 A20 20 0 0 1 100 50 A20 20 0 0 1 140 50 Q140 65 120 65 H40 Q20 65 20 50Z" /> </svg>
                            <svg id="animated-contact-paper-airplane" ref={airplaneRef} viewBox="0 0 512 512" xmlSpace="preserve">
                                <path d="M503.56,49.443c-3.131-1.349-6.653-1.235-9.668,0.338L11.035,241.725c-6.058,3.134-9.902,9.235-9.902,15.893 c0,6.658,3.844,12.759,9.902,15.893l115.888,59.904l28.536,138.739c1.235,6.015,5.872,10.633,11.913,11.888 c0.992,0.203,1.999,0.303,3.002,0.303c4.963,0,9.705-2.547,12.463-7.034l86.004-142.635l141.698,73.249 c2.899,1.498,6.069,2.24,9.231,2.24c2.294,0,4.584-0.469,6.732-1.424L503.899,59.447 C507.232,57.852,508.232,53.408,503.56,49.443z M152.974,257.548L41.785,257.617l352.031-176.01L152.974,257.548z M277.376,446.035l-22.483-109.348l108.058-89.592L277.376,446.035z M452.721,71.935L194.525,329.723l-21.109-102.657 L452.721,71.935z"/>
                            </svg>
                        </div>
        </div>
        
                    <form ref={contactFormRef} id="animatedContactForm" className="space-y-6 order-2 md:order-1" onSubmit={async (e) => {
                        e.preventDefault();
                        const form = contactFormRef.current;
                        let isValid = true;
                        form?.querySelectorAll('[required]').forEach(input => {
                            const el = input as HTMLInputElement | HTMLTextAreaElement;
                            if (!el.value.trim()) {
                                isValid = false;
                                el.classList.add('border-red-500', 'ring-red-500');
                                el.classList.remove('focus:ring-[#d4d3c8]');
                            } else {
                                el.classList.remove('border-red-500', 'ring-red-500');
                                el.classList.add('focus:ring-[#d4d3c8]');
                            }
                        });
                        if (isValid && form) {
                            const formData = new FormData(form);
                            await fetch('https://docs.google.com/forms/d/e/1FAIpQLSfICAP0CkzdQH8Kj-6nChP2F-3Kh0C_o6MpkGCKAhVfiYum2Q/formResponse', {
                                method: 'POST',
                                mode: 'no-cors',
                                body: formData,
                            });
                            if (playTakeOffAnimation) playTakeOffAnimation();
                        } else if (form) {
                            gsap.fromTo(form, { x: -10 }, { x: 10, duration: 0.05, repeat: 5, yoyo: true, clearProps: "x" });
                        }
                    }}>
            <div>
                            <label htmlFor="name" className="block text-sm font-medium animated-contact-text-light-beige">Your name</label>
                            <input type="text" name="entry.2055067408" id="name" required
                                className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm animated-contact-input-field focus:outline-none focus:ring-2 focus:ring-[#d4d3c8]"
                                placeholder="John Doe" />
            </div>
            
            <div>
                            <label htmlFor="email" className="block text-sm font-medium animated-contact-text-light-beige">Email address</label>
                            <input type="email" name="entry.502418243" id="email" required
                                className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm animated-contact-input-field focus:outline-none focus:ring-2 focus:ring-[#d4d3c8]"
                                placeholder="you@example.com" />
                            <p className="mt-1 text-xs animated-contact-text-medium-gray">Or reach out manually to <a href="mailto:contact@devdash.co" className="underline hover:text-[#d4d3c8]">contact@devdash.co</a></p>
            </div>
            
            <div>
                            <label htmlFor="message" className="block text-sm font-medium animated-contact-text-light-beige">Your message</label>
                            <textarea id="message" name="entry.1088983482" rows={4} required
                                className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm animated-contact-input-field focus:outline-none focus:ring-2 focus:ring-[#d4d3c8]"
                                placeholder="Your message here..."></textarea>
            </div>
            
                        <div>
                            <button type="submit"
                                    className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-base font-semibold animated-contact-btn-send focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#414b53] focus:ring-offset-[#525d66]">Send Message</button>
                        </div>
          </form>
        </div>
                
                <div id="animated-contact-success-message" ref={successMessageRef}>Message Sent! Our pilots are on it.</div>
      </div>
    </section>
  );
};

export default Contact;
