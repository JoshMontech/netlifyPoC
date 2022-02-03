export const homePageRecordFragment = `
fragment homePageRecordFragment on HomePageRecord {
    mcaList {
        viewport: image {
            desktop: responsiveImage(imgixParams: {fit: crop, w: 1100, h: 450}) {
                ...responsiveImageFragment
            },
            tablet: responsiveImage(imgixParams: {fit: crop, w: 900, h: 450}) {
                ...responsiveImageFragment
            },
            mobile: responsiveImage(imgixParams: {fit: crop, w: 600, h: 450}) {
                ...responsiveImageFragment
            },
        },
        title,
        subtitle,
        bullets {text},
        button {buttonText, buttonAddress}
    },
    valuePropositionTiles {
        svgImage {url},
        titleLine1,
        titleLine2,
        backgroundColor
    },
    pricingImage {
        responsiveImage(imgixParams: { fit: crop, w: 768, h:600  }) {
            ...responsiveImageFragment
        }
    },
    pricingImageLink,
    pricingImageFooterText,
    pricingGridPlaceholder {
        responsiveImage(imgixParams: { fit: crop, w: 768, h:600 }) {
            ...responsiveImageFragment
        }
    },
    productTiles {
        backgroundImage {
            responsiveImage(imgixParams: { fit: crop, w:768, h:425 }) {
                ...responsiveImageFragment
            }
        },
        title,
        button {
            buttonText, 
            buttonAddress
        },
        bg,
    },
    qualitiesTitle,
    qualitiesTiles {
    qualityTileImage{
        responsiveImage(imgixParams: { fit: crop, w:768, h:425 }) {
            ...responsiveImageFragment
        }
    },
    title,
    blurb,
    button {
        buttonText,
        buttonAddress
    },
    },
    customerReviewsTitle,
    pitchTitle,
    pitchParagraph {value},
    pitchButton {buttonText, buttonAddress},
    ctaTitle,
    ctaButton {buttonText, buttonAddress},
}
`