import Header from './Header';
import Annoucement from './Annoucement';
import RecentCrimes from './RecentCrimes';
import Contact from './Contact';
import Webchat from './AIBot';

const Home = () => (
  <div>
    <Header />
    <Annoucement />
    <RecentCrimes/>
    <Contact/>
    <Webchat/>
  </div>
);

export default Home;