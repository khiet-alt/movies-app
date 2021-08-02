import React from 'react'
import { Wrapper } from '../styles/footer.style'

export const Footer: React.FC = () => {
    return (
        <Wrapper className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                        
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                        Linh Trung Ward, Thu Duc District<br />
                        HO CHI MINH City<br />
                        <i className="fa fa-phone fa-lg" style={{color: '#e6137e'}}></i>: 0365849472<br />
                        <i className="fa fa-envelope fa-lg " style={{color: '#e6137e'}}></i>: <a href="mailto:cs.thanhkhiet@gmail.com">
                            cs.thanhkhiet@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/thanh.khiet.399/"><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/khi%E1%BA%BFt-cao-a4a9021ab/"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}