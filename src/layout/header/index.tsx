import './index.scss'
import CustomConnect from '@/components/ConnectButton'
import { useNavigate, Link } from 'react-router-dom'
interface Props {
  showSidebar: boolean
}

const Header = ({ showSidebar }: Props) => {
  console.log(showSidebar)
  const nav = useNavigate()
  // 跳转首页
  const toHome = () => {
    nav('/home')
  }

  return (
    <div className={showSidebar ? 'header' : 'header hidden-sidebar'}>
      {!showSidebar && (
        <span onClick={toHome}>
          <i className="logo"></i>
        </span>
      )}
      <div className="btn-group">
        <Link className="btn-item mr15" to="/event">
          Event
        </Link>
        <Link className="btn-item about" to="/about">
          About
        </Link>
        <CustomConnect></CustomConnect>
      </div>
    </div>
  )
}

export default Header
