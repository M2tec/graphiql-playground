import { useState } from "react";

const NavBar = () => {


  return (
    <>
      {/* <nav className="nav nav-pills nav-fill bg-primary border-bottom border-secondary">
        <a className="nav-link text-white" href="/">User</a>
        <a className="nav-link text-white" href="admin">Admin</a>
      </nav>
      <div className="input-group d-flex justify-content-center m-3 bg-primary">
        <span className="input-group-text" id="basic-addon1">Location:</span>
        
      </div> */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

          <a className="navbar-brand" href="#">GraphQL</a>

          <div className="input-group m-2">
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav border rounded-start w-100">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle px-3" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Location
                </a>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li><a className="dropdown-item" onClick={handleLocationChange}>http://localhost:28080/graphql</a></li>
                  <li><a className="dropdown-item" onClick={handleLocationChange}>http://localhost:28080/admin</a></li>
                  <li><a className="dropdown-item" onClick={handleLocationChange}>https://preprod-sunflower.m2tec.nl/cardano-graphql</a></li>
                </ul>
              </li>
            </ul>
          </div>

          <input type="text" className="form-control w-75" value={location} placeholder="http://" aria-label="Username" aria-describedby="basic-addon1" />

          </div>

        </div>
      </nav>
    </>
  );
};

export default NavBar;
