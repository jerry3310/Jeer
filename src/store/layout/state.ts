export interface LayoutState {
  sidebar: boolean
  header: boolean
  footer: boolean
}

// 默认布局
const defaultLayout = {
  sidebar: true,
  header: true,
  footer: false,
}
// 读取缓存
const storage = window.localStorage.getItem('layout-state')
const layoutState = storage ? JSON.parse(storage) : defaultLayout
export const state = {
  sidebar: layoutState.sidebar,
  header: layoutState.header,
  footer: layoutState.footer,
}
