export default {
  rpc: process.env.NODE_ENV === 'production' ? 
    'https://wallet.tomochain.com/api/luaswap/rpc' :
    'https://mainnet.infura.io/v3/d81b764e1175473ab36844831dc02fa0',
  chainId: 1,
  api: process.env.NODE_ENV === 'production' ? 
  'https://wallet.tomochain.com/api/luaswap' :
  'http://localhost:8020'
}