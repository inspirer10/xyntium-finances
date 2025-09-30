import Navbar from './components/Navbar';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <Introduction />
            <HowItWorks />

            <Footer />
        </>
    );
}
