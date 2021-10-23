import { formatUnits } from '@ethersproject/units';
import React, { useEffect } from 'react';
import { ETH, getTokenList, TOKENS } from '../constants/tokens';
import { useStore } from '../store';
import { ERC20__factory } from '../typechain';
import { TokenType } from '../types/TokenType';
import { decimals } from '../utils/decimals';
import { ethereum, getSigner } from '../utils/getProvider';

const ADDRESS_LENGTH = 42;
const TOKEN_PLACEHOLDER = '/assets/coin-placeholder.png';

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
        const initialTokens = loadInitialTokens();
        Object.values(initialTokens).forEach((token) => {
            fetchTokenInfo(token.address)
        })
    }, []);

    useEffect(() => {
        if (search && search.length === ADDRESS_LENGTH) {
            fetchTokenInfo(search);
        }
    }, [search]);

    const loadInitialTokens = () => {
        const eth = ethereum();
        if (eth) {
            const networkID = +eth.networkVersion;
            const tokenList = getTokenList(networkID);
            const tokensStr = localStorage.getItem(`tokens:${networkID}`);
            const localTokens: Record<string, TokenType> = tokensStr ? JSON.parse(tokensStr) : {};
            console.log({ networkID, tokenList, localTokens });
            return { ...tokenList, ...localTokens }
        } else {
            return {}
        }
    }

    const handleImageError = (symbol: string) => {
        const eth = ethereum();
        if (eth) {
            const networkID = +eth.networkVersion;
            tokens[symbol].imageUrl = TOKEN_PLACEHOLDER;
            setTokens(networkID, { ...tokens });
        }
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

    const fetchTokenInfo = async (address: string) => {
        const signer = getSigner();
        const eth = ethereum();
        if (signer && eth && address) {
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
                const networkID = +eth.networkVersion;
                setTokens(networkID, { ...tokens, [symbol]: tokenInfo });
                setBalances({ ...balances, [symbol]: +formatUnits(tokenBalance, decimals) });
            } catch (e) {

            }
        }
    }

    const filteredTokens = tokenList.filter(filterToken);

    const renderToken = (token: TokenType, isLast = false) => {
        return (
            <div
                className={`flex items-center justify-between p-4 hover:bg-gray-100 cursor-pointer ${isLast && 'rounded-b-2xl'}`}
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
        )
    }

    return (
        <div>
            {renderToken(ETH)}
            {
                filteredTokens.map((token, index) => (
                    <div key={index}>
                        {renderToken(token, index === filteredTokens.length - 1)}
                    </div>
                ))
            }
        </div>
    )
}

export default TokenList
