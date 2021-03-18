import { FC } from 'react';
import Section, { GridType } from './common/Section';
import ContactForm from './ContactForm';

const ScheduleMeeting : FC = () => (
  <Section
    gridType={GridType.normal}
    className="schedule-meeting"
    firstColumn={(
      <div className="section__column">
        <div className="schedule-meeting__title appear_left">
          <h1>
            ¡Tu primer Mapeo
            {' '}
            <span>ES GRATIS!</span>
          </h1>
          <p>
            Tengamos una reunión virtual de consultoría para conocernos y conversar sobre los
            objetivos y retos de tu empresa
          </p>
        </div>
      </div>
      )}
    secondColumn={(
      <ContactForm />
      )}
    targetId="primer-mapeo"
  />
);

export default ScheduleMeeting;
