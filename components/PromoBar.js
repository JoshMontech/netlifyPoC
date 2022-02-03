const PromoBar = ({promoData}) => {
    return (
        <div className={"promo-bar w-full flex justify-center bg-ecp-lightblue text-white"}>
            <div className="w-full flex justify-center max-w-screen-lg">
                <span className="font-bold text-lg">
                    {promoData.PromoBarText}
                </span>
            </div>
        </div>
    )
}

export default PromoBar
