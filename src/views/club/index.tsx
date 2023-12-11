import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserSelect from './components/select'
import SvgIcon from '@/components/svgIcon'
import './index.scss'

const iconStyle = { width: '20px', height: '20px', cursor: 'pointer' }
const searchIconStyle = { width: '20px', height: '20px' }

const data = [
  {
    value: 1,
    label: 'Gender',
  },
  {
    value: 2,
    label: 'Male',
  },
  {
    value: 3,
    label: 'Female',
  },
]
const resultList = new Array(16).fill(0)

const Club = () => {
  const [rotate, setRotate] = useState(false)
  // 刷新
  const refresh = () => {
    // 添加动画
    setRotate(true)
    setTimeout(() => {
      setRotate(false)
    }, 1000)
  }
  // 跳转profile页
  const nav = useNavigate()
  const toProfile = (event: any) => {
    const index = (event.target as HTMLElement).getAttribute('data-index')
    console.log(index)
    nav('/profile')
  }
  return (
    <div className="app-contanier filter">
      <div className="filter-header">
        <div className="filter-left">
          <span className="title">Filter</span>
          {/* <div className="filter-type">
            <span className="btn jeer">Jeer</span>
            <span className="btn jeer-girls">Jeer Girls</span>
          </div> */}
        </div>
        <div className="filter-right">
          <span className="count">{520}</span>
          <div className="refresh" onClick={refresh}>
            <SvgIcon name="refresh" className={rotate ? 'rotateing' : ''} iconStyle={iconStyle} />
          </div>
        </div>
      </div>
      <div className="filter-contanier">
        <div className="filters">
          <div className="filter-item">
            <div className="filter-input">
              <SvgIcon name="search" iconStyle={searchIconStyle}></SvgIcon>
              <input type="text" placeholder="search by serial number" />
            </div>
          </div>
          <div className="filter-item">
            <UserSelect options={data} />
          </div>
          {/* <div className="filter-item">
            <div className="filter-input">
              <SvgIcon name="component" iconStyle={searchIconStyle}></SvgIcon>
              <input type="text" />
            </div>
          </div> */}
        </div>
        <div className="filter-result">
          <ul className="result-list" onClick={toProfile}>
            {resultList.map((item, index) => {
              return (
                <li className="list-items" key={index} data-index={index}>
                  <img src={item.src} alt="" />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Club
