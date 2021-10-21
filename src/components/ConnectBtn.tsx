import React from 'react'

type PropsType = {
    className?: string,
    onClick?: () => void
}

const ConnectBtn: React.FC<PropsType> = (props) => {
    return (
        <button 
            {...props} 
            className='
                py-2 px-4 rounded-xl
                text-blue-500 bg-blue-100 border transition duration-75
                hover:text-blue-600 hover:border-blue-400
            '
        >
            Connect to a wallet
        </button>
    )
}

export default ConnectBtn
