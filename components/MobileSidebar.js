import SVG from 'react-inlinesvg'
import { useState } from 'react';
import FreshChatButton from './FreshChatButton';

const MobileSidebar = ({productGroups, fcSrc, fcContent, helpButton, sideBar}) => {
  const [activeIndices, setActiveIndices] = useState(new Set());
  const toggleList = (index) => {
    const newIndices = new Set(activeIndices);
    if (activeIndices.has(index)) {
      newIndices.delete(index);
    } else {
      newIndices.add(index);
    }
    setActiveIndices(newIndices);
  }


  const groups = productGroups.map((group, index) => {
    const isActive = activeIndices.has(index);
    const hasList = group.list.length > 0;
    return (
      <li onClick={() => toggleList(index)} className={"flex flex-col mx-2 p-5 border-b-2 border-ecp-lightgrey w-auto"} key={index}>
          <a className={"py-2 flex content-center justify-between " + (isActive ? "font-bold " : "") + (hasList ? "" : "cursor-pointer")} {... hasList ? {} : {href:group.titleLink}}>
            <span>{group.title}</span>
            {hasList && 
            <span className={"text-ecp-darkblue font-bold text-[2rem] origin-center transition-transform duration-200 " + (isActive ? "rotate-90" : "")}>&#8250;</span>}
          </a>
          {
          
          hasList && 
          <ul className={"ml-10 overflow-hidden transition-max-h duration-500 " + (isActive ? "max-h-[500px]" : "max-h-0")}>
            {group.list.map((product, j) => {
              const existsOnMenu = productGroups.filter(x => x.title === product.text).length > 0;
              const hideOnMobile = product.json && product.json.hideOnMobile; 
              return (
                !existsOnMenu && !hideOnMobile && <li className="py-2 text-xl" key={j}>
                  <a href={product.optionalLink}>{product.text}</a>
                </li>
              )
            })}
          </ul>}
      </li>
    )
  });


  return (
  <div className={"w-full z-20 text-2xl duration-500 md:w-[300px] mt-[-28px] md:mt-0 h-[calc(100vh-38px)] md:h-full absolute bg-white overflow-y-scroll md:overflow-y-auto " + (sideBar ?  "left-0" : "left-[-100%]")}>
    <ul>
      {/* help & order status */}
      <li className="flex w-full p-5 bg-ecp-bg-lightblue">
        <SVG className="mr-2" src={helpButton[0].image.url} height={27} width={27} />
        <a href={helpButton[0].buttonAddress}>{helpButton[0].buttonText}</a>
      </li>
      {/* products */}
      {groups}
      <li className="flex md:hidden flex-col mx-2 p-5 border-b-2 border-ecp-lightgrey w-auto">
        <FreshChatButton content={fcContent} svgUrl={fcSrc} height={18} width={18} styling="" />
      </li>
    </ul>
  </div>
  );
};

export default MobileSidebar;
