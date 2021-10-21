import React from 'react'
import ArrowDown from './Icons/ArrowDown';

type PropsType = {
    className?: string,
    onClick?: () => void
}

const AddToken: React.FC<PropsType> = ({ className, onClick }) => {

    return (
        <div
            className={`
                rounded-2xl bg-white flex items-center p-2 drop-shadow-sm space-x-2
                shadow-sm text-sm
                ${onClick && `cursor-pointer hover:bg-gray-100`}
                ${className}
            `}
            onClick={onClick}
        >
            <div className="text-sm">Add token</div>
            {<ArrowDown />}
        </div>
    )
}

export default AddToken
