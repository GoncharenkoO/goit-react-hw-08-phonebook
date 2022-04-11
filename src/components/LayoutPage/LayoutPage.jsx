import { Outlet } from 'react-router-dom';

import HeaderBar from '../HeaderBar';

const LayoutPage = () => {
  return (
    <>
      <HeaderBar />
      <Outlet />
    </>
  );
};

export default LayoutPage;
