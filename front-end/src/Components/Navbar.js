import React from 'react';


const Menu = (props) => {
  return <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
    {props.menu.map(element =>
      <li className="nav-item active" key={element.name.toString()}>
        <a className="nav-link" href={element.link}>{element.name}</a>
      </li>)}
  </ul>
};


const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={props.styleNav}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      {props.logo != null &&
        <a className="navbar-brand" href={props.menu[0].link} style={{ fontSize: '30px' }}>
          <img src={props.logo} width="60" height="60" className="d-inline-block align-top" alt="" style={{ margin: '0 5px' }} />
        </a>}

      <div className="collapse navbar-collapse" id="navbarToggler">
        <Menu menu={props.menu} />
      </div>
    </nav >
  )
};

export default Navbar;
