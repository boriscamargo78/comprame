import CartWidget from "./CartWidget"
import "./navbar.scss"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href=""><img src="/src/assets/logo_comprame.png" alt="" /></a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Accesorios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">juegos de mesa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">T-Shirts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">FAQ</a>
                        </li>
                        
                    </ul>
                    
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar
