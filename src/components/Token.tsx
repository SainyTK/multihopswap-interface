import React, { useEffect, useState } from 'react'
import { TokenType } from '../types/TokenType';
import ArrowDown from './Icons/ArrowDown';

type PropsType = {
    token: TokenType,
    size?: 'sm' | 'md',
    showArrow?: boolean,
    className?: string,
    onClick?: () => void,
}

const placeHolder = '/assets/coin-placeholder.png';

const Token: React.FC<PropsType> = ({ token, size, showArrow, className, onClick }) => {

    const initialImage = token.imageUrl;
    const [tokenImg, setTokenImg] = useState(initialImage);

    useEffect(() => {
        setTokenImg(token.imageUrl);
    }, [token])

    const handleImageError = () => {
        setTokenImg(placeHolder);
    }

    return (
        <div
            onClick={onClick}
            className={`
                rounded-2xl bg-white flex items-center p-2 drop-shadow-sm space-x-2
                ${onClick && `cursor-pointer hover:bg-gray-100`}
                ${size === 'sm' ? `shadow-sm text-sm` : `shadow-md text-md`}
                ${className}
            `}
        >
            <img src={tokenImg} alt="token" className={`${size === 'sm' ? 'w-4' : 'w-6 h-6'}`} onError={handleImageError} />
            <div className={`${size === 'sm' ? `text-sm` : `text-md`}`}>{token.symbol}</div>
            {showArrow && <ArrowDown />}
        </div>
    )
}

export default Token
