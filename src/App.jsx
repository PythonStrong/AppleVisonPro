import { Box } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import MainTop from './components/MainTop'
import Main from './components/Main'
import MainBottom from './components/MainBottom'
import Footer from './components/Footer'

function App() {
  return (
     <Box>
      <Navbar />
      <Box backgroundImage='https://images.unsplash.com/photo-1611366326837-84268a033366?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwc3RhcnxlbnwwfHwwfHx8MA%3D%3D' >
      <MainTop />
      <Main />
      <MainBottom />
      </Box>
      <Footer />
     </Box>
  )
}

export default App
