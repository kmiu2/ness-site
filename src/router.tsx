import { lazy, Suspense } from 'react'
import { RouteObject } from 'react-router'
import SidebarLayout from './layouts/SidebarLayout'
import SuspenseLoader from './components/SuspenseLoader'

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  )

const Home = Loader(lazy(() => import('./pages/home')))
const Status404 = Loader(lazy(() => import('./pages/404')))
const Courses = Loader(lazy(() => import('./pages/courses')))
const About = Loader(lazy(() => import('./pages/about')))
const Team = Loader(lazy(() => import('./pages/team')))
const Resources = Loader(lazy(() => import('./pages/resources')))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
  {
    path: '/courses',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Courses />,
      },
    ],
  },
  {
    path: '/about',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <About />,
      },
    ],
  },
  {
    path: '/team',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Team />,
      },
    ],
  },
  {
    path: '/resources',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Resources />,
      },
    ],
  },
  {
    path: '*',
    element: <Status404 />,
  },
]

export default routes
