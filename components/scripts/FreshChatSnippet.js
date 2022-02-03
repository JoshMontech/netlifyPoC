import Script from "next/script";
const FreshChatSnippet = () => {
  return (
  <>
    <Script id="freshchat-settings">{`
        window.fcSettings = {
            token: "e13c0cc8-5fac-4aa6-beea-f7bbeeda27f5",
            siteId: "ECP",
            host: "https://wchat.freshchat.com",
            tags: ["EasyCanvasPrints"],
            // Setting FAQ Tags in the object below.
            faqTags : {
            // Array of Tags
            tags : ['faq_EasyCanvasPrints'],
            //For articles, the below value should be article.
            //For article category, the below value should be category.
            filterType:'category' //Or filterType: 'article'
            },
            //Have the widget open on load by default by setting the below value to true
            open: false,
            config: {
                headerProperty: {
                    direction: 'ltr',
                      backgroundColor: '#18506F',
                    foregroundColor: '#FFFFFF',
                      hideChatButton: true
                },
                  agent: {
                    hideName: false,
                    hidePic: true,
                    hideBio: true
                  }   
            }
          }; 
    `}</Script>
    <Script src="https://wchat.freshchat.com/js/widget.js" strategy="lazyOnload" />
  </>
  );
};
export default FreshChatSnippet;
