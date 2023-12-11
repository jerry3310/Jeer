import { ReactNode, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Layout } from '@/store'

interface Props {
  children: ReactNode
}

const BeforeRouter = (props: Props) => {
  const { children } = props
  const location = useLocation()
  const path = location.pathname
  const [, dispatch] = useContext<any>(Layout.Context)
  useEffect(() => {
    switch (path) {
      case '/home':
      case '/event':
      case '/about': {
        dispatch({ type: 'sidebar', value: true })
        dispatch({ type: 'footer', value: false })
        break
      }
      case '/club':
      case '/profile': {
        dispatch({ type: 'sidebar', value: false })
        dispatch({ type: 'footer', value: true })
        break
      }
    }
  }, [location])
  return <>{children}</>
}

export default BeforeRouter
