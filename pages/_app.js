import '@/styles/globals.css'
import Layout from "../components/Layout"
import NavBar from '@/components/NavBar'
import {ThemeProvider} from "../context/ThemeConext"
import { DataContextProvider } from '@/context/DataContext'

import Mode from '@/components/Mode'
export default function App({ Component, pageProps }) {
  return(
      <ThemeProvider>
    <Layout>

      <NavBar/>
      <Mode/>
      <DataContextProvider>
      <Component {...pageProps} />

      </DataContextProvider>

    </Layout>
      </ThemeProvider>
     )
}
