const Section = ({children, styles=""}) => {
    return (
        <div className={`w-full flex justify-center ${styles}`}>
            <div className="w-full max-w-screen-xl">
                {children}
            </div>
        </div>
    )
}

export default Section
