import Navbar from "../../components/Navbar/Navbar";

import aboutStyle from "./about.module.css";
const About = () => {
  return (
    <div className={aboutStyle.About}>
      <Navbar color={"black"} />
      <div className={aboutStyle.containerAbout}>
        <div className={aboutStyle.aboutTop}>
          <div className={aboutStyle.text}>
            <h1>Nuestra Vision</h1>

            <div className={aboutStyle.underline}></div>
            <p>
              Queremos ser reconocidos como la principal empresa en el campo de
              la tecnología de lentes de contacto para la proyección de imágenes
              a través de un implante cerebral.
            </p>
          </div>
        </div>
        <div className={aboutStyle.aboutBottom}>
          <div className={aboutStyle.imagePeople}></div>
          <div className={aboutStyle.text}>
            <h1>Mision</h1>
            <p>
              Permitir que las personas vivan experiencias visuales sin
              precedentes y mejorar su calidad de vida a través de nuestros
              lentes de contacto avanzados.
            </p>
          </div>
        </div>
        <div className={aboutStyle.aboutBottom}>
          <div className={aboutStyle.text}>
            <h1>Nuestro Producto</h1>
            <p>
              Fabricamos lentes de contacto personalizables que se integran a la
              perfección con un dispositivo de implante cerebral. Estos lentes
              de contacto de última generación proyectan imágenes directamente
              en la retina, permitiendo a los usuarios ver información digital
              en tiempo real sin la necesidad de pantallas externas.
            </p>
          </div>
          <div className={aboutStyle.imageProduct}></div>
        </div>
      </div>
    </div>
  );
};

export default About;
