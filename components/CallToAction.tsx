import { FC } from 'react';

const CallToAction : FC = () => (
  <section className="callToAction">
    <div className="callToAction__content">
      <div className="callToAction__title">
        <h2>Basta de hablar de nosotros, hablemos de tu empresa y sus objetivos.</h2>
        <h2>¿Tienes claro por dónde empezar?</h2>
      </div>
      <div className="callToAction__links">
        <a className="button callToAction__link callToAction__link--blue appear_left" href="#marketing">Si, quiero ver las soluciones</a>
        <a className="button callToAction__link callToAction__link--violet appear_right" href="#primer-mapeo">Aún no, prefiero que me guíen</a>
      </div>
    </div>
  </section>
);

export default CallToAction;
