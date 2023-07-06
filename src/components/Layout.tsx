
import React from 'react';
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main style={{
      height: 'calc(100vh - 56px)',
      overflow: 'hidden'
    }}><Outlet /></main>
  )
}

export default Layout