"use client"
import React from 'react';

const buttonStyle = {
  '--glow-color': 'rgb(176, 252, 255)',
  '--glow-spread-color': 'rgba(123, 251, 255, 0.781)',
  '--enhanced-glow-color': 'rgb(206, 255, 255)',
  '--btn-color': 'rgb(61, 127, 136)',
  border: '0.25em solid var(--glow-color)',
  padding: '1em 3em',
  color: 'var(--glow-color)',
  fontSize: '15px',
  fontWeight: 'bold',
  backgroundColor: 'var(--btn-color)',
  borderRadius: '1em',
  outline: 'none',
  boxShadow: `
    0 0 1em 0.25em var(--glow-color),
    0 0 4em 1em var(--glow-spread-color),
    inset 0 0 0.75em 0.25em var(--glow-color)
  `,
  textShadow: '0 0 0.5em var(--glow-color)',
  position: 'relative',
  transition: 'all 0.3s',
};

const hoverStyle = {
  color: 'var(--btn-color)',
  backgroundColor: 'var(--glow-color)',
  boxShadow: `
    0 0 1em 0.25em var(--glow-color),
    0 0 4em 2em var(--glow-spread-color),
    inset 0 0 0.75em 0.25em var(--glow-color)
  `,
};

const activeStyle = {
  boxShadow: `
    0 0 0.6em 0.25em var(--glow-color),
    0 0 2.5em 2em var(--glow-spread-color),
    inset 0 0 0.5em 0.25em var(--glow-color)
  `,
};

class Neonbtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false, isActive: false };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  handleMouseDown = () => {
    this.setState({ isActive: true });
  };

  handleMouseUp = () => {
    this.setState({ isActive: false });
  };
  handleClick = () => {
    window.location.href = 'https://api.whatsapp.com/send?phone=5493813380751';
  };

  render() {
    const { isHovered, isActive } = this.state;
    const combinedStyle = {
      ...buttonStyle,
      ...(isHovered ? hoverStyle : {}),
      ...(isActive ? activeStyle : {}),
    };



    return (
      <button
        style={combinedStyle}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onClick={this.handleClick}
        className='flex'
      >
        <p className='pr-4 my-auto'>Contactar</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
</svg> 
        
      </button>
    );
  }
}

export default Neonbtn;