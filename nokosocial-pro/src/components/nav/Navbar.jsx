import "./navbar.css";
export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <h2 className="logo">Noko social</h2>
        <div className="search-bar">
          <i className="uil uil-search"></i>
          <input
            type="search"
            placeholder="Seacrh for creators,inspiration and projects"
          />
        </div>
        <div className="create">
          <label className="btn btn-primary" for="create-post">
            Create
          </label>
          <div className="profile-photo">
            <img src="images/avatar1.jpg" alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
}
