import { useLocation } from 'react-router-dom'
import { lazy } from 'react'
const Contanier = () => {
  const location = useLocation()
  const Component = lazy(() => import(`../../views/${location.pathname}`))
  console.log(Component)
  return (
    <>
      <Component />
    </>
  )
}

export default Contanier
