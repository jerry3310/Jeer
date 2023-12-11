import './index.scss'
import SvgIcon from '../svgIcon'
import { useEffect, useState, ReactNode, Children } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  visible: boolean // 控制显隐
  title?: string // 标题
  width?: string | number // 宽度
  top?: string // 距离顶部
  lockScroll?: string // 弹窗是锁住body滚动条
  customClass?: string // 自定义类名
  children?: ReactNode // 插槽
  close?: () => void | undefined // 关闭回掉
  open?: () => void | undefined // 打开回掉
}
const iconStyle = { width: '20px', height: '20px', cursor: 'pointer' }
const Dialog = (props: Props) => {
  const [parentNode, setParentNode] = useState<HTMLDivElement | null>()
  const {
    visible = false,
    title = '标题',
    width = 560,
    top = '15vh',
    lockScroll = true,
    customClass = '',
    children,
    close,
    open,
  } = props
  // 初始化
  useEffect(() => {
    const overlay = document.querySelector('.j-dialog-overlay') as HTMLDivElement
    // 存在先删除
    overlay && !visible && document.body.removeChild(overlay)
    setParentNode(() => null)
  }, [])

  //  visible变化时
  useEffect(() => {
    const oldOverlay = document.querySelector('.j-dialog-overlay')
    if (visible) {
      if (lockScroll) {
        document.body.setAttribute('style', 'overflow:hidden')
      }
      // 存在则打开
      if (oldOverlay) {
        oldOverlay.setAttribute('style', '')
        open && open()
        return
      }
      // 不存在则创建
      const newOverlay = document.createElement('div')
      newOverlay.setAttribute('class', 'j-dialog-overlay')
      document.body.appendChild(newOverlay)
      setParentNode(() => newOverlay)
    } else {
      handleClose()
    }
  }, [visible])
  const handleClose = () => {
    document.querySelector('.j-dialog-overlay')?.setAttribute('style', 'display:none')
    document.body.removeAttribute('style')
    close && close()
  }
  // 插槽
  const childrens = Children.toArray(children)
  let content, footer
  childrens.forEach((child: any) => {
    if (child.props.slot === 'content') {
      content = child
    }
    if (child.props.slot === 'footer') {
      footer = child
    }
  })
  return (
    <>
      {parentNode &&
        visible &&
        createPortal(
          <div
            className={`j-dialog ${customClass}`}
            style={{ width: `${width}px`, marginTop: top }}
          >
            <div className="j-dialog-header">
              <div className="title">{title}</div>
              <SvgIcon name="close" iconStyle={iconStyle} onClick={handleClose}></SvgIcon>
            </div>
            <div className="j-dialog-body">{content ? content : <div>body</div>}</div>
            <div className="j-dialog-footer">
              {footer ? (
                footer
              ) : (
                <div className="btn-group">
                  <div className="btn cancel" onClick={handleClose}>
                    取消
                  </div>
                  <div className="btn confirm">确定</div>
                </div>
              )}
            </div>
          </div>,
          parentNode
        )}
    </>
  )
}

export default Dialog
