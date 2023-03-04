import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { useCurrentUserQuery } from './redux/authApi';

import { selectIsRefreshing } from './redux/selectors';

import { SharedLayout } from './SharedLayout';
const DefaultPage = lazy(() => import('../pages/DefaultPage/DefaultPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

export const App = () => {
  const { data, isFetching } = useCurrentUserQuery();
  console.log(data, isFetching);
  return !selectIsRefreshing ? (
    <div>Refreshing...</div>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
      <Route path="*" element={<DefaultPage />} />
    </Routes>
  );
};
