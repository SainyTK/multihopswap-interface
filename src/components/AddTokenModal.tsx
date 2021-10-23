import React, { useEffect, useState } from 'react'
import { TokenType } from '../types/TokenType';
import Modal from './Modal'
import TokenList from './TokenList';

type PropsType = {
    visible: boolean,
    selectedToken?: TokenType,
    selectedFee?: number,
    onClose: () => void,
    onSelectToken: (token: TokenType) => void,
    onSelectFee: (fee: number) => void
}

const AddTokenModal: React.FC<PropsType> = ({ visible, selectedToken, selectedFee, onClose, onSelectToken, onSelectFee }) => {

    const [value, setValue] = useState('');

    useEffect(() => {
        if (!selectedFee) {
            onSelectFee && onSelectFee(0.3);
        }
    }, [selectedFee])

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    }

    const handleUpdateFee = (fee: number) => {
        onSelectFee && onSelectFee(fee);
    }

    return (
        <Modal
            visible={visible}
            onClose={onClose}
            title="Add token"
        >
            <div className="mb-4 px-4">
                <input
                    type="text"
                    onChange={handleChange}
                    value={value}
                    placeholder="Search name or parse address"
                    className='
                        px-3 py-3 rounded-2xl text-lg border border-gray-300 focus:border-blue-300 hover:border-blue-300
                        w-full font-light
                    '
                />
            </div>

            <div className="px-4 mb-2">
                <div className="mb-2">Fee pool</div>
                <div className="flex space-x-1">
                    {
                        [1, 0.3, 0.05].map((fee) => (
                            <div
                                key={fee}
                                onClick={() => handleUpdateFee(fee)}
                                className={`border rounded-xl p-2 cursor-pointer hover:bg-gray-100 ${selectedFee === fee && 'bg-gray-100'}`}
                            >
                                {fee} %
                            </div>
                        ))
                    }
                </div>
            </div>

            <div>
                <TokenList
                    search={value}
                    onSelect={onSelectToken}
                />
            </div>

        </Modal>
    )
}

export default AddTokenModal
