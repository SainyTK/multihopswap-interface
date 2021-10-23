import { parseUnits } from '@ethersproject/units'
import { formatUnits } from 'ethers/lib/utils'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { getAddressList } from '../constants/addressList'
import { getTokenList } from '../constants/tokens'
import { Quoter__factory } from '../typechain'
import { TokenType } from '../types/TokenType'
import { encodePath } from '../utils/encoder'
import { ethereum, getSigner } from '../utils/getProvider'
import ConfirmBtn from './ConfirmBtn'
import InputAmount from './InputAmount'
import InputRoute from './InputRoute'

type PropsType = {
    route: TokenType[],
    fees: number[],
    inputToken: TokenType,
    inputAmount: string,
    onChangeInputAmount: (input: string) => void,
    onChangeInputToken: (token: TokenType) => void,
    onChangeRoute: (route: TokenType[]) => void,
    onChangeFees: (fees: number[]) => void
}

const SwapPanel: React.FC<PropsType> = ({ route, fees, inputAmount, inputToken, onChangeInputAmount, onChangeInputToken, onChangeRoute, onChangeFees }) => {

    const [output, setOutput] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState("");

    useEffect(() => {
        getSwapOutput()
    }, [route, fees, inputAmount, inputToken]);

    const getSwapOutput = async () => {
        const eth = ethereum();
        const signer = getSigner();
        if (+inputAmount === 0) {
            setOutput(0);
            setErr("");
        } else if (eth && signer && route.length && +inputAmount > 0) {
            setLoading(true);

            const networkID = +eth.networkVersion;
            const addressList = getAddressList(networkID);
            const tokenList = getTokenList(networkID);
            const quoter = await Quoter__factory.connect(addressList.SWAP_V3_QUOTER, signer);
            const WETH = tokenList["WETH"];

            const formattedRoute = [inputToken, ...route].map((token) => token.symbol === "ETH" ? WETH : token);
            const formattedFees = fees.map((fee) => fee * (10 ** 4));

            const pathInBytes = encodePath(formattedRoute, formattedFees);
            const parsedInput = parseUnits(inputAmount.toString(), formattedRoute[0].decimals);

            try {
                const amountOut = await quoter.callStatic.quoteExactInput(pathInBytes, parsedInput);
                setOutput(+formatUnits(amountOut, formattedRoute[formattedRoute.length - 1].decimals));
                setErr("");
            } catch (e) {
                setOutput(0);
                setErr("Invalid route");
            }

            setLoading(false);
        }

    }

    return (
        <div className="rounded-3xl shadow-xl p-2 w-72 sm:w-6/12 md:w-5/12 lg:w-4/12 bg-white">
            <div className="mb-2 p-2">Swap</div>

            <InputAmount
                inputAmount={inputAmount}
                inputToken={inputToken}
                onChangeInput={onChangeInputAmount}
                onChangeToken={onChangeInputToken}
            />

            <InputRoute
                inputToken={inputToken}
                route={route}
                fees={fees}
                output={output}
                onChangeRoute={onChangeRoute}
                onChangeFees={onChangeFees}
            />

            <ConfirmBtn
                inputToken={inputToken}
                inputAmount={+inputAmount}
                route={route}
                fees={fees}
                loadingOutput={loading}
                fetchError={err}
            />

        </div>
    )
}

export default SwapPanel
