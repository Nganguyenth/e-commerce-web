import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import MainApp from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
)
