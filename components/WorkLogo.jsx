import {gsap, Power4} from 'gsap';
import { useEffect, useRef } from 'react';

const WorkLogo = () => {
    const linkRefs = useRef([]);
    const imageRefs = useRef([]);
    
    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.2 });
        linkRefs.current.map((target) => {
            tl.fromTo(
                target,
                {
                    y: 200,
                    opacity: 0,
                    duration: 1,
                    ease: Power4.easeIn
                },
                {
                    y: 0,
                    opacity: 1
                },
                '<+0.05'
            );
        });

        const tlScroll = gsap.timeline({paused: true});
            imageRefs.current.map((target) => {
                tlScroll.reverse();
            });
    }, []);

    return (
        <div className='flex flex-col bg-grey-dark items-center'>
            <p className='text-grey-light mt-10 text-4xl'>Work with</p>
            <div className="w-full h-[250px] flex items-center justify-between" ref={(e) => linkRefs.current[0] = e}>
                <div className='w-[300px] mr-6' ref={(e) => imageRefs.current[0] = e}>
                    <img src="/images/aflac.png" className='w-full'/> 
                </div>
                <div className='w-[300px] mr-6' ref={(e) => imageRefs.current[1] = e}>
                    <img src="/images/argus.png" className='w-full'/> 
                </div>
                <div className='w-[300px] mr-6' ref={(e) => imageRefs.current[2] = e}>
                    <img src="/images/antony.png" className='w-full'/> 
                </div>
                <div className='w-[300px] mr-6' ref={(e) => imageRefs.current[3] = e}>
                    <img src="/images/reaper.png" className='w-full'/> 
                </div>
                <div className='w-[300px] mr-6' ref={(e) => imageRefs.current[4] = e}>
                    <img src="/images/sharknet.png" className='w-full h-fit'/> 
                </div>
            </div>
        </div>
    )
}
export default WorkLogo;