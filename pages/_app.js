import '@/styles/globals.css'
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Layout from "../components/Layout"
import NavBar from '@/components/NavBar'
import { DataContextProvider } from '@/context/data/DataContext' 
import { UiProvider } from '@/context/ui/UiContext'
import Mode from '@/components/Mode'
import AboutMe from '@/components/AboutMe'
export default function App({ Component, pageProps }) {
  return(
    <DndProvider backend={HTML5Backend}>


      <UiProvider>
      <Layout>
      <NavBar/>
      <AboutMe/>
      <DataContextProvider>
      <Component {...pageProps} />

      </DataContextProvider>

    </Layout>
      </UiProvider>
    </DndProvider>
     )
}
