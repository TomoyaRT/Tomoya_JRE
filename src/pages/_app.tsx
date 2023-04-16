import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '@/store/index'
import Layout from '@/layouts'
import '@/styles/globals.css'
import { useEffect } from 'react'

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // prevent automatic page location restoration
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default appWithTranslation(App)
