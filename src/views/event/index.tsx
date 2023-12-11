import { useState } from 'react'
import SvgIcon from '@/components/svgIcon'
import './index.scss'

interface itemStyle {
  text: string
  style: any
  type: string
}
const events = [
  {
    title: 'JEER SEED',
    src: [
      'src/assets/images/event/jeer.png',
      'src/assets/images/event/club2.png',
      'src/assets/images/event/club3.png',
    ],
    info: '"Jeer seed" is an investment plan that will be seeded into various industries in the real world. It will provide intellectual property (IP) to empower different sectors, serving as one of the external catalysts for asset income to Jeer holders.',
  },
  {
    title: 'JEER GIRL',
    src: [
      'src/assets/images/event/club3.png',
      'src/assets/images/event/jeer.png',
      'src/assets/images/event/club2.png',
    ],
    info: [
      { text: 'Mint 15th Dec 6:00 PM Total Supply: 3000', style: { width: '275px' } },
      { type: 'mint', text: 'MINT' },
      {
        text: 'Jeer Girl is AI Generate NFT collection. Each one carries the emotions and enthusiasm of Jeer Club community.',
        style: {
          marginBottom: '30px',
        },
      },
      { text: 'Join us and embrace this unique journey together!' },
    ],
  },
]
const length = events.length - 1

const Event = () => {
  let [currentIndex, setCurrentIndex] = useState(0)
  // 切左
  const switchLeft = () => {
    if (currentIndex <= 0) return
    const newIndex = currentIndex - 1
    setCurrentIndex(newIndex)
  }
  // 切右
  const switchRight = () => {
    if (currentIndex >= length) return
    const newIndex = currentIndex + 1
    setCurrentIndex(newIndex)
  }
  // 渲染info
  const renderInfo = (info: Array<any> | string) => {
    if (Array.isArray(info)) {
      return info.map((item: itemStyle, index) => {
        if (item.type) {
          return (
            <div className={item.type} key={index}>
              {item.text}
            </div>
          )
        } else {
          return (
            <li key={index} style={item.style}>
              {item.text}
            </li>
          )
        }
      })
    } else {
      return info
    }
  }
  return (
    <div className="app-contanier event">
      <div className="content">
        <div className="content-left">
          <div className="title">{events[currentIndex].title}</div>
          <div className="info">{renderInfo(events[currentIndex].info)}</div>
          <div className="switch-btn">
            <div className="left" onClick={switchLeft}>
              {currentIndex === 0 ? (
                <SvgIcon name="switch-left" iconStyle={{ width: '34px', height: '34px' }}></SvgIcon>
              ) : (
                <SvgIcon
                  name="switch-left2"
                  iconStyle={{ width: '34px', height: '34px' }}
                ></SvgIcon>
              )}
            </div>
            <div className="rigth" onClick={switchRight}>
              {currentIndex === length ? (
                <SvgIcon
                  name="switch-right2"
                  iconStyle={{ width: '34px', height: '34px' }}
                ></SvgIcon>
              ) : (
                <SvgIcon
                  name="switch-right"
                  iconStyle={{ width: '34px', height: '34px' }}
                ></SvgIcon>
              )}
            </div>
          </div>
        </div>
        <div className="content-right">
          <div className="images">
            <div className="image-items">
              <div className="img-box">
                <img src={events[currentIndex].src[0]} />
              </div>
              <div className="img-avt">
                <div className="avt">
                  <img src="src/assets/images/header/avt.png" alt="" />
                </div>
                <div className="img-tips">
                  <div className="tips">
                    Jeer Club holder have free<br></br>admission to Jeer Girl.
                  </div>
                  <div className="jeer-club">@Jeerclub</div>
                </div>
              </div>
              <div className="more">Learn More</div>
            </div>
            <div className="image-items">
              <div className="img-box">
                <img src={events[currentIndex].src[1]} />
              </div>
            </div>
            <div className="image-items">
              <div className="img-box">
                <img src={events[currentIndex].src[2]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event
