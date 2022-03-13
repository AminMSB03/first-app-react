const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>WEBSITE LOGO</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    textDecoration:'none',
                    backgroundColor: 'greenDark'
                }}>new Blog</a>
            </div>
        </nav>
    );
}
export default Navbar;