import Script from 'next/script'

const PayPalPayIn4Snippet = () => {
  return (
      <>
      <Script src="https://www.paypal.com/sdk/js?client-id=AeNJiP0SVsV3gdPR8nRrh1Z49LMXmXu6-mEFC6mO22A61iKOpX7bAboF3xEvyWxii32wFNpOlSI9JWkb&components=messages" strategy='lazyOnload' />
      </>
  );
};

export default PayPalPayIn4Snippet;
