import React from 'react'
import { Link } from 'react-router-dom'

export type ButtonProps = {
    type: 'default' | 'primary' | 'secondary' | 'dark' | 'light'
    className?: string,
    style?: React.CSSProperties,
    onClick?: (e: React.MouseEvent) => void,
    href?: string,
    link?: string,
}

const Button: React.FC<any> = ({ className, children, ...props }) => {
    const getTypeClass = () => {
        switch (props.type) {
            case 'primary':
                return 'bg-blue-500 hover:bg-blue-700';

            case 'secondary':
                return 'bg-orange-500 hover:bg-orange-700';

            default:
                return 'bg-blue-500 hover:bg-blue-700';
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

    console.log(props)

    return React.createElement(
        getElement(),
        {
            className: ['text-white font-bold py-2 px-4 rounded', getTypeClass(), props.className].join(' '),
            ...props
        },
        children,
    );
}

export default Button
