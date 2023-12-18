import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { styled } from "styled-components";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;

const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color: orange;
  }
`;

export const Header = () => {
  return (
    <div>
      <header>
        <Navigation>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/movies">Movies</HeaderLink>
        </Navigation>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

      <ToastContainer />
    </div>
  );
};
