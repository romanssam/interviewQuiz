import {MainPage} from "../pages/MainPage";
import {MainLayout} from "../shared/layouts/MainLayout";
import {Header} from "../widgets/Header";
import {Footer} from "../widgets/Footer";
import './styles/index.scss';

function App() {
  return (
    <MainLayout
        header={ <Header /> }
        main={ <MainPage /> }
        footer={ <Footer />}
    />
  )
}

export default App
