import React from 'react';
import Languages from './../languages/Languages';
import ContactForm from './../contact-form/ContactForm';
import Frameworks from './../frameworks/Frameworks';
import OrmOdmDB from './../orm-odm-db/OrmOdmDB';
import Environements from './../environements/Environements';

const APropos = props => {
  return (
    <div className="APropos">
      <h2>Mes Compétences</h2>
      <Languages />
      <Frameworks />
      <OrmOdmDB />
      <Environements />
      <ContactForm />
    </div>
  );
};

export default APropos;
