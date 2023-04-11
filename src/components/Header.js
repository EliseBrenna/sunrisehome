import SunriseLogo from "../images/logo.png";

export const Header = () => {
  return (
    <div className="header">
      <img src={SunriseLogo} alt="logo" className="logo" />
      <div className="header-ingress">Investering i sol og varme på Spanias østkyst</div>
    </div>
  );
};
