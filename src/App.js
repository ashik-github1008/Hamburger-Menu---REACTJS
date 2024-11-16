import {Route, Switch} from 'react-router-dom'
import Home from './components/Home/index'
import About from './components/About/index'
import NotFound from './components/NotFound/index'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/about" component={About}></Route>
    <NotFound />
  </Switch>
)

export default App
