import React from 'react'
import useOnClickOutside from '../hooks/useOnClickOutside';
import Close from './Icons/Close';

type Props = {
    visible: boolean,
    onClose: () => void,
    title?: string,
}

const Modal: React.FC<Props> = ({ title, visible, onClose, children }) => {

    const modelRef = useOnClickOutside(onClose)

    if (!visible) return null;

    const handleClose = () => {
        onClose && onClose();
    }

    return (
        <>
            <div
                className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="py-10 justify-center items-center flex flex-col">
                    <div className="w-4/12 bg-white rounded-2xl my-20" ref={ref => modelRef.current = ref}>
                        <div className="flex justify-between items-center p-4">
                            <div className="text-lg">{title}</div>
                            <Close onClick={handleClose} className="cursor-pointer" />
                        </div>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default Modal
