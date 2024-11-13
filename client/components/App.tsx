import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import TreeList from './TreeList'
import TreeDetails from './TreeDetails'
import TreeForm from './TreeForm'

const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<TreeList />} />
        <Route path="/add" element={<TreeForm />} />
        <Route path="/trees/:id" element={<TreeDetails />} />
        <Route path="/trees/:id/edit" element={<TreeForm />} />
      </Routes>
    </main>
    <Footer />
  </Router>
)

export default App
