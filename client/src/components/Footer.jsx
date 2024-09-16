const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #e0e0e0', padding: '20px', textAlign: 'left' }}>
            <nav aria-label="Footer Navigation">
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li>
                        <a
                            href="/privacy-policy"
                            style={{
                                fontSize: '14px',
                                color: '#333333',
                                textDecoration: 'none',
                                transition: 'color 0.3s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#b89aff'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#333333'}
                            aria-label="Privacy Policy"
                        >
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a
                            href="/terms-of-service"
                            style={{
                                fontSize: '14px',
                                color: '#333333',
                                textDecoration: 'none',
                                transition: 'color 0.3s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#b89aff'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#333333'}
                            aria-label="Terms of Service"
                        >
                            Terms of Service
                        </a>
                    </li>
                    <li>
                        <a
                            href="/contact"
                            style={{
                                fontSize: '14px',
                                color: '#333333',
                                textDecoration: 'none',
                                transition: 'color 0.3s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#b89aff'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#333333'}
                            aria-label="Contact Information"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <p style={{ fontSize: '14px', color: '#333333', marginTop: '10px' }}>
                © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
        </footer>
    );
};

// Responsive styles
const styles = `
@media (max-width: 768px) {
    nav ul {
        display: flex;
        flex-direction: column;
    }
}
`;
document.head.appendChild(document.createElement("style")).textContent = styles;

export default Footer;