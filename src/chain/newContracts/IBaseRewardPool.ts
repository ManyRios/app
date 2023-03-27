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
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface IBaseRewardPoolInterface extends utils.Interface {
  functions: {
    'earned(address)': FunctionFragment;
    'extraRewards(uint256)': FunctionFragment;
    'extraRewardsLength()': FunctionFragment;
    'getReward(address,bool)': FunctionFragment;
    'queueNewRewards(uint256)': FunctionFragment;
    'rewardToken()': FunctionFragment;
    'stake(uint256)': FunctionFragment;
    'stakeFor(address,uint256)': FunctionFragment;
    'withdraw(uint256,bool)': FunctionFragment;
    'withdrawAndUnwrap(uint256,bool)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'earned'
      | 'extraRewards'
      | 'extraRewardsLength'
      | 'getReward'
      | 'queueNewRewards'
      | 'rewardToken'
      | 'stake'
      | 'stakeFor'
      | 'withdraw'
      | 'withdrawAndUnwrap',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'earned', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'extraRewards', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'extraRewardsLength', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getReward', values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
  encodeFunctionData(functionFragment: 'queueNewRewards', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'rewardToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'stake', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: 'stakeFor',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'withdraw',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>],
  ): string;
  encodeFunctionData(
    functionFragment: 'withdrawAndUnwrap',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>],
  ): string;

  decodeFunctionResult(functionFragment: 'earned', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'extraRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'extraRewardsLength', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'queueNewRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stake', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stakeFor', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdrawAndUnwrap', data: BytesLike): Result;

  events: {};
}

export interface IBaseRewardPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBaseRewardPoolInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    earned(_ad: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & { _reward: BigNumber }>;

    extraRewards(
      _position: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[string] & { _virtualReward: string }>;

    extraRewardsLength(overrides?: CallOverrides): Promise<[BigNumber] & { _extraRewardsLength: BigNumber }>;

    getReward(
      _account: PromiseOrValue<string>,
      _claimExtras: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    queueNewRewards(
      _rewards: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<[string] & { _rewardToken: string }>;

    stake(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    stakeFor(
      _for: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      _claim: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    withdrawAndUnwrap(
      _amount: PromiseOrValue<BigNumberish>,
      _claim: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  earned(_ad: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  extraRewards(_position: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  extraRewardsLength(overrides?: CallOverrides): Promise<BigNumber>;

  getReward(
    _account: PromiseOrValue<string>,
    _claimExtras: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  queueNewRewards(
    _rewards: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  stake(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  stakeFor(
    _for: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  withdraw(
    _amount: PromiseOrValue<BigNumberish>,
    _claim: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  withdrawAndUnwrap(
    _amount: PromiseOrValue<BigNumberish>,
    _claim: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    earned(_ad: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    extraRewards(_position: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    extraRewardsLength(overrides?: CallOverrides): Promise<BigNumber>;

    getReward(
      _account: PromiseOrValue<string>,
      _claimExtras: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    queueNewRewards(_rewards: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    stake(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;

    stakeFor(
      _for: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      _claim: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    withdrawAndUnwrap(
      _amount: PromiseOrValue<BigNumberish>,
      _claim: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    earned(_ad: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    extraRewards(_position: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    extraRewardsLength(overrides?: CallOverrides): Promise<BigNumber>;

    getReward(
      _account: PromiseOrValue<string>,
      _claimExtras: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    queueNewRewards(
      _rewards: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    stake(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    stakeFor(
      _for: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      _claim: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    withdrawAndUnwrap(
      _amount: PromiseOrValue<BigNumberish>,
      _claim: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    earned(_ad: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    extraRewards(_position: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    extraRewardsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getReward(
      _account: PromiseOrValue<string>,
      _claimExtras: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    queueNewRewards(
      _rewards: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stake(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    stakeFor(
      _for: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      _claim: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    withdrawAndUnwrap(
      _amount: PromiseOrValue<BigNumberish>,
      _claim: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}