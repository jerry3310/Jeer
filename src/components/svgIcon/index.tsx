interface PropsData {
  className?: string // 类名
  name: string // svg 名称
  prefix?: string // 前缀
  iconStyle?: StyleType // styleText
  onClick?: () => void
}

interface StyleType {
  [key: string]: string
}
const SvgIcon = (props: PropsData) => {
  const {
    name,
    onClick,
    prefix = 'icon',
    iconStyle = { width: '80px', height: '80px' },
    className = '',
  } = props
  const symbolId = `#${prefix}-${name}`
  return (
    <svg aria-hidden="true" style={iconStyle} className={className} onClick={onClick}>
      <use href={symbolId} />
    </svg>
  )
}

export default SvgIcon
