const Navbar = ({projectName}) => {
    return (
        <nav className='navbar bg-dark fixed-top'>
            <div className='container-fluid'>
                <a className='navbar-brand' style={{color: 'white'}} href='/'>
                    {projectName}
                </a>
            </div>
        </nav>
    );
};

export default Navbar;