import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Projects from './pages/Projects'
import Footer from './components/Footer'
import { Route, Switch } from "wouter";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projects" component={Projects} />
      </Switch>
      <Footer />
    </>
  )
}

export default App