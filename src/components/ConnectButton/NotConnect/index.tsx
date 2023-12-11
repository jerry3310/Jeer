import SvgIcon from '@/components/svgIcon'
import './index.scss'

interface Props {
  handleOpen: () => void
}
const NotConnect = (props: Props) => {
  const { handleOpen } = props
  const handleClick = () => {
    handleOpen && handleOpen()
  }
  return (
    <div className="btn-eth" onClick={handleClick}>
      Connect Wallet
      <SvgIcon name="down" iconStyle={{ width: '24px', height: '24px', color: '#fff' }}></SvgIcon>
    </div>
  )
}

export default NotConnect
