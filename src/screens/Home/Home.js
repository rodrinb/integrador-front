import Navbar from "../../components/Navbar/Navbar";  

import homeStyle from "./home.module.css";
const Home = () => {
  return (
    <div className={homeStyle.Home}>
      <Navbar />
      <div className={homeStyle.containerHome}>
        <div className={homeStyle.homeLeft}>
          <div className={homeStyle.text}>
            <h1>Ampersand NeuroVision, el futuro de la tecnología</h1>
            <p>
              Somos una empresa líder en la fabricación de lentes de contacto
              especializados para la proyección de imágenes. Nos impulsa la
              innovación y el amor a la tecnología, por y para que las personas
              vean y experimenten un mundo diferente.
            </p>
          </div>
        </div>
        <div className={homeStyle.homeRight}></div>
      </div>
    </div>
  );
};

export default Home;
