import '@fontsource/signika/400.css'
import '@fontsource/signika/700.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/700.css'
// global styles
import '../styles/globals.css'
// 3rd party script snippets
import GoogleReviewsSnippet from '../components/scripts/GoogleReviewsSnippet'
import SegmentSnippet from '../components/scripts/SegmentSnippet'
import FreshChatSnippet from '../components/scripts/FreshChatSnippet'
import PayPalPayIn4Snippet from '../components/scripts/PayPalPayIn4Snippet'
import TagManager from 'react-gtm-module'
import { useEffect } from 'react'

const tagManagerArgs = {
  gtmId: process.env.GTM_ENV_ID,
  auth: process.env.GTM_ENV_AUTH,
  preview: process.env.GTM_ENV_PREVIEW 
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  return (
    <>
    <PayPalPayIn4Snippet />
    <FreshChatSnippet />
    <SegmentSnippet />
    <GoogleReviewsSnippet />
    <Component {...pageProps} />
    </>
  
  )
}

export default MyApp
