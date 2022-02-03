import SVG from 'react-inlinesvg'
const toggleFCWidget = () => {
    window.fcWidget.isOpen() ? window.fcWidget.close() : window.fcWidget.open();
}

const FreshChatButton = ({content, svgUrl, styling, height, width}) => {
  return (
  <button className={`${styling} flex items-center`} onClick={() => toggleFCWidget()}>
      <SVG className="mr-1" src={svgUrl} height={height} width={width} />
      <div>{content}</div>
  </button>
  )
};

export default FreshChatButton;
