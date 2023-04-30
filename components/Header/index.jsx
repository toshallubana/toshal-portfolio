import React, { useEffect, useRef, useState } from 'react';
import { gsap, Power4 } from 'gsap';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
    const isAnimatedPlayed = useRef(false);
    const linkRefs = useRef([]);

    useEffect(() => {
        if (!isAnimatedPlayed.current) {
          const tl = gsap.timeline({ delay: 0.1 });
          linkRefs.current.map((target) => {
            tl.fromTo(
              target,
              {
                y: 100,
                opacity: 0,
                duration: 0.2,
                ease: Power4.easeIn
              },
              {
                y: 0,
                opacity: 1
              },
              '<+0.05'
            );
          });
          isAnimatedPlayed.current = true;
        }
    }, []);

    return (
        <>
            <div className="m-w-[1140px] mx-auto lg:hidden" 
                ref={(e) => {
                    linkRefs.current[0] = e;
                }}
            >
                <div className="flex mx-auto items-center justify-around">
                    <div className="">
                        <a href="mailto:toshal.t1@gmail.com" target="_blank" className="flex items-center py-4">
                            <span>
                                <img src="/images/email.svg" className="w-[65px]"/>
                            </span>
                            <p className="text-grey-light ml-4">Get in touch</p>
                        </a>
                    </div>
                    <div className="flex items-center ">
                        <span>
                            <a href="https://www.linkedin.com/in/toshal-lubana-79419a181/" target="_blank" className="text-grey-light">LinkedIn</a>
                        </span>
                        <span className="text-grey-light">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                        <span>
                            <a href="https://github.com/toshallubana" target="_blank" className="text-grey-light">GitHub</a>
                        </span>
                        <span className="text-grey-light">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                        <span>
                            <a href="https://instagram.com/tushar_lubana?igshid=ZDdkNTZiNTM=" target="_blank" className="text-grey-light">Instagram</a>
                        </span>
                    </div>
                </div>
                <div className="border-b-2 text-grey-light"></div>
            </div>
            <HamburgerMenu />
        </>
    )
}
export default Header;