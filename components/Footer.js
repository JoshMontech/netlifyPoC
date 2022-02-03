import Section from '../components/Section'
import LazyLoadedSVG from './LazyLoadedSVG'
import { useState } from 'react'

const Footer = ({data}) => {
    const [activeIndices, setActiveIndices] = useState(new Set());
    const toggleList = (name) => {
        const newIndices = new Set(activeIndices);
        if (activeIndices.has(name)) {
        newIndices.delete(name);
        } else {
        newIndices.add(name);
        }
        setActiveIndices(newIndices);
    }
    return (
        <footer className="w-full flex justify-center bg-ecp-darkblue text-white">
            <Section styles="px-2">
                <div className="flex flex-col py-4">
                    <div className="flex justify-center text-xs pt-8">
                        <span>{data.footerTitle}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-footer md:gap-4 mx-8 pt-4 pb-8">
                        <div className="flex flex-col text-lg">
                            <a className="font-bold my-2" href={data.customerReviews[0].titleLink}>{data.customerReviews[0].title}</a>
                            <a className="font-bold my-2" href={data.affiliateProgram[0].titleLink}>{data.affiliateProgram[0].title}</a>
                            <a className="font-bold my-2" href={data.redeemCoupon[0].titleLink}>{data.redeemCoupon[0].title}</a>
                            <div className="my-2" onClick={() => toggleList(data.inspirationalGallerySection[0].title)}>
                                <div className="flex justify-between md:justify-items-start">
                                    <span className="font-bold">{data.inspirationalGallerySection[0].title}</span>
                                    <span className={"md:hidden text-white font-bold text-[2rem] origin-center transition-transform duration-200 " + (activeIndices.has(data.inspirationalGallerySection[0].title) ? "rotate-90" : "")}>&#8250;</span>

                                </div>
                                <ul className={"overflow-hidden transition-max-h duration-500 md:max-h-[500px] " + (activeIndices.has(data.inspirationalGallerySection[0].title) ? "max-h-[500px]" : "max-h-0")}>
                                    {data.inspirationalGallerySection[0].list.map((item, i) => (
                                        <li className="my-3 text-xs" key={i}>
                                            <a href={item.optionalLink}>{item.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="my-2 text-lg" onClick={() => toggleList(data.categoriesSection[0].title)}>
                                <div className="flex justify-between md:justify-items-start">
                                    <span className="font-bold">{data.categoriesSection[0].title}</span>
                                    <span className={"md:hidden text-white font-bold text-[2rem] origin-center transition-transform duration-200 " + (activeIndices.has(data.categoriesSection[0].title) ? "rotate-90" : "")}>&#8250;</span>
                                </div>
                                <ul className={"overflow-hidden transition-max-h duration-500 md:max-h-[500px] " + (activeIndices.has(data.categoriesSection[0].title) ? "max-h-[500px]" : "max-h-0")}>
                                    {data.categoriesSection[0].list.map((item, i) => (
                                        <li className="my-3 text-xs" key={i}>
                                            <a href={item.optionalLink}>{item.text}</a>
                                        </li>
                                    ))}
                                </ul>
                                <div className="hidden md:block">
                                    <span className="font-bold">{data.brandSection[0].title}</span>
                                    <ul>
                                        {data.brandSection[0].list.map((item, i) => (
                                            <li className="my-3 text-xs" key={i}>
                                                <a href={item.optionalLink}>{item.text}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="font-bold grid grid-cols-1 lg:grid-cols-2 gap-8 text-xl font-signika md:mr-8">
                            <div className="my-2">
                                <div className="text-center md:text-left mb-2">{data.cardSection[0].title}</div>
                                <ul className="flex justify-center md:justify-start mt-4 flex-wrap">
                                {data.cardSection[0].list.map((card, i) => (
                                    <li className="mt-[3px] mr-[1px]" key={i}>
                                        <LazyLoadedSVG className="w-[52px] h-[31px]" src={card.optionalImage.url}/>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            <div className="my-2">
                                <div className="text-center md:text-left">{data.followUsSection[0].title}</div>
                                <ul className="flex justify-center md:justify-start mt-4 flex-wrap">
                                {data.followUsSection[0].list.map((sm, i) => (
                                    <li className="mt-[3px] mr-4 last:mr-0" key={i}>
                                        <a href={sm.optionalLink}>
                                            <LazyLoadedSVG className="w-[35px] h-[35px]" src={sm.optionalImage.url}/>
                                        </a>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex pt-8 justify-center border-t border-t-ecp-lightblue text-xs">
                        <span>{data.copyright}</span>
                    </div>
                    <ul className="flex mt-4 mb-4 justify-center flex-wrap text-xs">
                        {data.etcLinks.map((link,i) => (
                            <li className='px-2 border-r-2 border-r-white last:border-r-0' key={i}>
                                <a className='uppercase' href={link.optionalLink}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>
            
        </footer>
    )
}

export default Footer
