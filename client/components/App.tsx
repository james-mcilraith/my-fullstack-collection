import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import TreeList from './TreeList'
import TreeDetails from './TreeDetails'
import AddTreeForm from './AddTreeForm'
import UpdateTreeForm from './UpdateTreeForm'

const App = () => (
  <Router>
    <Header />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<TreeList />} />
        <Route path="/add" element={<AddTreeForm />} />
        <Route path="/trees/:id" element={<TreeDetails />} />
        <Route path="/edit/:id/" element={<UpdateTreeForm />} />
      </Routes>
    </main>
    <Footer />
  </Router>
)

export default App
