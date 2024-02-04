import '@/styles/globals.css'
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Layout from "../components/Layout"
import NavBar from '@/components/NavBar'
import { DataContextProvider } from '@/context/data/DataContext' 
import { UiProvider } from '@/context/ui/UiContext'
import Footer from '@/components/Footer';
export default function App({ Component, pageProps }) {
  return(
    <DndProvider backend={HTML5Backend}>


      <UiProvider>
      <DataContextProvider>
      <Layout>
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>

    </Layout>
      </DataContextProvider>
      </UiProvider>
    </DndProvider>
     )
}
