import React from 'react';

const styles = {
    header: {
        backgroundColor: '#294257',
    },
    navbarCollapse: {
        marginTop: 10,
    },
    h1: {
        marginLeft: 75,
        fontSize: 65,
        paddingBottom: 15,
    },
    navbarNav: {
        marginRight: 65,
    },
    a: {
        fontSize: 35,
        paddingBottom: 15,
        marginRight: 35,
    }
}
function Header () {
    return (
        <header className='header' style={styles.header}>
            <nav className="navbar navbar-expand-lg text-white">
            <div className="container-fluid">
              <div className = " navbar-collapse" style={styles.navbarCollapse} id="navbarText">

                <h1 className="navbar-nav me-auto" style={styles.h1}>Robert Pape</h1>
        
                <div id="navbarNavDropdown" style={styles.navbarNav}>
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                      <a className="nav-link active text-white" aria-current="page" href="#" style={styles.a}>About Me</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active text-white" aria-current="page" href="#" style={styles.a}>Portfolio</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active text-white" aria-current="page" href="#" style={styles.a}>Contact</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active text-white" aria-current="page" href="#" style={styles.a}>Resume</a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </nav>
        </header>
    )
}

export default Header;