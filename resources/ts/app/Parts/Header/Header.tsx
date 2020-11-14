import React from 'react'
import Button from '../../Components/Button/Button'

export type HeaderProps = {
    className?: string,
}

const Header: React.FC<HeaderProps> = ({ className }) => (
    <header className={['py-5', className].join(' ')}>
        <nav>
            <ul>
                <li>
                    <Button to={'/exemple'}>
                        Exemple
                    </Button>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header
