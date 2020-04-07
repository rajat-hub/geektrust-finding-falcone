import { LitElement, html } from '@polymer/lit-element';
import React from 'react';
/* Style Imports */
import './style.css';

const StarryNight = () => {
  return (
    <React.Fragment>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </React.Fragment>
  );
};

export default StarryNight;
