import './index.scss'
import { useState } from 'react'
import SvgIcon from '@/components/svgIcon'
const iconStyle = { width: '20px', height: '20px' }

interface Items {
  value: number
  label: string
}
export interface Props {
  options: Array<Items>
  change?: (value: string) => void
}
const Select = ({ options = [], change }: Props) => {
  const [active, setActive] = useState(false)
  const [valueIndex, setValueIndex] = useState(0)
  const handlerClick = () => {
    setActive(value => !value)
  }
  const select = (e: any) => {
    const value = e.target.children[0].value
    setValueIndex(value)
    setActive(value => !value)
  }

  const handChange = () => {
    change && change(options[valueIndex].label)
  }

  return (
    <div className="select">
      <div className="select-input">
        <SvgIcon name="user" iconStyle={iconStyle}></SvgIcon>
        <div className="input" onClick={handlerClick}>
          {options[valueIndex].label}
        </div>
        <input type="hidden" value={options[valueIndex].value} onChange={handChange} />
        <SvgIcon name={!active ? 'plus' : 'minus'} iconStyle={iconStyle}></SvgIcon>
      </div>
      <ul className={active ? 'select-list active' : 'select-list'} onClick={select}>
        {options.map((item: Items, index: number) => {
          return (
            <li className="select-items" key={item.value} value={item.value}>
              {item.label}
              <input type="hidden" value={index} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Select
