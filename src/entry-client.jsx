import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './global.css'
import MainApp from './routes'
import './styles/layout/footer.scss'
import './styles/layout/header.scss'
import './styles/page/cart.scss'
import './styles/template-1.scss'

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
)
