import { formatUnits, parseUnits } from '@ethersproject/units';
import React, { useEffect, useState } from 'react';
import { TOKENS } from '../constants/tokens';
import { useStore } from '../store';
import { ERC20__factory } from '../typechain';
import { TokenType } from '../types/TokenType';
import { decimals } from '../utils/decimals';
import { getSigner } from '../utils/getProvider';

const tokenPlaceholder = '/assets/coin-placeholder.png';

type PropsType = {
    search?: string,
    onSelect?: (token: TokenType) => void
}

const TokenList: React.FC<PropsType> = ({ search, onSelect }) => {

    const tokens = useStore(state => state.tokens);
    const setTokens = useStore(state => state.setTokens);

    const tokenList = Object.values(tokens);

    const balances = useStore(state => state.balances);
    const setBalances = useStore(state => state.setBalances);

    useEffect(() => {
        tokenList.forEach((token) => {
            fetchTokenInfo(token.address)
        })
    }, []);

    useEffect(() => {
        if (search && search.length === 42) {
            fetchTokenInfo(search);
        }
    }, [search]);

    const handleImageError = (symbol: string) => {
        tokens[symbol].imageUrl = tokenPlaceholder;
        setTokens({ ...tokens });
    }

    const handleSelect = (token: TokenType) => {
        onSelect && onSelect(token);
    }

    const filterToken = (token: TokenType) => {
        if (search) {
            const lSearch = search.toLowerCase();
            const lAddress = token.address.toLocaleLowerCase();
            const lSymbol = token.symbol.toLowerCase();
            return lAddress === lSearch || lSymbol.includes(lSearch)
        }
        return true;
    }

    const filteredTokens = tokenList.filter(filterToken);

    const fetchTokenInfo = async (address: string) => {
        const signer = getSigner();
        if (signer && address) {
            try {
                const erc20 = ERC20__factory.connect(address, signer);
                const walletAddress = await signer.getAddress();
                const [name, symbol, decimals, tokenBalance] = await Promise.all([
                    erc20.name(),
                    erc20.symbol(),
                    erc20.decimals(),
                    erc20.balanceOf(walletAddress)
                ]);
                const tokenInfo = { name, symbol, decimals, address, imageUrl: `/assets/${symbol}.png` };
                setTokens({ ...tokens, [symbol]: tokenInfo });
                setBalances({ ...balances, [symbol]: +formatUnits(tokenBalance, decimals) });
            } catch (e) {

            }
        }
    }

    return (
        <div>
            {
                filteredTokens.map((token, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-between p-4 hover:bg-gray-100 cursor-pointer ${index === filteredTokens.length - 1 && 'rounded-b-2xl'}`}
                        onClick={() => handleSelect(token)}
                    >
                        <div className="flex space-x-4 items-center">
                            <img
                                src={token.imageUrl}
                                alt="token"
                                onError={() => handleImageError(token.symbol)}
                                className='w-7 h-7 rounded-full shadow'
                            />
                            <div>
                                <div>{token.symbol}</div>
                                <div className="font-light text-sm text-gray-400">{token.name}</div>
                            </div>
                        </div>
                        <div>
                            {decimals(balances[token.symbol] || 0, 4, 4)}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TokenList
