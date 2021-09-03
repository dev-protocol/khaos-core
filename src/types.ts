/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Context } from '@azure/functions'
import { Secret, verify, VerifyOptions } from 'jsonwebtoken'
import { Result } from '@ethersproject/abi'
import { HttpRequest } from '@azure/functions'
import { UndefinedOr } from '@devprotocol/util-ts'

const _verify = verify

export type JWTVerifyWithoutCallback = typeof _verify

export type NetworkName = 'mainnet' | 'ropsten'

export type QueryData = {
	readonly publicSignature?: string
	readonly allData: Result
	readonly transactionhash: string
}

export type Abi = readonly string[]

export type PublicSignatureOptions = {
	readonly message: string
	readonly id: string
	readonly address: string
}

export type FunctionAddressesOptions = {
	readonly network: NetworkName
	readonly context?: Context
}

export type FunctionAuthorizerOptions = {
	readonly message: string
	readonly secret: string
	readonly request: HttpRequest
}

export type FunctionOraclizerOptions = {
	readonly signatureOptions?: PublicSignatureOptions
	readonly query: QueryData
	readonly network: NetworkName
}

export type FunctionEventOptions = {
	readonly network: NetworkName
}

export type FunctionPackOptions = {
	readonly results: FunctionOraclizeResults
}

export type FunctionAddresses = (
	options: FunctionAddressesOptions
) => Promise<UndefinedOr<string>>

export type FunctionAuthorizer = (
	options: FunctionAuthorizerOptions
) => Promise<UndefinedOr<boolean>>

export type FunctionOraclizeResults = {
	readonly message: string
	readonly status: number
	readonly statusMessage: string
}

export type FunctionOraclizer = (
	options: FunctionOraclizerOptions
) => Promise<UndefinedOr<FunctionOraclizeResults>>

export type FunctionEvent = (
	options: FunctionEventOptions
) => Promise<UndefinedOr<string>>

export type FunctionPackResults = {
	readonly name: string
	readonly args: readonly (string | number)[]
}

export type FunctionPack = (
	options: FunctionPackOptions
) => Promise<UndefinedOr<FunctionPackResults>>

export type Functions = {
	readonly abi: Abi
	readonly addresses: FunctionAddresses
	readonly authorize: FunctionAuthorizer
	readonly oraclize: FunctionOraclizer
	readonly event: FunctionEvent
	readonly pack: FunctionPack
}
