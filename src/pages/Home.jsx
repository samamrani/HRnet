import logo from '../assets/img/Capture.PNG';
import '../styles/main.scss';

function Home() {
    return (
        <main className="home-main">
            <h1>Bienvenue sur le site HRnet</h1>
            <img src={logo} alt="Logo du site Wealth Health" />
        </main>
    );
}

export default Home;
