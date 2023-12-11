import { ConnectButton } from '@rainbow-me/rainbowkit'
import ConnectedBtn from './Connected'
import NotConnect from './NotConnect'
const CustomConnect = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading'
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated')
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              // 未链接
              if (!connected) {
                return (
                  <NotConnect handleOpen={openConnectModal}></NotConnect>
                  //如果没有连接钱包显示的内容
                )
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                )
              }
              return <ConnectedBtn account={account} openConnect={openAccountModal}></ConnectedBtn>
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}

export default CustomConnect
