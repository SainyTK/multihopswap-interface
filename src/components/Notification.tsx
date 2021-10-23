import React from 'react'
import { useStore } from '../store'
import CheckCircle from './Icons/CheckCircle'
import CrossCircle from './Icons/CrossCircle';

const Notification = () => {

    const notifications = useStore(state => state.notifications);

    return (
        <div className="fixed right-4 top-16">

            {
                notifications.map(noti => (
                    <div key={noti.id} className="w-72 rounded-xl bg-white py-4 px-4 flex items-center space-x-3 mb-4">
                        <div>
                            {noti.type === 'success' ? (
                                <CheckCircle className="w-7 h-7 text-green-400" />
                            ) : (
                                <CrossCircle className="w-7 h-7 text-red-500" />
                            )}
                        </div>
                        <div>
                            <p>{noti.message}</p>
                            {noti.link && <a href={noti.link} target="_blank" className="text-blue-400 hover:text-blue-500">View on Explorer</a>}
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Notification
