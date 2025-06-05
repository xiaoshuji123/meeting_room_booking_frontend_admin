import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const Login = lazy(() => import('src/pages/login'));
const NotFound = lazy(() => import('src/pages/not-found'));
const Home = lazy(() => import('src/pages/home'));
const MeetingRoomManage = lazy(() => import('src/pages/meeting-room-manage'));

const routers: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/login"></Navigate>,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: 'meeting-room-manage',
        element: <MeetingRoomManage />,
      },
    ],
  },
];

export default createBrowserRouter(routers);
