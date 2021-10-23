import { formatEther, formatUnits } from '@ethersproject/units';
import React, { useEffect } from 'react'
import useVisibility from '../hooks/useVisibility';
import { useStore } from '../store';
import { ERC20__factory } from '../typechain';
import { TokenType } from '../types/TokenType';
import { decimals } from '../utils/decimals';
import { getSigner } from '../utils/getProvider';
import SelectInputModal from './SelectInputModal';
import Token from './Token';

type PropsType = {
    inputAmount: string,
    inputToken: TokenType,
    onChangeInput: (input: string) => void,
    onChangeToken: (token: TokenType) => void
}

const InputAmount: React.FC<PropsType> = ({ inputAmount, inputToken, onChangeInput, onChangeToken }) => {

    const selectInputModal = useVisibility();

    const address  = useStore(state => state.address);
    const balances = useStore(state => state.balances);
    const setBalances = useStore(state => state.setBalances);

    useEffect(() => {
        if (inputToken && address) {
            fetchBalance();
        }
    }, [inputToken, address]);

    const fetchBalance = async () => {
        const signer = getSigner();
        if (signer) {
            const walletAddress = await signer.getAddress();
            if (inputToken.symbol === "ETH") {
                const bal = await signer.provider.getBalance(walletAddress);
                setBalances({ "ETH": +formatEther(bal) });
            } else {
                const erc20 = ERC20__factory.connect(inputToken.address, signer);
                const [bal, decimals] = await Promise.all([erc20.balanceOf(walletAddress), erc20.decimals()]);
                setBalances({ [inputToken.symbol]: +formatUnits(bal, decimals) })
            }
        }
    }

    const handleChangeInputAmount: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (!isNaN(+e.target.value)) {
            onChangeInput && onChangeInput(e.target.value)
        }
    }

    const handleChangeToMax = () => {
        if (balances[inputToken.symbol]) {
            onChangeInput && onChangeInput(balances[inputToken.symbol].toString())
        }
    }

    const handleChangeInputToken = (token: TokenType) => {
        onChangeToken && onChangeToken(token);
        selectInputModal.hide();
    }

    return (
        <>
            <div className='p-4 rounded-2xl border border-gray-200 hover:border-gray-300 bg-gray-50 mb-2'>
                <div className="flex justify-between">
                    <div className="mb-3">
                        <Token token={inputToken} showArrow onClick={selectInputModal.show} />
                    </div>
                    <input
                        type="text"
                        value={inputAmount}
                        onChange={handleChangeInputAmount}
                        className='w-full border-none text-xl font-semibold bg-gray-50 focus:outline-none text-right'
                        placeholder="0.0"
                    />
                </div>
                <div>
                    <span className="text-sm font-light text-gray-600">Balance: {decimals(balances[inputToken.symbol] || 0, 4, 4)} {inputToken.symbol} </span>
                    <span className='cursor-pointer text-blue-400' onClick={handleChangeToMax}>(Max)</span>
                </div>
            </div>
            <SelectInputModal
                visible={selectInputModal.visible}
                onClose={selectInputModal.hide}
                onSelect={handleChangeInputToken}
            />
        </>
    )
}

export default InputAmount
