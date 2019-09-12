import React from 'react';

const RealisationsI2SI = props => {
  return (
    <div>
      <h3>
        2018 - 2019 :&nbsp;
        <a href="https://www.i2si.fr" target="_blank" rel="noopener noreferrer">
          I2SI
        </a>
      </h3>
      <p>
        <a href="https://www.i2si.fr" target="_blank" rel="noopener noreferrer">
          I2SI
        </a>{' '}
        crée des logiciels pour les courtiers, assureurs, et autres
        professionnels des métiers de la construction.
      </p>
      <p>
        J'ai travailler sur le projet CapData (développement, maintenance,
        assistance...), créé par&nbsp;
        <a href="https://www.i2si.fr" target="_blank" rel="noopener noreferrer">
          I2SI
        </a>
        .
      </p>
      <p>
        La réglementation des contrats de construction (CMI) étant très strict
        (loi-1990), CapData permet de faciliter et d'automatiser au maximum les
        processus :
      </p>
      <ul style={{listStyle: 'initial'}}>
        <li>Suivi des chantiers</li>
        <li>Délivrance des attestations</li>
        <li>
          Accès aux dossiers par les différents acteurs concernés (compagnies
          d'assurance, courtiers, partenaires, distributeurs, constructeurs,
          commerciaux...)
        </li>
        <li>
          Plusieurs passerelles (API) entre CapData et les IDE et logiciels des
          différents acteurs (compagnies, courtiers, constructeurs...)
          permettant plus d'automatisation
        </li>
        <li>
          Configuration très poussée (permissions, fonctionnalités, produits...)
        </li>
        <li>Gestion des signatures électroniques</li>
        <li>GED</li>
        <li>...</li>
      </ul>
      <h3>Technologies utilisées par dans ce projet</h3>
      <p>
        <a href="https://www.i2si.fr" target="_blank" rel="noopener noreferrer">
          I2SI
        </a>{' '}
        Développe principalement avec son propre framework (PHP, JS, SQL), créé
        et maintenu par son équipe de développeurs.
      </p>
      <p>
        Cela permet de répondre à des besoins importants de performances, et de
        moins dépendre d'autres technologies qui évoluent très vite, parfois
        sans rétrocompatibilité, et qui risquent ne plus être maintenues.
      </p>
    </div>
  );
};

export default RealisationsI2SI;
