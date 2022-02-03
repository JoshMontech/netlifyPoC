import Script from "next/script"
import * as snippet from "@segment/snippet"

const SegmentSnippet = () => {
    function renderSnippet() {
        const opts = {
            apiKey: process.env.SEGMENT_WRITE_KEY,
            // note: the page option only covers SSR tracking.
            // Page.js is used to track other events using `window.analytics.page()`
            page: true,
        }

        if (process.env.NODE_ENV === 'development') {
            return snippet.max(opts)
        }

        return snippet.min(opts)
    }
    return (
    <>
        <Script id="segment-script" dangerouslySetInnerHTML={{ __html: renderSnippet() }} />
    </>
    );
}; 

export default SegmentSnippet;
