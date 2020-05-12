import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const Header = ({startLogout}) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Boilerplate</h1>
        </Link>
      </div>
    </div>
  </header>
);
//button button--link for when u want button preset, but only some parts of it changed

const mapDispatchToProps = (dispatch) => ({
});

export default connect(undefined, mapDispatchToProps)(Header);
