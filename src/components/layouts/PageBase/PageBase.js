import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';
import DashboardHeader from '@components/layouts/DashboardHeader';
import { PageBaseContext } from './Context';
import { routes } from '@configs/routes';
import DashboardMenu from '@layouts/DashboardMenu';

export default function PageBase({ children }) {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [router, setRouter] = useState('');

  const noAuthRoutes = [`${routes.LOGIN()}`];
  const pageWithoutMenu = noAuthRoutes.some((r) => pathname.match(r));

  useEffect(() => {
    pathname === '/' && setRouter(null);
  }, [pathname]);

  if (pageWithoutMenu) {
    return children;
  }

  return (
    <PageBaseContext.Provider
      value={{ showMenu, setShowMenu, router, setRouter }}
    >
      <div className="row">
        <DashboardMenu />

        <div className="col-sm-12 col-md-9 offset-md-3 offset-lg-2 col-lg-10">
          <DashboardHeader />
          <main className={styles.main}>{children}</main>
        </div>
      </div>
    </PageBaseContext.Provider>
  );
}

PageBase.defaultProps = {
  children: null,
};

PageBase.propTypes = {
  children: PropTypes.node,
};
