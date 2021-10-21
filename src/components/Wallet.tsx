import { formatEther } from '@ethersproject/units';
import React, { useEffect } from 'react'
import { useStore } from '../store';
import { decimals } from '../utils/decimals';
import { ethereum } from '../utils/getProvider';
import { shorten } from '../utils/shorten';
import ConnectBtn from './ConnectBtn';

const Wallet = () => {

    const address = useStore(state => state.address);
    const setAddress = useStore(state => state.setAddress);

    const balances = useStore(state => state.balances);
    const setBalances = useStore(state => state.setBalances);

    useEffect(() => {
        const eth = ethereum();
        if (eth) {
            handleConnect();
            eth.on('accountsChanged', handleConnect);
            eth.on('chainChanged', reload);

            return () => {
                eth.removeListener('accountsChanged', handleConnect);
                eth.removeListener('chainChanged', reload);
            }
        }
    }, []);

    const handleConnect = async () => {
        const eth = ethereum();
        if (eth) {
            const accounts = await eth.request({ method: 'eth_requestAccounts' });
            const balance = await eth.request({ method: 'eth_getBalance', params: [accounts[0]] })

            setAddress(accounts[0]);
            setBalances({ ...balances, "ETH": +formatEther(balance) });
        }
    }

    const reload = () => window.location.reload();

    return !address ? <ConnectBtn onClick={handleConnect} /> : (
        <div className='flex'>
            <div className='rounded-tl-2xl rounded-bl-2xl bg-gray-100 p-2 pr-6 -mr-4'>{decimals(balances['ETH'] || 0, 4, 4)} ETH</div>
            <div className='rounded-2xl bg-white p-2'>{shorten(address)}</div>
        </div>
    )
}

export default Wallet
