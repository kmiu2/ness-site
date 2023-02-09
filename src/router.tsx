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

const Home = Loader(lazy(() => import('./content/home')))
const Status404 = Loader(lazy(() => import('./content/404')))
const Courses = Loader(lazy(() => import('./content/courses')))

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
    path: '*',
    element: <Status404 />,
  },
]

export default routes
