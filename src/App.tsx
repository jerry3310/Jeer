import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useReducer } from 'react'
import { Layout } from './store'
import BeforeRouter from '@/components/beforeRouter'
import AppMian from './layout'
import Home from '@/views/home'
import Club from '@/views/club'
import Profile from '@/views/profile'
import About from '@/views/about'
import Event from '@/views/event'
import NoFund from './views/404'
import './App.scss'

function App() {
  const LayoutReducer = useReducer(Layout.reducer, Layout.state)
  const LayoutContext = Layout.Context
  return (
    <BrowserRouter>
      <LayoutContext.Provider value={LayoutReducer as any}>
        <BeforeRouter>
          <Routes>
            <Route path="/" element={<Navigate to="home" />} />
            <Route path="/" element={<AppMian />}>
              <Route path="home" element={<Home />} />
              <Route path="club" element={<Club />} />
              <Route path="profile" element={<Profile />} />
              <Route path="about" element={<About />} />
              <Route path="event" element={<Event />} />
            </Route>
            <Route path="*" element={<NoFund />}></Route>
          </Routes>
        </BeforeRouter>
      </LayoutContext.Provider>
    </BrowserRouter>
  )
}

export default App
