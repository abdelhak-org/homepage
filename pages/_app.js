import '@/styles/globals.css'
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import NavBar from '@/components/NavBar'
import { DataContextProvider } from '@/context/data/DataContext' 
import { UiProvider } from '@/context/ui/UiContext'
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
export default function App({ Component, pageProps }) {
  return(
    <DndProvider backend={HTML5Backend}>


      <UiProvider>
      <DataContextProvider>
      
      <NavBar/>
      <SearchBar/>
      <Component {...pageProps} />
      <Footer/>

  
      </DataContextProvider>
      </UiProvider>
    </DndProvider>
     )
}
