import {Abi} from "@polkadot/api-contract";
import { AddressOrPair } from "@polkadot/api/types";
import { Signer } from '@polkadot/types/types';

export interface TypechainPlugin {
	name: string;
	outputDir: string;
	overrides ?: boolean
	generate: (
		abi: Abi,
		fileName: string,
		absPathToABIs: string,
		absPathToOutput: string
	) => void;
	beforeRun ?: (
		absPathToABIs: string,
		absPathToOutput: string
	) => void;
}