import Navbar from './components/Navbar';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';
import ChooseYourCard from './components/ChooseYourCard';
import About from './components/About';
import OurServices from './components/OurServices';
import Blockchain from './components/Blockchain';

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Introduction />
            <HowItWorks />
            <OurServices />
            <Blockchain />
            <ChooseYourCard />

            <Footer />
        </>
    );
}
