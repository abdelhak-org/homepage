import '@/styles/globals.css'
import Layout from "../components/Layout"
import NavBar from '@/components/NavBar'
import { UiProvider } from "../context/ui/UiConext"
import { DataContextProvider } from '@/context/data/DataContext'

import Mode from '@/components/Mode'
export default function App( { Component, pageProps } ) {
  return (
    <UiProvider>
      <Layout>
        <NavBar />
        <Mode />
        <DataContextProvider>
          <Component {...pageProps} />
        </DataContextProvider>
      </Layout>
    </UiProvider>
  )
}
