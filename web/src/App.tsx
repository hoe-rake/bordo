import { ColorSchemeScript, MantineProvider } from '@mantine/core'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import '@mantine/core/styles.css'
import './scaffold.css'
import './index.css'
const App = () => {
  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <ColorSchemeScript />
        <MantineProvider>
          <RedwoodApolloProvider>
            <Routes />
          </RedwoodApolloProvider>
        </MantineProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  )
}

export default App
