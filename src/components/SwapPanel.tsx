import React, { useState } from 'react'
import useVisibility from '../hooks/useVisibility'
import { TokenType } from '../types/TokenType'
import AddToken from './AddToken'
import AddTokenModal from './AddTokenModal'
import InputAmount from './InputAmount'
import Modal from './Modal'
import SelectInputModal from './SelectInputModal'
import Token from './Token'

type PropsType = {
    route: TokenType[],
    fees: number[],
    inputToken: TokenType,
    inputAmount: number,
    onChangeInputAmount: (input: number) => void,
    onChangeInputToken: (token: TokenType) => void,
    onChangeRoute: (route: TokenType[]) => void,
    onChangeFees: (fees: number[]) => void
}

const SwapPanel: React.FC<PropsType> = ({ route, fees, inputAmount, inputToken, onChangeInputAmount, onChangeInputToken, onChangeRoute, onChangeFees }) => {

    const addTokenModal = useVisibility();

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleUpdateRoute = (token: TokenType) => {
        if (!!onChangeRoute) {
            route[selectedIndex] = token;
            onChangeRoute && onChangeRoute([...route])
        }
        addTokenModal.hide();
    }

    const handleUpdateFees = (fee: number) => {
        if (!!onChangeFees) {
            fees[selectedIndex] = fee;
            onChangeFees && onChangeFees([...fees])
        }
    }

    const handleAddToken = (index: number) => {
        setSelectedIndex(index);
        addTokenModal.show();
    }

    const handleCutRoute = (index: number) => {
        onChangeRoute && onChangeRoute(route.filter((t, id) => id !== index));
        onChangeFees && onChangeFees(fees.filter((f, id) => id !== index));
    }


    return (
        <div className="rounded-3xl shadow-xl p-2 w-4/12 bg-white">
            <div className="mb-2 p-2">Swap</div>

            <InputAmount
                inputAmount={inputAmount}
                inputToken={inputToken}
                onChangeInput={onChangeInputAmount}
                onChangeToken={onChangeInputToken}
            />

            <div className='p-4 rounded-2xl border border-gray-200 hover:border-gray-300 bg-gray-50 mb-2'>
                <div className="flex flex-wrap items-center space-x-1">
                    <Token className="mb-6" token={inputToken} size="sm" />
                    <div onClick={() => handleCutRoute(0)} className={`pb-6 text-gray-400 ${route.length > 0 && `cursor-pointer`}`}> - </div>
                    {
                        route.map((token, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <div className="mb-2">
                                    <Token className="mb-1" token={token} size="sm" onClick={() => handleAddToken(index)} />
                                    <div className='text-xs font-light text-center'>{fees[index]}%</div>
                                </div>
                                <div onClick={() => handleCutRoute(index + 1)} className={`pb-6 text-gray-400 ${index < route.length - 1 && `cursor-pointer`}`}> - </div>
                            </div>
                        ))
                    }
                    <AddToken className="mb-6" onClick={() => handleAddToken(route.length)} />
                </div>
                <div className='text-right'>
                    {
                        route.length > 0 && (
                            <span className="text-xl">{0} {route[route.length - 1].symbol} </span>
                        )
                    }
                </div>
            </div>

            <AddTokenModal
                visible={addTokenModal.visible}
                onClose={addTokenModal.hide}
                selectedFee={fees[selectedIndex]}
                selectedToken={route[selectedIndex]}
                onSelectToken={handleUpdateRoute}
                onSelectFee={handleUpdateFees}
            />

        </div>
    )
}

export default SwapPanel
