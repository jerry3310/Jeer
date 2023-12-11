import { useNavigate } from 'react-router-dom'
import SvgIcon from '@/components/svgIcon'
import './index.scss'

const iconStyle = {
  width: '26px',
  height: '26px',
}

const openTwitter = () => {
  window.open('https://twitter.com/Jeerclub')
}
const opeJeerclub = () => {
  window.open('https://opensea.io/collection/jeerclub?tab=items')
}

const Sidebar = () => {
  // 跳转首页
  const nav = useNavigate()
  const toHome = () => {
    nav('/home')
  }
  return (
    <div className="sidebar">
      <i className="icon-logo" onClick={toHome}></i>
      <div className="icons">
        <span className="item" onClick={openTwitter}>
          <SvgIcon name="xFilled" iconStyle={iconStyle}></SvgIcon>
        </span>

        <span className="item">
          <SvgIcon name="msg" iconStyle={iconStyle}></SvgIcon>
        </span>
        <span className="item" onClick={opeJeerclub}>
          <SvgIcon name="sailboat" iconStyle={iconStyle}></SvgIcon>
        </span>
      </div>
    </div>
  )
}

export default Sidebar
