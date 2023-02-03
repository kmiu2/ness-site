import ReactDOM from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'
import { HashRouter } from 'react-router-dom'

import App from './App'
import { SidebarProvider } from './contexts/SidebarContext'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <HelmetProvider>
    <SidebarProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </SidebarProvider>
  </HelmetProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
