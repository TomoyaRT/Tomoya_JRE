import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '@/store/index'
import Layout from '@/layouts'
import '@/styles/globals.css'

import PageTransition from '@/layouts/PageTransition'

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PageTransition>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PageTransition>
    </Provider>
  )
}

export default App
