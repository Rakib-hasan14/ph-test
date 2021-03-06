import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='cus-width' >
            <div className='f-background py-5'>
                <div className='text-center f-first'>
                    <h4>Dev-Courses</h4>
                    <h5 className="">Virtual ckass for zoom</h5>
                </div>
                <div className='subscribe mt-5 text-center'>
                    <h4>Subscribe to get our Newsletter</h4>
                    <input type="email"  placeholder='Your Email'/>
                    <button>Subscribe</button>
                </div>
                <div className='footer-bottom text-center mt-5'>
                    <p><span>Careers</span><span className='border-start border-end px-3 mx-4'>Privacy Policy</span><span>Terms & Conditions</span></p>
                    <p>&copy; 2022 Dev-Courses.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;