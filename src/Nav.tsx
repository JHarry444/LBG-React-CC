const Nav = ({children}) => {
    return (<nav className="navbar"> {children} </nav>)
}

Nav.Link = ({children, href}) => {
    return (
        <a className="nav-item" href={href}>{children}</a>
    );
}