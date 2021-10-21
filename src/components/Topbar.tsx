import React from 'react'
import Logo from './Logo'
import Wallet from './Wallet'

const Topbar = () => {
    return (
        <div className='flex justify-between'>
            <Logo/>
            <Wallet />
        </div>
    )
}

export default Topbar
