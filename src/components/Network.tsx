import React from 'react'
import { getNetworkName } from '../constants/networkName';
import { ethereum } from '../utils/getProvider'

const Network = () => {

    const eth = ethereum();

    if (!eth) return null;

    return (
        <div className='rounded-2xl bg-gray-100 px-3 py-2 items-center space-x-2 flex'>
            <img src="/assets/ETH.png" alt="ETH" className="w-6 h-6 rounded-full" />
            <div>
                {getNetworkName(+eth.networkVersion)}
            </div>
        </div>

    )
}

export default Network
