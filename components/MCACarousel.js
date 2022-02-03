import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useCallback } from 'react'
import { Image } from 'react-datocms'

const MCACarousel = ({mcaList}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true})

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])

    return (
    <div className='overflow-hidden h-full relative'>
        <div className='h-full' ref={emblaRef}>
            <div className='flex h-full'>
                {mcaList.map((mca, i) => {
                return (
                <div key={i} className='h-full mx-1 relative flex-[0_0_100%]'>
                    <div className="hidden md:block h-full w-full absolute top-0 left-0 right-0 bottom-0">
                        <div className="absolute top-1/2 right-20 translate-y-[-50%] bg-slate-50 z-10 px-7 py-5 shadow-2xl">
                            <div className="text-4xl lg:text-5xl font-signika text-ecp-darkblue font-bold w-full mb-2 text-center">{mca.title}</div>
                            <div className="text-2xl font-signika text-ecp-darkblue font-bold w-full mb-5 text-center">{mca.subtitle}</div>
                            <div className="my-6">review placeholder</div>
                            <ul className="list-disc list-inside text-ecp-darkblue">
                            {mca.bullets.map((bullet, j) => (
                                <li className="text-ecp-darkblue mb-2" key={j}>{bullet.text}</li>
                            ))}
                            </ul>
                            <a className="text-white font-signika bg-ecp-pink w-full flex text-center font-bold py-2 px-7 justify-center whitespace-nowrap uppercase" href={mca.button[0].buttonAddress}>{mca.button[0].buttonText} &gt;</a>
                        </div>
                    </div>
                    <div className="h-full w-full relative">
                        {/* always lazy load mobile */}
                        <Image lazyLoad={i !== 0} data={mca.viewport.mobile} alt="" className="relative sm:hidden z-0" />
                        <Image data={mca.viewport.tablet} alt="" className="relative hidden sm:block lg:hidden z-0" />
                        <Image data={mca.viewport.desktop} alt="" className=" relative hidden lg:block z-0" />
                        
                    </div>
                </div>
                );
                })}
            </div>
        </div>
        <button className='absolute top-1/2 left-2 translate-y-[-50%]' onClick={scrollPrev}><span className={'text-[#808080] opacity-70 font-bold leading-[50px] text-8xl'}>&#8249;</span></button>
        <button className='absolute top-1/2 right-2 translate-y-[-50%]' onClick={scrollNext}><span className={"text-[#808080] opacity-70 font-bold leading-[50px] text-8xl"}>&#8250;</span></button>
    </div>
    )
  }

  export default MCACarousel