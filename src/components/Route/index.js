import React from 'react';
import { Route as RouterRoute, Redirect } from 'react-router-dom';
import Layout from './../../components/Layout';
import { navRoutes } from '../../constants/';

const Route = (props) => {
  const { isPrivate, layout, path, isLoggedIn, Component, exact } = props;

  if (isPrivate) {
    if (isLoggedIn) {
      return (
        <Layout layout={layout} {...props}>
          <RouterRoute path={path} props exact={exact}>
            <Component {...props} />
          </RouterRoute>
        </Layout>
      );
    }
    return <Redirect to={navRoutes.HOME} />;
  }

  return (
    <Layout layout={layout} {...props}>
      <RouterRoute path={path} props exact={exact}>
        <Component {...props} />
      </RouterRoute>
    </Layout>
  );
};

export default Route;
