import LogoImg from "../assets/logo.svg"
const Header = () => {
    return (
        <div className="header">
        <div className="logo">
        <img src={LogoImg} alt="logo"/>
      </div>
      <div className="nav">
        <p className="nav-item">HOME</p>
        <p className="nav-item">ABOUT</p>
        <p className="nav-item">STORE</p>
        <p className="nav-item">CONTACT</p>
      </div>
    </div>
    )
}
export default Header;