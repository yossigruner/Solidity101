/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface HelloWorldInterface extends utils.Interface {
  functions: {
    "getHelloWorld()": FunctionFragment;
    "retrieve()": FunctionFragment;
    "store(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getHelloWorld" | "retrieve" | "store"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getHelloWorld",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "retrieve", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "store",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getHelloWorld",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "retrieve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "store", data: BytesLike): Result;

  events: {};
}

export interface HelloWorld extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HelloWorldInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getHelloWorld(overrides?: CallOverrides): Promise<[string]>;

    retrieve(overrides?: CallOverrides): Promise<[BigNumber]>;

    store(
      num: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getHelloWorld(overrides?: CallOverrides): Promise<string>;

  retrieve(overrides?: CallOverrides): Promise<BigNumber>;

  store(
    num: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getHelloWorld(overrides?: CallOverrides): Promise<string>;

    retrieve(overrides?: CallOverrides): Promise<BigNumber>;

    store(
      num: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getHelloWorld(overrides?: CallOverrides): Promise<BigNumber>;

    retrieve(overrides?: CallOverrides): Promise<BigNumber>;

    store(
      num: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getHelloWorld(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    retrieve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    store(
      num: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
