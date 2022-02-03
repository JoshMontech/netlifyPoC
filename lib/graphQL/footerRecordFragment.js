export const siteFooterRecordFragment = `
fragment siteFooterRecordFragment on SiteFooterRecord {
    footerTitle,
    customerReviews {
      title,
      titleLink,
    },
    affiliateProgram {
      title,
      titleLink
    },
    redeemCoupon {
      title,
      titleLink
    },
    inspirationalGallerySection {
      title,
      list {
        text,
        optionalLink
      }
    },
    categoriesSection {
      title,
      list {
        text,
        optionalLink
      }
    },
    brandSection {
      title,
      list {
        text, optionalLink
      }
    },
    cardSection {
      title,
      list {
        text,
        optionalImage {url}
      }
    },
    followUsSection {
      title,
      list {
        text,
        optionalLink,
        optionalImage {url}
      }
    },
    copyright,
    etcLinks {
      text,
      optionalLink
    }
}
`