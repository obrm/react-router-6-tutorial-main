import { Outlet } from 'react-router-dom';

const SharedProductLayout = () => {
  return (
    <>
      <h2>products</h2>
      <Outlet />
    </>
  );
};

export default SharedProductLayout;
