import Script from 'next/script';

const GoogleReviewsSnippet = () => {
  return (
  <>
    <Script src='https://apis.google.com/js/platform.js?onload=renderBadge' strategy='lazyOnload'/>
    <Script id="google-reviews-badge" strategy='lazyOnload'>{
    `window.renderBadge = function() {
      var ratingBadgeContainer = document.createElement("div");
      document.body.appendChild(ratingBadgeContainer);
      window.gapi.load('ratingbadge', function() {window.gapi.ratingbadge.render(ratingBadgeContainer, {"merchant_id": 8521978})});
    }`
    }</Script>
  </>
  );
};

export default GoogleReviewsSnippet;
