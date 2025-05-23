import Navbar from '../../components/Navbar';
import ShoesNavbar from '../ShoesNavbar';
import styled from './About.module.css'

const About = () => {
    return (
        <>
            <Navbar />
            <hr />
            <ShoesNavbar />
            <hr />
            <div className={styled.AllAbout}>
                <div className={styled.main}>
                    <h1>WE <br />
                        SERVE <br />
                        ATHLETES* <br />
                    </h1>
                    <p>*If you have a Body, you are an athlete </p>
                </div>

                <div className={styled.womanWackingSection}>
                    <div><img src="./Images/About/womanWacking.jpg" alt="" className={styled.womanWacking} /></div>
                    <div>
                        <p>Feature</p>
                        <h1>The Women Creating a New Running CUlture in India</h1>
                        <p>Running on pavement, along promenades, under stadium lights and in celebratory races like the Nike After Dark Tour Mumbai, more and more Indian women are taking to the streets and reclaiming space and power - together.</p>
                    </div>
                </div>

                    <p className={styled.myp}>What's New in Nike Running</p>
                <div className={styled.ThirdSection}>
                    <div className={styled.ThirdMng}>
                        <img src="./Images/About/3.jpeg" alt="" className={styled.ThirdImg}/>
                        <h3>Vomero 18 Brings Maximum Cushioning to Nike’s New Road Running Lineup</h3>
                    </div>
                    <div className={styled.ThirdMng}>
                        <img src="./Images/About/2.jpeg" alt="" className={styled.ThirdImg}/>
                        <h3>Vomero 18 Brings Maximum Cushioning to Nike’s New Road Running Lineup</h3>
                    </div>
                    <div className={styled.ThirdMng}>
                        <img src="./Images/About/3.jpeg" alt="" className={styled.ThirdImg}/>
                        <h3>Vomero 18 Brings Maximum Cushioning to Nike’s New Road Running Lineup</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
