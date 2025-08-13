// src/components/Footer.jsx
const Footer = ({ year = new Date().getFullYear() }) => {
    return (
        <footer className="bg-dark text-white-50 text-center py-3 mt-auto">
            <div className="container">
                <small>Copyright &copy; Julia Navío {year}</small>
            </div>
        </footer>
    );
};

export default Footer;
