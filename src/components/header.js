import logo from '../assets/logo.png';

function Header() {
    return (
        <header>
            <div className="header-img">
                <a href="https://trtlproject.web.app/#">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <div>
                <ul className="header-list">
                    <li><a href="https://trtlproject.web.app/#">Home</a></li>
                    <li><a href="https://trtlproject.web.app/#about">About</a></li>
                    <li><a href="https://trtlproject.web.app/#tokenomics">Tokenomics</a></li>
                </ul>
            </div>
            <div className="header-buy">
                <a href=" https://app.astroport.fi/swap">BUY $TRTL</a>
            </div>
        </header >
    );
}

export default Header;