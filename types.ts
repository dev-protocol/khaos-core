/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { Secret, verify, VerifyOptions } from 'jsonwebtoken'
import { Result } from '@ethersproject/abi'
import { ContractInterface } from 'ethers'
import { HttpRequest } from '@azure/functions'
import { PublicSignatureOptions } from './src/sign/publicSignature/publicSignature'

const _verify = (
	token: string,
	secretOrPublicKey: Secret,
	options?: VerifyOptions
) => verify(token, secretOrPublicKey, options)

export type JWTVerifyWithoutCallback = typeof _verify

export type NetworkName = 'mainnet' | 'ropsten'

export type QueryData = {
	readonly publicSignature: string
	readonly allData: Result
	readonly transactionhash: string
}

export type Abi = ContractInterface

export type FunctionAddresses = (net: NetworkName) => Promise<string>

export type FunctionAuthorizer = (props: {
	readonly message: string
	readonly secret: string
	readonly req: HttpRequest
}) => Promise<boolean>

export type FunctionOraclizeResults = {
	readonly message: string
	readonly status: number
	readonly statusMessage: string
}

export type FunctionOraclize = (
	signedOptions: PublicSignatureOptions,
	queryData: QueryData,
	net: NetworkName
) => Promise<FunctionOraclizeResults>
