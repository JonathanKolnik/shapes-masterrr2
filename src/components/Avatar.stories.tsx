import React from 'react';
import Avatar from './Avatar';

export default {
  title: 'Components / Avatar',
  component: Avatar,
};

export const Sizes = () => (
  <Avatar size="tiny" />

);

export const Med = () => (
  <Avatar size="medium" />

);

export const Large = () => (
  <Avatar size="large" />

);

Med.parameters = {
  chromatic: { disableSnapshot: true },
}



const styles = {
        width: '100px',
        height: '100%',
        minHeight: '45px',
        '-o-object-fit': 'cover', 
        objectFit: 'cover',
        borderTopLeftRadius: '8px',
        borderBottomLeftRadius: '8px',
  }

  const styledP = {
    'font-family': '"Montserrat",sans-serif',
    'line-height': 'normal',
    'color': '#333',
    'font-size': '.85rem',
    'color': '#777',
    'margin': '0',
    'display': '-webkit-box',
    '-webkit-line-clamp': '3',
    '-webkit-box-orient': 'vertical',
    'overflow': 'hidden',
    'flex-grow': '1',
  }


  const styledLink = {
'background-color': '#fafafa',
    'border-radius': '8px',
    'box-shadow': '0px 1px 10px rgb(0 0 0 / 15%)',
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'stretch',
    'color': 'currentColor',
    'text-decoration': 'none',
    'width': '100%'
  }

  const styledDiv = {
    'display': 'flex',
    'flex-grow': '1',
    'flex-direction': 'column',
    'justify-content': 'space-between',
    'min-height': '90px',
    'margin': '0 10px',
  }

export const imageHeight = () => {
  return (
    <a style={styledLink}>
      <img src={'/image.jpeg'} style={styles} />
      <div style={styledDiv}>
        <span>« L’Absence De Courage Crée De L’Injustice Et Du Désengagement »</span>
        <p style={styledP}>
          Jean-Paul Lugan accompagne les chefs d’entreprises à prendre confiance en eux. L’objectif, est qu’ils dépassent leurs problématiques d’ego, et qu’ils aient le courage de dire les choses à leurs collaborateurs. A grand renfort d’exemples, le coach et formateur montre que l’absence de courage est nuisible pour le bon fonctionnement de l’entreprise.
        </p>
      </div>
    </a>
  );
}

imageHeight.parameters = {
  // Set the viewports in Chromatic at a story level.
  chromatic: { viewports: [1201, 1199] },
};