export interface ItemProps {
  num?: number
  style?: any
  class?: string
  img?: string
  imgStyle?: any
}
const Item = (item: ItemProps) => {
  return (
    <div style={item.style} className={item.class}>
      <img src={item.img} style={item.imgStyle} />
    </div>
  )
}

export default Item
