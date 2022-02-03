// components
import Head from 'next/head'
import Layout from '../components/Layout'
import Section from '../components/Section'
import MCACarousel from '../components/MCACarousel'
import PricingGrid from '../components/PricingGrid'
// third party components
import LazyLoadedSVG from '../components/LazyLoadedSVG'
import PayPalPayIn4Button from '../components/PayPalPayIn4Button'
// dato functions and helper request function
import { Image, StructuredText } from 'react-datocms'
import { request } from '../lib/datocms'
// fragments
import { homePageRecordFragment } from '../lib/graphQL/homePageRecordFragment'
import { siteHeaderRecordFragment } from '../lib/graphQL/headerRecordFragment'
import { siteFooterRecordFragment } from '../lib/graphQL/footerRecordFragment'
import { responsiveImageFragment } from '../lib/graphQL/helperFragments'
// BAS API Reqs
import getPromotionDetails from '../lib/api/bas/promo';
import getCartItems from '../lib/api/bas/cartCount';
import getPricingGrid from '../lib/api/bas/pricingGrid';

export default function Homepage({headerData, footerData, homepageData, promoData, cartData, pricingData}) {
  const data = homepageData.homePage;
  const mobileMCA = data.mcaList[0];
  // Destructering Pricing Data
  const { SizeName, DiscountPercentage, } = pricingData.PricingGridTabs[0].PricingGridModels;


  return (
    <>
      <Head>
        <title>Canvas Prints - Photos to Canvas Prints</title>
        {/* <link href='http://fonts.googleapis.com/css?family=Open+Sans:300,700' rel='stylesheet' type='text/css'></link> */}
        {/* <meta name="description" content="" /> */}
      </Head>
      <Layout headerData={headerData.siteHeader} footerData={footerData.siteFooter} promoData={promoData} cartData={cartData} >
          {/* MCA Section */}
          <Section>
            <div className="w-full">
              <MCACarousel mcaList={data.mcaList} />
            </div>
          </Section>
          {/* MOBILE ONLY mca tile */}
          <div className="md:hidden absolute bg-slate-50 left-2 right-2 z-10 px-7 py-5 shadow-2xl top-[55vw]">
              <div className="text-4xl lg:text-5xl font-signika text-ecp-darkblue font-bold w-full mb-2 text-center">{mobileMCA.title}</div>
              <div className="text-2xl font-signika text-ecp-darkblue font-bold w-full mb-5 text-center">{mobileMCA.subtitle}</div>
              <div className="my-6">review placeholder</div>
              <ul className="list-disc list-inside text-ecp-darkblue">
              {mobileMCA.bullets.map((bullet, j) => (
                  <li className="text-ecp-darkblue mb-2" key={j}>{bullet.text}</li>
              ))}
              </ul>
              <a className="text-white font-signika bg-ecp-pink w-full flex text-center font-bold py-2 px-7 justify-center whitespace-nowrap uppercase" href={mobileMCA.button[0].buttonAddress}>{mobileMCA.button[0].buttonText} &gt;</a>
          </div>
          {/* MOBILE ONLY MCA tile buffer */}
          <div className="w-full h-[calc(220px+6vh)] md:hidden"></div>
          {/* Value Proposition Section */}
          <Section>
            <ul className="grid grid-cols-2 md:grid-cols-4">
            {data.valuePropositionTiles.map((tile, i) => {
              return (
                <li className={`flex text-white text-sm md:text-base py-5 flex-col justify-center items-center`} style={{backgroundColor: tile.backgroundColor.color}} key={i}>
                  <LazyLoadedSVG 
                    className="fill-white"
                    height="50"
                    width="50"
                    src={tile.svgImage.url}
                  />
                  <span>{tile.titleLine1}</span>
                  <span className="font-bold">{tile.titleLine2}</span>
                </li>
              );
            })}
            </ul>
          </Section>
          {/* Pricing Section */}
          <Section>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-5 px-5 lg:px-0 md:border-b-2 border-ecp-lightgrey'>
              <a href={data.pricingImageLink}>
                <Image data={data.pricingImage.responsiveImage} alt="" />
                <div className="text-center text-gray-400 mt-2">{data.pricingImageFooterText}</div>
              </a>

              {/* Dynamic Pricing Grid */}
              <div className="flex flex-col items-center">
                <PricingGrid pricingData={pricingData} />

                {/* PAYPAL div with 3rd party script */}
                <PayPalPayIn4Button />
              </div>
            </div>
          </Section>
          {/* Products Section */}
          <Section>
            <ul className="py-5 px-0 md:px-5 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:border-b-2 border-ecp-lightgrey">
              {data.productTiles.map((tile, i) => {
                return (
                  <li key={i} className="relative flex last:hidden last:lg:flex even:hidden even:md:flex">
                    <Image className="z-0" data={tile.backgroundImage.responsiveImage} alt="" />
                    <div className='z-[5] absolute opacity-30 top-0 left-0 w-full h-full' style={{backgroundColor: tile.bg.color}}></div>
                    <div className="z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center w-full">
                      <span className="text-white font-bold text-2xl">{tile.title}</span>
                      <a className="text-white hover:bg-ecp-pink transition font-bold border-white border-2 py-2 mt-2 px-7" href={tile.button[0].buttonAddress}>{tile.button[0].buttonText} &gt;</a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Section>
          {/* Qualities Section */}
          <Section>
            <div className="py-5 px-5 lg:px-0 md:border-b-2 border-ecp-lightgrey">
              <div className="text-4xl font-signika text-ecp-darkblue font-bold w-full mb-5 text-center">{data.qualitiesTitle}</div>
              <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {data.qualitiesTiles.map((tile, i) => {
                  return (
                    <li className='flex flex-col md:flex-row lg:flex-col' key={i}>
                      <div className='md:w-1/2 lg:w-full'>
                        <Image data={tile.qualityTileImage.responsiveImage} alt="" />
                      </div>
                      <div className="font-signika md:w-1/2 lg:w-full flex flex-col md:pl-4 lg:pl-0 justify-center">
                        <div className='text-2xl font-bold mt-2'>{tile.title}</div>
                        <div className='mt-2'>{tile.blurb}</div>
                        <a className='hidden md:block md:mt-2 font-bold text-ecp-pink underline' href={tile.button[0].buttonAddress}>{tile.button[0].buttonText} &gt;</a>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Section>
          {/* MOBILE ONLY product tile */}
          <div>
            <li className="relative flex w-full md:hidden">
              <Image className="z-0" data={data.productTiles[1].backgroundImage.responsiveImage} alt="" />
              <div className='z-[5] absolute opacity-30 top-0 left-0 w-full h-full' style={{backgroundColor: data.productTiles[1].bg.color}}></div>
              <div className="z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center w-full">
                <span className="text-white font-bold text-2xl">{data.productTiles[1].title}</span>
                <a className="text-white hover:bg-ecp-pink transition font-bold border-white border-2 py-2 mt-2 px-7" href={data.productTiles[1].button[0].buttonAddress}>{data.productTiles[2].button[0].buttonText} &gt;</a>
              </div>
            </li>
          </div>
          {/* Customer Reviews Section */}
          <Section>
            <div className="py-5 px-5 lg:px-0">
              <div className="text-4xl font-signika text-ecp-darkblue font-bold w-full mb-5 text-center">{data.customerReviewsTitle}</div>
            </div>
          </Section>
          {/* Pitch Section */}
          <Section>
            <div className="py-5 px-8 font-signika md:px-[10%] bg-ecp-bg-lightblue">
              <div className="text-2xl font-bold w-full mb-5 text-center">{data.pitchTitle}</div>
              <StructuredText data={data.pitchParagraph} />
              <a className='font-bold text-ecp-pink' href={data.pitchButton[0].buttonAddress}>{data.pitchButton[0].buttonText} &gt;</a>
            </div>
          </Section>
          {/* Closing CTA Section */}
          <Section>
            <div className="flex-col md:flex-row py-5 my-5 px-5 border-y-2 border-ecp-lightgrey flex items-center justify-center">
              <div className="text-2xl text-ecp-darkblue font-signika font-bold text-center">{data.ctaTitle}</div>
              <a className="text-white text-lg md:text-base md:ml-8 font-signika bg-ecp-pink font-bold py-2 mt-6 md:mt-0 px-7 whitespace-nowrap uppercase" href={data.ctaButton[0].buttonAddress}>{data.ctaButton[0].buttonText} &gt;</a>
            </div>
          </Section>
      </Layout>
    </> 
  )
}

// getstaticProps & getstaticpaths
export async function getStaticProps({preview = false}){
  const PRODUCT_PROPS_QUERY = {
    query: `
      query getHomePage {
        homePage {
          ...homePageRecordFragment
        }
      }
      ${homePageRecordFragment}
      ${responsiveImageFragment}
    `,
    preview
  };

  const HEADER_QUERY = {
    query: `
      query getSiteHeader {
        siteHeader {
          ...siteHeaderRecordFragment
        }
      }
      ${siteHeaderRecordFragment}
      ${responsiveImageFragment}
    `,
    preview
  };

  const FOOTER_QUERY = {
    query: `
      query getSiteFooter {
        siteFooter {
          ...siteFooterRecordFragment
        }
      }
      ${siteFooterRecordFragment}
    `,
    preview
  };

  return {
    props: {
      preview: preview,
      headerData: await request(HEADER_QUERY),
      homepageData: await request(PRODUCT_PROPS_QUERY),
      footerData: await request(FOOTER_QUERY),
      promoData: await getPromotionDetails(),
      cartData: await getCartItems(),
      pricingData: await  getPricingGrid()
    }
  }
}