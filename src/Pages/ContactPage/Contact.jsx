import Navbar from '../../components/Navbar';
import ShoesNavbar from '../ShoesNavbar';
import styled from './Contact.module.css';

const Contact = () => {
    return (
        <>
            <Navbar />
            <hr />
            <ShoesNavbar />
            <h1 className={styled.Title}>Get Help</h1>
            <div>
                <h3 className={styled.toptitle}>Quick Assists</h3>
                <p className={styled.toptitle}>Answers to our most frequently asked questions are just one click away.</p>
                <hr />
                <div className={styled.TopDetails}>
                    <div className={styled.DetailsSec}>
                        <b>Returns</b>
                        <p>
                            What is Nike's return policy?
                            How do I return my Nike order?
                            Where is my refund?
                            View all
                        </p>
                    </div>
                    <div className={styled.DetailsSec}>
                        <b>Dispatch & Delivery</b>
                        <p>What are Nike's delivery options?
                            Can my Nike order be dispatched internationally?
                            Does my Nike order need to clear customs?
                            View all</p>
                    </div>
                    <div className={styled.DetailsSec}>
                        <b>Orders & Payment</b>
                        <p>Where is my Nike order?
                            Can I cancel or change my Nike order?
                            What are Nike's payment options?
                            View all</p>
                    </div>
                </div>

                <div className={styled.TopDetails}>
                    <div className={styled.DetailsSec}>
                        <b>Shopping</b>
                        <p>
                            How do I find the right size and fit?
                            How can I get Nike's best deals?
                            Does Nike offer product advice?
                            View all
                        </p>
                    </div>
                    <div className={styled.DetailsSec}>
                        <b>Nike Membership & Apps</b>
                        <p>
                            What is Nike Membership?
                            How can I join a Nike SNKRS Draw?
                            How do I get Nike's newest sneaker releases?
                            View all</p>
                    </div>
                    <div className={styled.DetailsSec}>
                        <b>Company Info</b>
                        <p>
                            Do Nike shoes have a warranty?
                            What is Nike's mission?
                            Where can I learn more about Nike, Inc.?
                            View all</p>
                    </div>
                </div>

                <p className={styled.toptitle}>Contact</p>
                <hr />
                <div className={styled.ContactDetails}>
                    <div>
                        <img src="./Images/icon/chat.png" alt="" />
                        <p>Chat with us</p>
                        <p> 9:00 - 22:00</p>
                        <p> 7 days a week</p>
                    </div>
                    <div>
                        <img src="./Images/icon/smartphone.png" alt="" />
                        <p>Call us</p>
                        <p>000 800 919 0566</p>
                        <p>9:00 - 22:00</p>
                        <p>7 days a week</p>
                    </div>
                    <div>
                        <img src="./Images/icon/mail.png" alt="" />
                        <p>Email Us</p>
                        <p>We'll replay within five business day</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
