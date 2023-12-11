import { useState } from 'react'
import SvgIcon from '@/components/svgIcon'
import Edit from './components/edit'
import './index.scss'

const iconStyle = { width: '30px', height: '30px' }
const initEmblems = [
  { label: 'Holder', active: true, value: 4 },
  { label: 'Influencer', active: false, value: 2 },
  { label: 'Web3er', active: false, value: 1 },
  { label: 'Trader', active: false, value: 3 },
]

const Profile = () => {
  // 初始化emblems数据
  const [emblems, setEmblems] = useState(initEmblems)
  // 打开修改弹窗
  const [dialog, setDialog] = useState(false)
  // 打开弹窗
  const openDialog = () => {
    setDialog(true)
  }
  // 关闭弹窗
  const handleClose = () => {
    setDialog(false)
  }
  // 获取弹窗状态
  const handleChange = (arr: Array<any>) => {
    console.log(arr)
    const newEmblems = emblems.map(item => {
      if (arr.includes(item.value)) {
        item.active = true
      } else {
        item.active = false
      }
      return item
    })
    console.log(newEmblems)

    setEmblems([...newEmblems])
    handleClose()
  }
  return (
    <div className="app-contanier profile">
      <div className="contanier">
        <div className="avatar">
          <div className="info">
            <div className="title">JEER # 321</div>
            <div className="line"></div>
          </div>
          <img src="src/assets/images/header/avt.png" />
        </div>
        <div className="attrs">
          <div className="emblems">
            {emblems.map((item, index) => {
              return (
                <div className="emblems-items" key={index}>
                  <div className={item.active ? 'status-img active' : 'status-img'}></div>
                  <div className="title">{item.label}</div>
                </div>
              )
            })}
          </div>
          <div className="name">Aic0x919.eth</div>
          <div className="account">
            <SvgIcon name="x" iconStyle={iconStyle} />
            <div className="info">
              <div className="type">Account</div>
              <div className="value">Aic0x919.eth</div>
            </div>
          </div>
          <div className="address">
            <SvgIcon name="fingerprint" iconStyle={iconStyle}></SvgIcon>
            <div className="info">
              <div className="type">Address</div>
              <div className="value">0x5FEA47518ef4351bc...B96feb</div>
            </div>
          </div>
          <div className="btn-group">
            <div className="content btn">Connect X</div>
            <div className="add btn">Add Wallet</div>
            <div className="edit btn" onClick={openDialog}>
              <i className="edit-icon"></i>
            </div>
          </div>
        </div>
      </div>
      {/* 编辑弹窗 */}
      <Edit data={initEmblems} dialog={dialog} close={handleClose} change={handleChange} />
    </div>
  )
}

export default Profile
