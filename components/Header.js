import PromoBar from "./PromoBar"
import { Turn as Hamburger } from 'hamburger-react'
import SVG from 'react-inlinesvg'
import { Image } from 'react-datocms'
import FreshChatButton from "./FreshChatButton"

const Header = ({data, showSideBar, sideBarState, promoData, cartData}) => {
    const products = data.productGroups.map((group, i) => {
        const hasLists = group.list.length > 0;
        return (
            <li className={"group relative font-bold py-5 mr-8 last:mr-0 " + (i > 3 ? "hidden xl:block" : "")} key={i}>
                <a className={"flex items-center " + (!hasLists ? "cursor-pointer" : "")} {... hasLists ? {} : {href:group.titleLink}}>
                    <span className="group-hover:text-ecp-lightblue group-hover:border-b-[3px] group-hover:mb-[-3px] border-ecp-lightblue ">{group.title}</span>
                    {hasLists &&
                        <div className="border-y-ecp-lightblue border-x-transparent h-0 w-0 border-[5px] border-solid border-b-0 ml-2"></div>
                    }
                </a>
                {hasLists &&
                <ul className={"absolute grid gap-3 xl:grid-cols-3 md:min-w-[400px] xl:min-w-[650px] mt-[-3px] top-[65px] max-h-0 bg-white text-ecp-darkblue overflow-hidden group-hover:p-2 group-hover:max-h-[9999px] z-10 " + (i !== 0 ? "right-0 md:grid-cols-3" : "md:grid-cols-2")}>
                    {group.list.map((product, j) => {
                        // if product exists in product groups, only include on medium
                        const existsOnMenu = data.productGroups.filter(x => x.title === product.text).length > 0;
                        return (
                        <li className={"py-2 bg-ecp-bg-lightblue hover:underline decoration-ecp-pink text-ecp-pink " + (existsOnMenu ? "hidden md:block xl:hidden" : "")}  key={j}>
                            <a className="flex flex-col" href={product.optionalLink}>
                                <Image data={product.optionalImage.responsiveImage} alt=""/>
                                <span className=" text-xs pt-2 text-center">{product.text} &gt;</span>
                            </a>
                        </li>
                        );
                    })}
                </ul>
                }
            </li>
        )
    });


    return (
        <header className="w-full">
            <div className=" flex justify-center bg-ecp-darkblue text-white px-2">
                <div className="w-full max-w-screen-xl">
                    <div className="hidden md:flex w-full justify-between items-center border-b border-ecp-lightblue text-xs font-bold py-2">
                        <a href={data.facebook[0].optionalLink} className="flex">
                            <SVG className="mr-2" src={data.facebook[0].optionalImage.url} />
                            {data.facebook[0].text}
                        </a>
                        <div className="flex items-center justify-between">
                        <span className="mr-1">{data.questionsString}</span>
                        <FreshChatButton height={15} width={15} content={data.desktopChatString} svgUrl={data.desktopChatIcon.url} styling="font-bold mr-1" />
                        |
                        <a className="ml-1" href={`tel:${data.questionsPhone}`}>{data.questionsPhone}</a>
                        </div>
                        <ul>
                            {data.etcLinks.map((link, i) => {
                                if (link.text === "") return null;
                                return <li className="ml-2" key={i}><a href={link.optionalLink}>{link.text}</a></li>
                            })}
                        </ul>
                    </div>
                    <div className="w-full flex content-center justify-between">
                        <div className="flex items-center">
                            <div className="lg:hidden">
                            <Hamburger toggle={showSideBar} toggled={sideBarState} rounded />
                            </div>
                            <a href={data.mainLogo[0].buttonAddress}>
                                <SVG className="w-[150px] md:w-[250px] mb-[-10px]" src={data.mainLogo[0].image.url}/>
                            </a>
                        </div>
                        <div className="flex">
                            <ul className="hidden md:flex content-center">{products}</ul>
                            <div className="flex">
                                <a
                                    className="m-auto xl:hidden h-[25px] w-[25px] rounded-full bg-white text-ecp-darkblue flex justify-center content-center font-bold cursor-pointer"
                                    href={data.help[0].buttonAddress}
                                >?</a>
                            </div>
                        </div>
                        <div>
                            Cart Count: {cartData.CartItems}
                        </div>
                    </div>
                </div>
            </div>
            <PromoBar promoData={promoData} />
        </header>
    )
}

export default Header
