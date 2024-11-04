import ContactUs from './components/ContactUs'
import Cursor from './components/Cursor'
import Header from './components/Header'
import Services from './components/Services'
import Work from './components/Work'

function App() {
  return (
    <>
      <Header />
      <Services />
      <Work />
      <ContactUs />
      {window.innerWidth > 1024 ? <Cursor /> : null}
    </>
  )
}

export default App
