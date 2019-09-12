import React from 'react';

const Environements = props => {
  return (
    <div className="Environements">
      <h3>Systèmes d'exploitations</h3>
      <ul>
        <li>Linux (Ubuntu, Debian)</li>
        <li>Windows (7, 10)</li>
      </ul>
      <h3>Environement</h3>
      <ul>
        <li>Lamp (Linux, Apache, MySQL, PHP)</li>
        <li>Node JS, npm</li>
        <li>Composer (PHP)</li>
        <li>Git (bases)</li>
        <li>Docker (notions)</li>
        <li>AWS (notions)</li>
        <li>Webpack</li>
      </ul>
      <h3>IDE et éditeurs</h3>
      <ul>
        <li>VIM</li>
        <li>Sublime Text</li>
        <li>Visual Studio Code</li>
        <li>Atom</li>
        <li>Rapid PHP</li>
      </ul>
    </div>
  );
};

export default Environements;
