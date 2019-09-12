import React from 'react';
import RealisationsLsdla from './../realisatioins-lsdla/RealisationsLsdla';
import RealisationsI2SI from './../realisations-i2si/RealisationsI2SI';
import ContactForm from './../contact-form/ContactForm';
import { Link } from 'react-router-dom';

const APropos = props => {
  return (
    <div>
      <h2>Mes Réalisations</h2>
      <RealisationsLsdla />
      <RealisationsI2SI />
      <div>
        <h3>Exemples de fonctionnalités</h3>
        <ul>
          <li>
            <Link to="/camera">Caméra/photo</Link>
          </li>
        </ul>
      </div>
      <ContactForm />
    </div>
  );
};

export default APropos;
