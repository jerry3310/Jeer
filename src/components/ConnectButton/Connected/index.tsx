import SvgIcon from '@/components/svgIcon'
import './index.scss'

interface Props {
  account: any
  openConnect: () => void
}
const ConnectedBtn = (props: Props) => {
  const { openConnect, account } = props
  console.log(account)
  const handleClick = () => {
    openConnect && openConnect()
  }
  return (
    <div className="avt">
      <div className="image">
        <img src="src/assets/images/header/avt.png" alt="" />
      </div>
      <div className="btn-eth" onClick={handleClick}>
        <span>{account.ensName ? account.ensName : account.displayName + '.eth'}</span>
        <SvgIcon name="down" iconStyle={{ width: '24px', height: '24px', color: '#000' }}></SvgIcon>
      </div>
    </div>
  )
}

export default ConnectedBtn
