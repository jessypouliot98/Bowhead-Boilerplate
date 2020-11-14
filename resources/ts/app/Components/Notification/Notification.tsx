import React, { useState } from 'react'

type HtmlContent = string | React.ReactElement;

export type NotificationProps = {
    icon?: HtmlContent,
    title?: HtmlContent,
    message?: HtmlContent,
    className?: string,
    duration?: number, // in milliseconds
    onDurationEnd?: () => void,
    onClose?: (e: React.MouseEvent) => void,
}

const Notification: React.FC<NotificationProps> = ({ icon, title, message, className, duration, onDurationEnd, onClose }) => {
    const [visible, setVisible] = useState(true);

    if (typeof duration === 'number') {
        setTimeout(() => {
            setVisible(false);

            if (typeof onDurationEnd === 'function') {
                onDurationEnd()
            }
        }, duration);
    }

    if (typeof onClose !== 'function') {
        onClose = () => setVisible(false);
    }

    return visible ? (
        <div className={['fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end', className].join(' ')}>

            <div className={'max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto'}>
                <div className={'rounded-lg shadow-xs overflow-hidden'}>
                    <div className={'p-4'}>
                        <div className={'flex items-start'}>

                            {icon && (
                                <div className={'flex-shrink-0'}>
                                    {icon}
                                </div>
                            )}

                            <div className={'ml-3 w-0 flex-1 pt-0.5'}>

                                {title && (
                                    <p className={'text-sm leading-5 font-medium text-gray-900'}>{title}</p>
                                )}

                                {message && (
                                    <p className={'mt-1 text-sm leading-5 text-gray-500'}>{message}</p>
                                )}

                            </div>

                            <div className={'ml-4 flex-shrink-0 flex'}>
                                <button
                                    className={'inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150'}
                                    onClick={onClose}
                                >
                                    <svg className={'h-5 w-5'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    ) : null;
}

export default Notification
