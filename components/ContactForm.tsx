/* eslint-disable no-nested-ternary */
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ChangeEventHandler, FC, FormEventHandler, useState,
} from 'react';
import { checkCompanyValid, createNewMeeting } from '../lib/firebase';
import { MeetingInfo } from '../lib/types';
import Spinner from './common/Spinner';

const ContactForm : FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [successSubmit, setSuccessSubmit] = useState<boolean>(false);
  const [errors, setErrors] = useState({
    names: null,
    email: null,
    phoneNumber: null,
    company: null,
    form: null,
  });
  const [formValues, setFormValues] = useState<MeetingInfo>({
    names: '',
    email: '',
    phoneNumber: '',
    company: '',
  });
  const handleSubmit : FormEventHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const isCompanyValid = await checkCompanyValid(formValues.company);
    const isPhoneValid = formValues.phoneNumber.match(new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/));
    if (isCompanyValid && isPhoneValid) {
      setErrors({
        ...errors,
        company: null,
      });
      try {
        setIsSubmitting(true);
        await createNewMeeting(formValues);
        setSuccessSubmit(true);
        setIsSubmitting(false);
      } catch (e) {
        setSuccessSubmit(false);
        setIsSubmitting(false);
        setErrors({
          ...errors,
          form: `Error al enviar el formulario: ${e.message}`,
        });
      }
    } else {
      setIsSubmitting(false);
      if (!isCompanyValid) {
        setErrors({
          ...errors,
          company: 'Tu empresa ya ha sido registrada, si deseas más información puedes comunicarte con nosotros a través de nuestro WhatsApp',
        });
      }
      if (!isPhoneValid) {
        setErrors({
          ...errors,
          phoneNumber: 'El número de teléfono ingresado no es válido',
        });
      }
    }
  };
  const handleInputChange : ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  return (isSubmitting)
    ? (
      <div className="schedule-meeting__contact">
        <Spinner />
      </div>
    )
    : (
      (successSubmit)
        ? (
          <div className="schedule-meeting__contact">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
        )
        : (
          <div className="schedule-meeting__contact">
            <form onSubmit={handleSubmit} className="schedule-meeting__form">
              <label htmlFor="names">
                Nombres y apellidos
                <input
                  required
                  onChange={handleInputChange}
                  className="schedule-meeting__input"
                  type="text"
                  name="names"
                  value={formValues.names}
                />
                { errors.names ? <div className="schedule-meeting__form-error">{errors.names}</div> : null }
              </label>
              <label htmlFor="email">
                Email
                <input
                  required
                  onChange={handleInputChange}
                  className="schedule-meeting__input--medium"
                  type="email"
                  name="email"
                  value={formValues.email}
                />
                { errors.email ? <div className="schedule-meeting__form-error">errors.email</div> : null }
              </label>
              <label htmlFor="phoneNumber">
                Celular
                <input
                  required
                  onChange={handleInputChange}
                  className="schedule-meeting__input--medium"
                  type="tel"
                  name="phoneNumber"
                  value={formValues.phoneNumber}
                />
                { errors.phoneNumber ? <div className="schedule-meeting__form-error">{errors.phoneNumber}</div> : null }
              </label>
              <label htmlFor="company">
                Empresa
                <input
                  required
                  onChange={handleInputChange}
                  className="schedule-meeting__input"
                  type="text"
                  name="company"
                  value={formValues.company}
                />
                { errors.company ? <div className="schedule-meeting__form-error">{errors.company}</div> : null }
              </label>
              { errors.form ? <div className="schedule-meeting__form-error--form">{errors.form}</div> : null }
              <button type="submit" disabled={isSubmitting} className="button schedule-meeting__button">
                Agendar una reunión aquí
              </button>
            </form>
          </div>
        )
    );
};

export default ContactForm;

/* match /{document=**} {
  allow read: if true;
  allow write: if request.auth != null;
} */
