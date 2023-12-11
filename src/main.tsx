import 'virtual:svg-icons-register' // svg依赖
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { customWagmiConfig, chains } from './wagmiConfig'
import { WagmiConfig } from 'wagmi'
import App from './App.tsx'
import '@/style/index.scss'

// initialChain 1以太坊网络
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiConfig config={customWagmiConfig}>
      <RainbowKitProvider chains={chains} initialChain={1}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
)
