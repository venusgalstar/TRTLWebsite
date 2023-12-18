import logoRaydium from '../assets/raydium.png';
import logoSolscan from '../assets/solscan.png';
import logoDexscreener from '../assets/dexscreener-1.png';
import logoDextools from '../assets/dextools-1.png';
import logoSolidarity from '../assets/solidarity-1.png';
import logoFire from '../assets/fire-1.png';
import logoWallet from '../assets/wallet-filled-money-tool-1.png';
import logoTokenomics from '../assets/TOKENOMICS.png';

function About() {
    return (
        <div className="about" id="about">
            <div className="wrap-about">
                <div className="about-dex aos-init aos-animate" data-aos="fade-up">
                    <div className="dex-img">
                        <a href="https://injective.com/">
                            <img src={logoRaydium} alt="" />
                        </a>
                    </div>
                    <div className="dex-img">
                        <a href="https://explorer.injective.network/">
                            <img src={logoSolscan} alt="" />
                        </a>
                    </div>
                    <div className="dex-img">
                        <a href="https://astroport.fi/en">
                            <img src={logoDexscreener} alt="" />
                        </a>
                    </div>
                    <div className="dex-img">
                        <a href="https://coinhall.org/?tab=tokens&watchlist=false&timeframe=24h&sort=mcap&dir=desc">
                            <img src={logoDextools} alt="" />
                        </a>
                    </div>
                </div>
                <div className="about-heading aos-init aos-animate" data-aos="fade-up">
                    $TRTL ROADMAP
                </div>
                <p className="about-desc aos-init aos-animate" data-aos="fade-up">
                    $TRTL is not just your typical memecoin. By combining the Injective Ninja community spirit with the Ninja Turtle meme, 
                    we hope to harness the collective power of the internet and build one of the greatest communities not only on Injective, 
                    but across the entire world. 
                </p>
                <div className="about-utility aos-init aos-animate" data-aos="fade-up">
                    <div className="utility-box">
                        <img src={logoSolidarity} alt="" />
                        <h1 className="utility-title"> Phase 1: </h1>
                        <p className="utility-des">
                            -$TRTL token creation<br></br>
                            -Renounce $TRTL contract<br></br>
                            -Stealth Launch $TRTL Liquidity on astroport<br></br>
                            -Burn $TRTL Liquidity<br></br>
                            -Launch Socials<br></br>
                        </p>
                    </div>
                    <div className="utility-box">
                        <img src={logoFire} alt="" />
                        <h1 className="utility-title"> Phase 2: </h1>
                        <p className="utility-des">
                            -Meme Contests<br></br>
                            -Community Spaces<br></br>
                            -$INJ and $TRTL giveaways<br></br>
                        </p>
                    </div>
                    <div className="utility-box">
                        <img src={logoWallet} alt="" />
                        <h1 className="utility-title">Phase 3:</h1>
                        <p className="utility-des">
                            -Dex Listings<br></br>
                            -Cex Listings<br></br>
                            -Injective Ninja Turtle NFT collection<br></br>
                        </p>
                    </div>
                </div>
                <div className="about-button aos-init aos-animate" data-aos="fade-up">
                    <div className="button-style">
                        <a href="https://laughcoin.io/#">Burned Transaction</a>
                    </div>
                    <div className="button-style">
                        <a href="https://explorer.injective.network/">Renounced Transaction</a>
                    </div>
                </div>
            </div>

            <div className="tokenomics-mobile" id="tokenomics">
                <h1 data-aos="fade-up" className="aos-init aos-animate">Tokenomics</h1>
                {/* <img src={logoTokenomics} alt="" /> */}
            </div>
        </div>
    );
}

export default About;