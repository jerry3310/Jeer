import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from '@/store'
import Sidebar from '../layout/sidebar'
import Header from '../layout/header'
import Footer from './footer'
import './index.scss'

export default function AppMian() {
  const [state] = useContext<any>(Layout.Context)
  console.log('state', state)
  const { sidebar, footer } = state
  return (
    <div className="app">
      <div className="app-main">
        {sidebar && <Sidebar />}
        <Header showSidebar={sidebar} />
        {/* 显示子路由 */}
        <Outlet />
        {footer && <Footer />}
      </div>
    </div>
  )
}
