/**
 * 无缝滚动轮播图组件
 */
import { useEffect } from 'react'
import Item from './item'
import './index.scss'
interface Props {
  itemHeight: number
  showNum: number
  speed: number
  containerHeight: number
  data: Array<any>
  gap: number
  hoverStop?: boolean
  direction?: 'top' | 'bottom'
}
const fillArray = (arr: any[], length: number): any[] => {
  const result: any[] = []
  while (result.length < length) {
    result.push(...arr)
  }
  return result.concat(result)
}

function AutoplayCarousel({
  itemHeight, // 每个高度
  showNum, // 可是区显示个数
  speed, // 速度
  containerHeight, // 容器高度
  data, // 数据
  gap, // 间隔
  hoverStop = true, // hover停止
  direction = 'top', // 滚动方向
}: Props) {
  const showData = fillArray(data, showNum)
  useEffect(() => {
    // 创建一个新的样式表对象
    const style = document.createElement('style')
    // 定义样式表的内容
    let start = '0'
    let end = `-${data.length * (itemHeight + gap)}`
    if (direction === 'bottom') {
      style.innerText = `
            @keyframes down-moving {
                0% {
                transform: translateY(${end}px);
                }
                100% {
                transform: translateY(${start}px);
                }
            }
            `
    } else {
      style.innerText = `
            @keyframes top-moving {
                0% {
                transform: translateY(${start}px);
                }
                100% {
                transform: translateY(${end}px);
                }
            }
            `
    }

    if (hoverStop) {
      style.innerText += `.list:hover {
            /*鼠标经过后，动画暂停*/
                animation-play-state: paused !important;
            }`
    }
    // 将样式表插入到文档头部
    document.head.appendChild(style)

    // 组件卸载时清除样式表
    return () => document.head.removeChild(style) as any
  }, [])

  return (
    <div style={{ height: `${containerHeight}px`, width: '100%' }} className="wrap">
      <div
        className="list"
        style={{
          height: `${data.length * (itemHeight + gap)}px`,
          animation: `${direction === 'bottom' ? 'down-moving' : 'top-moving'} ${
            data.length / speed
          }s infinite linear`,
        }}
      >
        {showData.map((item, index) => (
          <div key={index}>
            <Item {...item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AutoplayCarousel
