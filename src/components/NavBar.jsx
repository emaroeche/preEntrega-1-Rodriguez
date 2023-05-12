import CartWidget from "./CartWidget";
import Logo from "./images/logo-la-salada.png"

const NavBar = () => {
    return (
        <div className="header">
        <div className="row">
        <div className="col-md-3 ">
            <a href="" > <img src={Logo} alt={"La Salada"} width={80} className="rounded" /> </a>
        </div>
        <div className="col-md-6 text-center nav">
            <ul className="nav justify-content-center ">
            <li className="nav-item mr">
                <a className="nav-link active text-light" aria-current="page" href="#">Productos</a>
            </li>
            <li className="nav-item mr ">
                <a className="nav-link text-light" href="#">Nosotros</a>
            </li>
            <li className="nav-item mr">
                <a className="nav-link text-light" href="#">Contacto</a>
            </li>
            </ul>
        </div>
        <div className="col-md-3 carrito text-end">
            <CartWidget />
        </div>
        </div>
    </div>
    
    )
}

export default NavBar;    
<div className="header"> 
<div className="row">
    <div className="col-md-4">
    </div>
    <div className="col-md-8 text-end" >
        <NavBar />
    </div>
</div>
</div>