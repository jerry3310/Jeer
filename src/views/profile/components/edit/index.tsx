import { useState } from 'react'
import Dialog from '@/components/dialog'
import SvgIcon from '@/components/svgIcon'
import './index.scss'

const iconStyle = { width: '30px', height: '30px' }

interface Props {
  data: Array<any>
  close?: () => void
  change?: (params: any) => void
  dialog: boolean
}

const Edit = (props: Props) => {
  const { data = [], dialog = false, close, change } = props
  const defaultValue = data.filter(item => item.active).map(item => item.value)
  const [checkValue, setCheckValue] = useState(defaultValue)
  // 关闭
  const handleClose = () => {
    close && close()
  }

  // 改变状态
  const [checkList, setCheckList] = useState(data)
  const handleChange = (index: number) => {
    checkList[index].active = !checkList[index].active
    setCheckList([...checkList])

    const checkData = checkList.filter(item => item.active)?.map(item => item.value)
    setCheckValue([...checkData])
  }
  const handleUpdate = () => {
    change && change(checkValue)
  }
  return (
    <Dialog
      visible={dialog}
      close={handleClose}
      title="Edit Profile"
      width={500}
      customClass="profile-dialog"
    >
      <div slot="content" className="content">
        <div className="name">Vic0x919.eth</div>
        <div className="edit-list">
          <div className="edit-items account">
            <div className="left">
              <SvgIcon name="x" iconStyle={iconStyle}></SvgIcon>
              <div className="info">
                <div className="type">Account</div>
                <div className="value">Aic0x919.eth</div>
              </div>
            </div>
            <div className="btn">
              <i className="edit-icon"></i>
              <span>Edit</span>
            </div>
          </div>
          <div className="edit-items address">
            <div className="left">
              <SvgIcon name="fingerprint" iconStyle={iconStyle}></SvgIcon>
              <div className="info">
                <div className="type">Address</div>
                <div className="value">0x5FEA47518ef4351bc...B96feb</div>
              </div>
            </div>
            <div className="btn">
              <i className="edit-icon"></i>
              <span>Edit</span>
            </div>
          </div>
          <div className="edit-items badge">
            <div className="badge-vector">
              <div className="vector">
                <SvgIcon
                  name="creative"
                  iconStyle={{ width: '22.5px', height: '22.5px' }}
                ></SvgIcon>
              </div>
            </div>
            <div className="info badge">
              <div className="type">Badge</div>
              <div className="check-group">
                {checkList.map((item, index) => {
                  return (
                    <div
                      className="check-items"
                      key={index}
                      onClick={() => {
                        handleChange(index)
                      }}
                    >
                      {item.active && <i className="check"></i>}
                      {item.label}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div slot="footer" className="update-btn" onClick={handleUpdate}>
        update
      </div>
    </Dialog>
  )
}

export default Edit
