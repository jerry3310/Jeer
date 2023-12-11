import { useEffect, useState } from 'react'
import AutoplayCarousel from '@/components/carousel'
import { useNavigate } from 'react-router-dom'
import './index.scss'

const data = new Array(150).fill({}).map((item, index) => {
  item.num = index
  item.class = 'avatar-items'
  return item
})

const ViewList = () => {
  const [height, setHeight] = useState<number>(0)
  useEffect(() => {
    const clientHeight = document.querySelector('.scroll-view')?.clientHeight || 0
    console.log('clientHeight', clientHeight)
    setHeight(clientHeight)
  })

  // to Club
  const nav = useNavigate()
  const toClub = () => {
    nav('/club')
  }
  return (
    <div className="scroll-view">
      {height && (
        <>
          <div className="list-items">
            <AutoplayCarousel
              itemHeight={177}
              gap={18}
              containerHeight={height}
              showNum={5}
              speed={1}
              data={data}
            />
          </div>
          <div className="list-items">
            <AutoplayCarousel
              itemHeight={177}
              gap={18}
              containerHeight={height}
              showNum={5}
              speed={1}
              data={data}
              direction="bottom"
            />
          </div>
          <div className="list-items">
            <AutoplayCarousel
              itemHeight={177}
              gap={18}
              containerHeight={height}
              showNum={5}
              speed={1}
              data={data}
            />
          </div>
          {/* 遮罩层 */}
          <div className="top-layer"></div>
          <div className="bottom-layer"></div>
        </>
      )}
      <div className="enter-club">
        <div className="btn" onClick={toClub}>
          Enter Club
        </div>
      </div>
    </div>
  )
}

export default ViewList
