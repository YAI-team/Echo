import { EchoClient, type EchoClientInstance } from './client'
import { Echo, type EchoInstance } from './echo'

export * from './error'
export * from './types'

export { Echo, EchoClient, EchoClientInstance, EchoInstance }

const echo = new Echo()
export default echo
