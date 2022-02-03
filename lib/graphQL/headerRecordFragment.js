export const siteHeaderRecordFragment = `
fragment siteHeaderRecordFragment on SiteHeaderRecord {
    facebook {
      text,
      optionalLink,
      optionalImage {url}
    }
    questionsString,
    questionsPhone,
    mobileChatString,
    mobileChatIcon {url},
    desktopChatString,
    desktopChatIcon {url},
    etcLinks {
      text, 
      optionalLink
    },
    mainLogo {
      buttonAddress, 
      image {url}
    },
    productGroups {
      title,
      titleLink,
      list {
        text,
        optionalLink,
        optionalImage {
          responsiveImage(imgixParams: { fit: crop, w:240, h: 150}) {
           ...responsiveImageFragment
          }	
        },
        json,
      }
    },
    promoBarText,
    help {
      buttonText,
      buttonAddress,
      image {url},
    }
  }
`