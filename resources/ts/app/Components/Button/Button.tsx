import React from 'react'
import { Link } from 'react-router-dom'

export type ButtonProps = {
    type: 'default' | 'primary' | 'secondary' | 'dark' | 'light'
    className?: string,
    style?: React.CSSProperties,
    onClick?: (e: React.MouseEvent) => void,
    href?: string,
    link?: string,
    target?: '_blank',
}

const Button: React.FC<any> = ({ className, children, ...props }) => {
    const getTypeClass = () => {
        switch (props.type) {
            case 'primary':
                return 'bg-blue-500 hover:bg-blue-700 text-white';

            case 'secondary':
                return 'bg-orange-500 hover:bg-orange-700 text-white';

            default:
                return 'bg-blue-500 hover:bg-blue-700 text-white';
        }
    }

    const getElement = () => {
        if (props.to) {
            return Link;
        }
        if (props.href) {
            return 'a';
        }

        return 'button';
    }

    return React.createElement(
        getElement(),
        {
            className: ['py-2 px-4 py-2 inline-flex items-center justify-center font-bold rounded', getTypeClass(), props.className].join(' '),
            ...props
        },
        children,
    );
}

export default Button
