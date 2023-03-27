import { useState, useEffect } from 'react';
import { BigNumber, ContractReceipt } from 'ethers';
import { Box, Typography } from '@mui/material';

import { formatColor, neutral } from '~/theme';
import { ModalType, useModalContext } from '../libs/modal-content-provider/ModalContentProvider';
import { BaseModal } from './BaseModal';
import { useLight } from '~/hooks/useLight';
import { DisableableModalButton } from '../button/DisableableModalButton';
import { useWeb3Context } from '../libs/web3-data-provider/Web3Provider';
import { locale } from '~/utils/locale';
import { depositCollateral } from '~/contracts/Vault';
import { hasTokenAllowance } from '~/contracts/misc/hasAllowance';
import { useRolodexContext } from '~/components/libs/rolodex-data-provider/RolodexDataProvider';
import { getAllowance } from '~/contracts/ERC20/getAllowance';
import { approveCollateral } from '~/contracts/ERC20/approveCollateral';
import { useAppSelector } from '~/hooks/store';

export const DepositCollateralConfirmationModal = () => {
  const {
    type,
    setType,
    collateralToken,
    collateralDepositAmount,
    updateTransactionState,
    setCollateralDepositAmount,
    collateralDepositAmountMax,
    setCollateralDepositAmountMax,
  } = useModalContext();
  const { provider, currentAccount, currentSigner } = useWeb3Context();
  const [loading, setLoading] = useState(false);
  const [loadmsg, setLoadmsg] = useState('');
  const { vaultAddress } = useAppSelector((state) => state.VC.userVault);
  const [hasAllowance, setHasAllowance] = useState(false);
  const rolodex = useRolodexContext();
  const [hasCollateralAllowance, setHasCollateralAllowance] = useState(false);
  const [allowance, setAllowance] = useState<string>('0');

  const amount = collateralDepositAmountMax ? collateralToken.wallet_amount : collateralDepositAmount;

  useEffect(() => {
    if (rolodex && type === 'DEPOSIT_COLLATERAL_CONFIRMATION') {
      getAllowance(currentAccount, vaultAddress!, collateralToken.address, rolodex.provider).then(
        (res: { num: number; str: string; bn: BigNumber }) => {
          if (res.num >= Number.parseFloat(collateralDepositAmount)) {
            setHasCollateralAllowance(true);
          } else {
            setHasCollateralAllowance(false);
          }
          setAllowance(res.str);
        },
      );
    }
  }, [type, allowance, hasCollateralAllowance]);

  useEffect(() => {
    if (collateralToken.capped_address && amount) {
      hasTokenAllowance(
        currentAccount,
        collateralToken.capped_address,
        amount,
        collateralToken.address,
        collateralToken.decimals,
        currentSigner!,
      ).then(setHasAllowance);
    }
  }, [amount]);

  const handleDepositConfirmationRequest = async () => {
    try {
      const attempt = await depositCollateral(
        amount!,
        collateralToken.address,
        provider?.getSigner(currentAccount),
        vaultAddress!,
      );
      updateTransactionState(attempt!);

      setLoadmsg(locale('TransactionPending'));
      const receipt = await attempt!.wait();

      setCollateralDepositAmount('');
      setCollateralDepositAmountMax(false);

      updateTransactionState(receipt);
    } catch (err) {
      const error = err as ContractReceipt;

      updateTransactionState(error);
    }

    setLoadmsg('');
    setLoading(false);
  };

  const handleAllowance = async () => {
    setLoading(true);
    setLoadmsg(locale('CheckWallet'));
    try {
      if (amount) {
        const attempt = await approveCollateral(
          amount,
          collateralToken.address,
          provider?.getSigner(currentAccount),
          vaultAddress!,
        );

        await attempt!.wait();
        setHasCollateralAllowance(true);
        setAllowance(amount.toString());
      }
    } catch (err) {
      const error = err as ContractReceipt;
      updateTransactionState(error);
    }

    setLoadmsg('');
    setLoading(false);
  };

  const isLight = useLight();

  return (
    <BaseModal
      open={type === ModalType.DepositCollateralConfirmation}
      setOpen={() => {
        setType(ModalType.DepositCollateral);
      }}
    >
      <Typography variant='body1' color={isLight ? formatColor(neutral.gray1) : formatColor(neutral.white)}>
        Confirm Deposit
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
          mt: 3,
          py: 2,
          borderRadius: '10px',
          columnGap: 4,
          backgroundColor: isLight ? formatColor(neutral.gray5) : formatColor(neutral.gray7),
        }}
      >
        <Box display='flex' alignItems='center'>
          <Box
            component='img'
            width={36}
            height={36}
            src={`images/${collateralToken.ticker}.svg`}
            alt={collateralToken.ticker}
            marginRight={3}
          ></Box>
          <Box>
            <Typography variant='body3' color='text.primary'>
              ${(collateralToken.price * Number(collateralDepositAmount)).toFixed(2)} ({collateralDepositAmount}{' '}
              {collateralToken.ticker})
            </Typography>
          </Box>
        </Box>
      </Box>

      <DisableableModalButton
        text={
          !collateralToken.capped_token ||
          (collateralToken.capped_token && collateralToken.capped_address) ||
          hasAllowance
            ? hasCollateralAllowance
              ? 'Confirm Deposit'
              : 'Approve'
            : 'Set Allowance'
        }
        disabled={false}
        onClick={() => {
          hasCollateralAllowance ? handleDepositConfirmationRequest() : handleAllowance();
        }}
        loading={loading}
        load_text={loadmsg}
      />
    </BaseModal>
  );
};