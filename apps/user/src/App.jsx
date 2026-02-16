import { About } from './components/About';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { ServicesV2 } from './components/ServicesV2';
import { MainLayout } from './layouts';

function App() {
    return (
        <MainLayout>
            <Hero />
            <About />
            <Portfolio />
            <ServicesV2 />
            {/* <Services /> */}
        </MainLayout>
    );
}

export default App;
