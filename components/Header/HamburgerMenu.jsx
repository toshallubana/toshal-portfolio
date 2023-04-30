import React, { useCallback, useRef, useEffect, useState } from "react";
import { gsap, Power4 } from 'gsap';
import clsx from 'clsx';

const commonClass =
  'bg-mainTheme rounded-lg h-[3px] my-1 transition-all ease-[cubic-bezier(0.68, -0.6, 0.32, 1.6)] duration-[400ms]';

const HamburgerMenu = () => {
    const [isActive, setIsActive] = useState(false);
    const linkRefs = useRef([]);
    const handleClick = useCallback(() => {
        setIsActive((old) => !old);
    }, []);

    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.1 });
        linkRefs.current.map((target) => {
            tl.fromTo(
                target,
                {
                    x: -100,
                    opacity: 0,
                    duration: 0.2,
                    ease: Power4.easeIn
                },
                {
                    x: 0,
                    opacity: 1
                },
                '<+0.05'
            );
        });
      }, []);
    
    return (
        <>
            <div className={clsx(
                'hidden w-[30px] cursor-pointer lg:flex lg:flex-col lg:z-[100] lg:absolute lg:right-0 lg:top-0 lg:m-5'
            )}
            onClick={handleClick}
            >
                <div
                    className={clsx(
                        commonClass,
                        'w-1/2',
                        isActive
                        ? 'origin-left w-full transform translate-y-[1px] rotate-45'
                        : ''
                    )}
                ></div>
                <div
                    className={clsx(commonClass, isActive ? 'origin-left w-0' : 'w-ful')}
                ></div>
                <div
                    className={clsx(
                        commonClass,
                        'w-3/4',
                        isActive ? 'w-full origin-left transform -rotate-45' : ''
                    )}
                ></div>
        </div>
        <div className={clsx(
          'hidden lg:block fixed left-0 z-[50] transition-all duration-[400ms] ease-[cubic-bezier(0.68, -0.6, 0.32, 1.6)] overflow-auto scrollbar-hide',
          { 'h-0': !isActive },
          { 'h-[calc(100vh_-_80px)]': isActive },
          { 'h-auto': isActive },
            'w-screen top-[80px] max-h-[calc(100vh_-_80px)]'
        )}>
            <div
                className={clsx(
                    'w-full flex flex-col items-start justify-start px-6 pb-10 gap-y-4'
                )}
            >
                <div
                    className="w-full h-auto border-b-[1px] border-b-mainTheme pb-2 last:border-b-0"
                    ref={(e) => {
                    linkRefs.current[0] = e;
                    }}
                >
                    <a className="text-grey-light" href="mailto:toshal.t1@gmail.com" target="_blank">Email</a>
                </div>
                <div
                    className="w-full h-auto border-b-[1px] border-b-mainTheme pb-2 last:border-b-0"
                    ref={(e) => {
                    linkRefs.current[1] = e;
                    }}
                >
                    <a className="text-grey-light" href="https://github.com/toshallubana" target="_blank">Github</a>
                </div>
                <div
                    className="w-full h-auto border-b-[1px] border-b-mainTheme pb-2 last:border-b-0"
                    ref={(e) => {
                    linkRefs.current[2] = e;
                    }}
                >
                    <a className="text-grey-light" href="https://www.linkedin.com/in/toshal-lubana-79419a181/" target="_blank">LinkedIn</a>
                </div>
                <div
                    className="w-full h-auto border-b-[1px] border-b-mainTheme pb-2 last:border-b-0"
                    ref={(e) => {
                    linkRefs.current[3] = e;
                    }}
                >
                    <a className="text-grey-light" href="https://instagram.com/tushar_lubana?igshid=ZDdkNTZiNTM=" target="_blank">Instagram</a>
                </div>
            </div>
        </div>
      </>
    )
}
export default HamburgerMenu;