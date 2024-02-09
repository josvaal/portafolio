import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Projects from './pages/Projects'
import Footer from './components/Footer'
import { Route, Switch } from "wouter";

const App = () => {
  return (
    <div className="max-w-[45rem] m-auto px-6">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projects" component={Projects} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App