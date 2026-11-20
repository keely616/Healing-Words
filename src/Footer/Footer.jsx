import "./Footer.css";

// Copyright line; the year updates automatically.
function Footer() {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Healing Words</p>
        </footer>
    );
}

export default Footer;