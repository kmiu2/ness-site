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

const Home = Loader(lazy(() => import('./content/dashboards')))
const Status404 = Loader(lazy(() => import('./content/pages/Status/Status404')))

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
    path: '*',
    element: <Status404 />,
  },
]

export default routes
