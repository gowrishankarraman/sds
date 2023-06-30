import { Col, Row } from "react-bootstrap";

export default function Fooder(){
    return(
        <div className="fdcolr ">
            <Row className="list container mx-auto ">
                <Col className="col-12 col-lg-3 col-sm-5 mt-5 hid">
                    <h3 className="ms-4">Quick Links</h3>
                    <ul >
                        <li>
                        <a className=' nlink ' href='#Home' >Home</a>
                        </li>
                        <li>
                        
                        <a className=' nlink' href='#About'>About</a>

                        </li>
                        <li>
                        <a className='nlink ' href='#Services'>Services</a>
                    
                        </li>
                        <li>
                        Blog
                        </li>
                    </ul>
                </Col>
                <Col className="col-12 col-lg-3 col-sm-5 mt-5 hid ">
                <h3 className="ms-4">Services</h3>
                    <ul>
                        <li>
                        UI/UX Design and Development
                        </li>
                        <li>
                        PHP Web Development

                        </li>
                        <li>
                        CMS Website Development
                        </li>
                        <li>
                        WordPress Development

                        </li>
                    </ul>
                </Col>
                <Col className="col-12 col-lg-3 col-sm-5 mt-5 hid">
                <h3 className="ms-3">Online Marketing</h3>
                    <ul>
                        <li>
                        Search Engine Optimization
                        </li>
                        <li>
                        Social Media Marketing

                        </li>
                        <li>
                        Search Engine Marketing
                        </li>
                        <li>
                        Digital Marketing

                        </li>
                    </ul>
                </Col>
                <Col className="col-12 col-lg-3 col-sm-5 mt-5 hid">
                <h3 className="ms-4">Locations</h3>
                    <ul>
                        <li>
                        Chennai (Head Office)
                        </li>
                        <li>
                        SDS, 1st floor, 3rd cross street

                        </li>
                        <li>
                        Pallavan Nagar, Maduravoyal, Chennai-95
                        </li>
                    
                    </ul>
                </Col>
           <hr style={{color:"gold"}}></hr>

            </Row>
        </div>
    )
}