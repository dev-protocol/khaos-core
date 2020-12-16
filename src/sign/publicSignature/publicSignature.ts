import { sign } from 'jsonwebtoken'
import { PublicSignatureOptions } from '../../types'

export const publicSignature = ({
	id: i,
	message: m,
	address,
}: PublicSignatureOptions): string => sign(JSON.stringify({ i, m }), address)
