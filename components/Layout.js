import Header from './Header'
import Footer from "./Footer"
import MobileSidebar from './MobileSidebar'
import { useState } from 'react'

const Layout = ({headerData, footerData, children, promoData, cartData, pricingData}) => {
    const [sideBar, setSideBar] = useState(false);
    const showSideBar = () => {
        setSideBar(!sideBar);
    };

    return (
        <div className={"flex flex-col h-screen min-w-[300px] " + (sideBar ? "overflow-y-hidden md:overflow-y-auto" : "")}>
            <Header showSideBar={showSideBar} sideBarState={sideBar} data={headerData} promoData={promoData} cartData={cartData} />
            <main className="relative flex flex-col" pricingData={pricingData}>
                <MobileSidebar sideBar={sideBar} fcContent={headerData.mobileChatString} fcSrc={headerData.mobileChatIcon.url} helpButton={headerData.help} productGroups={headerData.productGroups} />
                {children}
            </main>
            <Footer data={footerData} />
        </div>
    )
}

export default Layout



