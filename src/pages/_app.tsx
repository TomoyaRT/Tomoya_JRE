import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { Provider } from 'react-redux'
import { useEffect } from 'react'

import { poppins } from '@/utils/Font'
import store from '@/store/index'
import Layout from '@/layouts'
import '@/styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // prevent automatic page location restoration
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  return (
    <Provider store={store}>
      <main className={poppins.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </Provider>
  )
}

export default appWithTranslation(App)
