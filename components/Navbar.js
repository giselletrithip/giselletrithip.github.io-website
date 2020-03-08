const Navbar = () => {
  return (
    <>
    <div className="navbar is-inline-flex is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item">
          <h1 className="logotext">Giselle Trithip</h1>
        </a>
      </div>
      {/* <div className="navbar-menu">
        <div className="navbar-item">
          <div className="control has-icons-left">
            <input
              className="input is-small has-text-centered"
              type="text"
              placeholder="search"
            />
            <span className="icon is-left is-small">
              <i className="material-icons">search</i>
            </span>
          </div>
        </div>
      </div> */}
      <div className="navbar-item is-flex-touch">
        <a className="navbar-item">
          <i className="material-icons">explore</i>
        </a>
        <a className="navbar-item">
          <i className="material-icons">favorite_border</i>
        </a>
        {/* <a className="navbar-item">
          <i className="material-icons">person_outline</i>
        </a> */}
      </div>
    </div>
    <style jsx>{`
    .navbar {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 2;
      background-color: white;
      justify-content: space-around;
      width: 100%;
      border-bottom: 1px solid lightgray;
    }
    .navbar-menu {
      flex-grow: 0.5;
      justify-content: center;
    }
    .navbar-menu .navbar-item {
      flex-grow: 1;
      justify-content: center;
    }
    .navbar-menu .navbar-item .control {
      width: 50%;
    }
    .logotext {
      font-size: 1.4rem;
      font-family: 'Pacifico', cursive;
    }
    `}</style>
    </>
  );
};

export default Navbar;
