function Footer() {
    return (
        <footer style={styles.footer}>
            <p>© 2025 EasyBook. Todos os direitos reservados.</p>
            <p>Contacte-nos: suporte@easybook.com</p>
        </footer>
    );
}

const styles = {
    footer: { textAlign: 'center', padding: '20px', backgroundColor: '#222', color: 'white', position: 'fixed', bottom: 0, width: '100%' }
};

export default Footer;
