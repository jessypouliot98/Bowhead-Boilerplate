import React from 'react'

export type FooterProps = {
    className?: string,
}

const Footer: React.FC<FooterProps> = ({ className }) => (
    <footer className={['bg-black text-white p-5', className].join(' ')}>
        <small>Copyright</small>
    </footer>
);

export default Footer
