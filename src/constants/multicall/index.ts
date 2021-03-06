import { ChainId } from '../../sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441', // TODO
  [ChainId.BSCTESTNET]: '0x2cc8688c5f75e365aaeeb4ea8d6a480405a48d2a'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
