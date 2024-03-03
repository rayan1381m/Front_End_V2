import "./Sidebar.css"

function SideBarAdmin() {
    return (
      <div className="container">
        <button className="login-btn">Add Game</button>
        <button className="login-btn">Add User</button>
        <button className="login-btn">Search</button>
        <button className="login-btn">Delete Game</button>
        <button className="login-btn">Delete User</button>
        <button className="login-btn">Edit Game</button>
        <button className="login-btn">Edit User</button>
        <button className="logout">Log Out</button>
      </div>
    );
  }
  
  export default SideBarAdmin;
  
  