import { PortisAdapter } from '@shapeshiftoss/hdwallet-portis'
import { PortisIcon } from 'components/Icons/PortisIcon'
import { SupportedWalletInfo } from 'context/WalletProvider/config'

export const PortisConfig: Omit<SupportedWalletInfo, 'routes'> = {
  adapter: PortisAdapter,
  supportsMobile: 'both',
  icon: PortisIcon,
  name: 'Portis',
}
