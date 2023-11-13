import '@/styles/globals.css'
import Layout from "../components/Layout"
import NavBar from '@/components/NavBar'
import { DataContextProvider } from '@/context/data/DataContext' 
import { UiProvider } from '@/context/ui/UiContext'
import Mode from '@/components/Mode'
import AboutMe from '@/components/AboutMe'
export default function App({ Component, pageProps }) {
  return(
      <UiProvider>
      <Layout>
      <NavBar/>
      <AboutMe/>
      <DataContextProvider>
      <Component {...pageProps} />

      </DataContextProvider>

    </Layout>
      </UiProvider>
     )
}
