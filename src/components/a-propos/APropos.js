import React from 'react';
import ContactForm from './../contact-form/ContactForm';
import './APropos.css';
import RealisationsLsdla from './../realisatioins-lsdla/RealisationsLsdla';
import RealisationsI2SI from './../realisations-i2si/RealisationsI2SI';

const APropos = props => {
  return (
    <div className="APropos">
      <h1>Mon Parcours</h1>
      <h2>Formations</h2>
      <h3>2015 - 2016 : Formation en ligne</h3>
      <p>
        Comme tous les <em>autodidactes</em>, j'ai commencé à me former (2015)
        en ligne à l'aide de plateformes telles que :
      </p>
      <ul>
        <li>
          <a
            href="https://openclassrooms.com"
            target="_blank"
            rel="noopener noreferrer">
            openclassrooms.com
          </a>
        </li>
        <li>
          <a
            href="https://www.codecademy.com"
            target="_blank"
            rel="noopener noreferrer">
            codecademy.com
          </a>
        </li>
        <li>
          <a
            href="https://www.udemy.com"
            target="_blank"
            rel="noopener noreferrer">
            udemy.com
          </a>
        </li>
        <li>
          <a
            href="https://developer.mozilla.org"
            target="_blank"
            rel="noopener noreferrer">
            developer.mozilla.org
          </a>
        </li>
        <li>
          <a
            href="https://www.php.net"
            target="_blank"
            rel="noopener noreferrer">
            php.net
          </a>
        </li>
        <li style={{color: 'gray', fontStyle: 'italic'}}>
          &nbsp;et beaucoup d'autres...
        </li>
      </ul>
      <p>
        J'ai pu acquérir de bonnes bases dans le développement web ( PHP, SQL,
        Javascript, HTML, CSS) ainsi que dans l'environement Linux (
        <i>Bash, ssh...</i>)
      </p>

      <h3>
        2016 - 2017 :&nbsp;
        <a
          href="https://diplome.3wa.fr/othmane-zakaria"
          target="_blank"
          rel="noopener noreferrer">
          3W Academy
        </a>{' '}
        (Paris)
      </h3>
      <p>
        Puis j'ai suivi une formation de
        <a
          href="https://diplome.3wa.fr/othmane-zakaria"
          target="_blank"
          rel="noopener noreferrer">
          {' '}
          Développeur Intégrateur en réalisation d'Applications Web
        </a>{' '}
        (2016) à la 3W Academy de Paris.
      </p>
      <p>Formation intensive basée sur la pratique</p>
      <h3>2015 - 2019 : Veille constante</h3>
      <p>
        Je fais beaucoup de veille technologique. Le Web évolue à une très
        grande vitesse. De nouveaux frameworks apparaîssent tous les jours et il
        est très facile de s'y perdre.
      </p>
      <p>
        J'essaie de tester les technos et solutions qui parraîssent le plus
        intéressantes (Docker, Devops, IA, AWS...) et de m'y intéresser de plus
        près quand je pense qu'elles sont pertinentes (ce qui n'est pas le cas
        avec tout ce qui est nouveau !)
      </p>
      <h2>Experience</h2>

      <RealisationsLsdla />

      <RealisationsI2SI />

      <h3>Août 2019</h3>
      <p>Développeur Fullstack Indépendant</p>
      <ContactForm />
    </div>
  );
};

export default APropos;
