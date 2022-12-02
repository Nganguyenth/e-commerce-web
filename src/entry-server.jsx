import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import MainApp from './routes';

export function render(url, context) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url} context={context}>
      <MainApp />
    </StaticRouter>
  )
}