import footerStyle from "./footer.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={footerStyle.Footer}>
      <div className={footerStyle.footerTop}>
        <h2>Ampersand NeuroVision</h2>
        <a href="tel:54911223344">
          <BsFillTelephoneFill />
          +54 9 11 2233-4444
        </a>
      </div>

      <p className={footerStyle.copyright}>
        Ampersand NV Copyright © 2023 - Comodoro Rivadavia, Chubut
      </p>
    </footer>
  );
};

export default Footer;
