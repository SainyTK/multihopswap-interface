import React, { useState } from 'react'
import { TokenType } from '../types/TokenType';
import Modal from './Modal'
import TokenList from './TokenList';

type PropsType = {
    visible: boolean,
    onClose: () => void,
    onSelect: (token: TokenType) => void
}

const SelectInputModal: React.FC<PropsType> = ({ visible, onClose, onSelect }) => {

    const [value, setValue] = useState('');

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    }

    return (
        <Modal
            visible={visible}
            onClose={onClose}
            title="Select input token"
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

            <div>
                <TokenList 
                    search={value}
                    onSelect={onSelect}
                />
            </div>

        </Modal>
    )
}

export default SelectInputModal
