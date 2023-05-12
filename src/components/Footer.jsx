import LogoIg from "./images/ig.png"
import LogoFb from "./images/fb.png"


const Footer = () => {
    return (
        <div  className="container-fluid footer text-center py-3" > 
            <div className="row">
                <div className="col ">
                <a target="_blank" href="https://es-la.facebook.com/Lasalada8/"> <img src={LogoFb} alt={"fb-la-salada"} width={80} className="rounded" /> </a>
                <a target="_blank" href="https://www.instagram.com/lasaladasolisdemataojo/?hl=es"> <img src={LogoIg} alt={"ig-la-salada"} width={80} className="rounded" /> </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;