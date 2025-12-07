import "../style/navbar.css"

export default function Navbar(){
    return (<>
    <nav className="navbar_container">
        <div className="navbar_left">
            <span>AMIT</span>
            <span className="navbar_left_dot">.</span>
        </div>
        <div className="navbar_right">
            <span>WORK</span>
            <span>SERVICE</span>
            <span>CULTURE</span>
            <span>CONTACT</span>
        </div>
    </nav>
    
    </>)
}