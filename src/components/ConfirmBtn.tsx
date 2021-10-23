import { formatUnits, parseUnits } from '@ethersproject/units';
import { constants } from 'ethers';
import React, { useEffect, useState } from 'react'
import { getAddressList } from '../constants/addressList';
import { getBlockExplorerUrl } from '../constants/explorer';
import { getTokenList } from '../constants/tokens';
import { useStore } from '../store';
import { ERC20__factory, SwapRouter__factory } from '../typechain';
import { TokenType } from '../types/TokenType'
import { encodePath } from '../utils/encoder';
import { ethereum, getSigner } from '../utils/getProvider';
import time from '../utils/time';

type PropsType = {
    inputToken: TokenType,
    inputAmount: number,
    route: TokenType[],
    fees: number[],
    fetchError: string,
    loadingOutput: boolean
}

const ConfirmBtn: React.FC<PropsType> = ({ inputToken, inputAmount, route, fees, fetchError, loadingOutput }) => {

    const [loading, setLoading] = useState(true);
    const [approving, setApproving] = useState(false);
    const [trading, setTrading] = useState(false);

    const balances = useStore(state => state.balances);
    const allowances = useStore(state => state.allowances);
    const setAllowances = useStore(state => state.setAllowances);
    const setBalances = useStore(state => state.setBalances);

    const pushNotification = useStore(state => state.pushNotification);

    const isRouteEmpty = route.length === 0;
    const isApproved = inputToken.symbol === "ETH" || allowances[inputToken.symbol] > 0;
    const isNotEntered = inputAmount === 0;
    const isSufficientBalance = balances[inputToken.symbol] >= inputAmount;

    useEffect(() => {
        loadData();
    }, [inputToken, inputAmount]);

    const loadData = async () => {
        setLoading(true);
        await loadAllowances();
        setLoading(false);
    }

    const loadAllowances = async () => {
        if (allowances[inputToken.symbol]) return;

        const signer = getSigner();

        if (signer && inputToken.address) {
            const walletAddress = await signer.getAddress();
            const networkID = await signer.getChainId();
            const addressList = getAddressList(networkID);


            const erc20 = ERC20__factory.connect(inputToken.address, signer);
            const allowance = await erc20.allowance(walletAddress, addressList.SWAP_V3_ROUTER);
            setAllowances({ [inputToken.symbol]: +formatUnits(allowance, inputToken.decimals) })
        }
    }

    const loadBalances = async () => {
        if (balances[inputToken.symbol]) return;

        const signer = getSigner();

        if (signer && inputToken.address) {
            const walletAddress = await signer.getAddress();
            const erc20 = ERC20__factory.connect(inputToken.address, signer);
            const balance = await erc20.balanceOf(walletAddress);
            setBalances({ [inputToken.symbol]: +formatUnits(balance, inputToken.decimals) })
        }
    }

    const approveToken = async () => {
        const signer = getSigner();

        if (signer && inputToken.address) {
            setApproving(true);
            try {
                const networkID = await signer.getChainId();
                const addressList = getAddressList(networkID);

                const erc20 = ERC20__factory.connect(inputToken.address, signer);
                const tx = await erc20.approve(addressList.SWAP_V3_ROUTER, constants.MaxUint256);
                await tx.wait();

                loadAllowances();
                const blockExplorerUrl = getBlockExplorerUrl(networkID);
                pushNotification({ type: "success", message: `Approved ${inputToken.symbol}`, link: `${blockExplorerUrl}/tx/${tx.hash}` })
            } catch (e) {
                if ((e as any).code !== 4001)
                    pushNotification({ type: "error", message: `Approve ${inputToken.symbol} failed` });
            }
            setApproving(false);
        }
    }

    const swap = async () => {
        const eth = ethereum();
        const signer = getSigner();
        if (eth && signer && route.length && +inputAmount > 0) {
            setTrading(true);

            const walletAddress = await signer.getAddress();
            const networkID = +eth.networkVersion;
            const addressList = getAddressList(networkID);
            const tokenList = getTokenList(networkID);
            const swapRouter = SwapRouter__factory.connect(addressList.SWAP_V3_ROUTER, signer);

            const WETH = tokenList["WETH"];

            const formattedRoute = [inputToken, ...route].map((token) => token.symbol === "ETH" ? WETH : token);
            const formattedFees = fees.map((fee) => fee * (10 ** 4));

            const pathInBytes = encodePath(formattedRoute, formattedFees);
            const parsedInput = parseUnits(inputAmount.toString(), formattedRoute[0].decimals);

            const params = {
                path: pathInBytes,
                recipient: walletAddress,
                deadline: time.now() + time.duration.minutes(20),
                amountIn: parsedInput,
                amountOutMinimum: 0
            }

            const isETH = inputToken.symbol === 'WETH' || 'ETH';

            try {
                const tx = await swapRouter.exactInput(params, { value: isETH ? parsedInput : undefined });
                await tx.wait();
                loadBalances();

                const blockExplorerUrl = getBlockExplorerUrl(networkID);
                pushNotification({ type: "success", message: `Trade success`, link: `${blockExplorerUrl}/tx/${tx.hash}` })
            } catch (e) {
                if ((e as any).code !== 4001)
                    pushNotification({ type: "error", message: `Trade failed` })
            }

            setTrading(false);
        }

    }

    const handleClick = () => {
        if (!isApproved) return approveToken();
        return swap();
    }

    const shouldDisabled = () => {
        if (loading || approving || trading || !!fetchError) return true;
        if (!isApproved) return false;
        return isRouteEmpty || isNotEntered || !isSufficientBalance;
    }

    const displayText = () => {
        if (loading || loadingOutput) return "Loading...";
        if (approving) return "Approving...";
        if (trading) return "Trading...";
        if (fetchError) return fetchError;
        
        if (!isApproved) return "Approve";

        if (isNotEntered) return "Enter an amount";
        if (!isSufficientBalance) return "Insufficient balance";
        if (isRouteEmpty) return "Please specify swap route";
        return "Swap"
    }

    return (
        <button className="
                w-full p-4 text-xl rounded-3xl text-white text-center bg-blue-400 hover:bg-blue-500 
                disabled:bg-gray-100 disabled:text-gray-500  disabled:cursor-not-allowed
            "
            disabled={shouldDisabled()}
            onClick={handleClick}
        >
            {displayText()}
        </button>
    )
}

export default ConfirmBtn
