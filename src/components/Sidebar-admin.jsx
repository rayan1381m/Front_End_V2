import "./Sidebar.css"

function SideBar() {
    return (
      <div className="container">
        <button className="login-btn">Add Game</button>
        <button className="login-btn">Add User</button>
        <button className="login-btn">Search</button>
        <button className="login-btn">Delete Game</button>
        <button className="login-btn">Delete User</button>
        <button className="login-btn">Edit Game</button>
        <button className="login-btn">Edit User</button>
      </div>
    );
  }
  
  export default SideBar;
  
  