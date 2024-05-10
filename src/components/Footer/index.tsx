import styles from './Footer.module.scss';

const { footer, footerText } = styles;

export const Footer = () => {
    return (
        <footer className={footer}>
            <p className={footerText}>MKS sistemas &copy; Todos os direitos reservados</p>
        </footer>
    )
}