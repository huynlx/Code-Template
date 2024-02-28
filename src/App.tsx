import { BrowserRouter as Router } from 'react-router-dom';

// route
import RenderRouters from 'src/routes';

// i18n
import './i18n';

// styles
import 'src/styles/antd.less';

/**
 * Renders the main App component.
 *
 * @return {JSX.Element} The rendered main component.
 */
const App = () => {
  return (
    <Router>
      <RenderRouters />
    </Router>
  );
};

export default App;
