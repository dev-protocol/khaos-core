import { verify } from 'jsonwebtoken'
import { tryCatch, always } from 'ramda'
import { PublicSignatureOptions } from '../../types'

export const recoverPublicSignature = (
	publicSignature: string,
	address: string
): PublicSignatureOptions | undefined =>
	tryCatch(
		(i: string, a: string) =>
			(({ i: id, m: message }) => ({
				id,
				message,
				address,
			}))(
				verify(i, a) as {
					readonly i: string
					readonly m: string
				}
			),
		always(undefined)
	)(publicSignature, address)
