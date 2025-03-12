const NavBar = () => {
  return (
    <>
      <nav className="nav nav-pills nav-fill bg-primary border-bottom border-secondary">
        <a className="nav-link text-white" href="/">User</a>
        <a className="nav-link text-white" href="admin">Admin</a>
      </nav>
      <div class="input-group d-flex justify-content-center m-3 bg-primary">
        <span class="input-group-text" id="basic-addon1">Location:</span>
        <input type="text" class="form-control" placeholder="http://" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
    </>
  );
};

export default NavBar;
