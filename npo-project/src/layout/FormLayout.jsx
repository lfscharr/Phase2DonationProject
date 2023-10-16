import { NavLink, Outlet } from "react-router-dom";

export default function FormLayout() {
  return (
    <div>
      <h2>Add a New Organization</h2>
      <nav>
        <NavLink to="/newnpoform">Add New</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
