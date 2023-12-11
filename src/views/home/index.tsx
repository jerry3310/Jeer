import BigLogo from './components/bLogo'
import ViewList from './components/scView'
import './index.scss'

export default function Home() {
  return (
    <div className="app-contanier">
      <BigLogo />
      <ViewList />
    </div>
  )
}
