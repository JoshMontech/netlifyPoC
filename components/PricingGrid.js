import React from 'react';

const PricingGrid = ({pricingData}) => {
  const pricingDataMap = pricingData.PricingGridTabs[0].PricingGridModels
  const { SizeName, DiscountPercentage, DiscountPriceString, OriginalPriceString } = pricingDataMap;
  console.log(pricingDataMap)
  return (
    <div>
      <table>
        <tr>
          <th>Canvas Size</th>
          <th>Deal</th>
          <th colSpan="2">Your Price</th>
        </tr>
        {pricingDataMap.map((canvas, index) => {
          return (
            <tr key={index}>
              <td>{canvas.SizeName}</td>
              <td>{canvas.DiscountPercentage}</td>
              <td>{canvas.DiscountPriceString}</td>
              <td>{canvas.OriginalPriceString}</td>
            </tr>
          )})}
      </table>
    </div>
  )
}

export default PricingGrid;
