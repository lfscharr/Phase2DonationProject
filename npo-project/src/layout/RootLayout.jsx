import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <header>
        <nav class="flex justify-evenly">
          <NavLink to="/">Home </NavLink>
          <NavLink to="/about">About </NavLink>
          <NavLink to="/new">New Organization </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
