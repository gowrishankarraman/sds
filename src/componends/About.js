import {  Col, Row } from "react-bootstrap";
import { AboutData } from "../Aboutdata";

export default function About() {
    return (
        <div className=" container-fluid abtcolr " id="About">
            <Row className="  d-flex justify-content-around mt-2 p-2 ">
                <Col className="col-11 col-md-5  ">
                <div className=" mt-4 hid">
                    <h2 className="">About us</h2>
                    <p className="">
                        The company start-up with the utmost potential, knowledge, and resources. The company believes that creating technology is the only solution to everything. With the small goal set to help every entrepreneur with ideas to build their own business, now SDS has become one of the leading software IT solution and service companies. We attained the name of
                        a multinational software company within a short span of time.
                    </p>
                </div>
                <div className="position-relative box rounded-5 mb-5 mt-5" style={{backgroundColor:"#b0b7c7"}}>
                    <div className="text-center p-5 hid" > 
                       
                       <h6>  Do you want to create</h6>
                        <h6> website with us?</h6>
                       
                    </div>
                    <div className=" img-pos  hid" id="girlimg">
                    <img className='img-fluid img'  src="https://www.humancloudsoft.com/images/location.png" alt="img"></img>
                        </div>

                </div>
                </Col>
                <Col className="col-md-5 col-11 mt-5 hid">
                    {AboutData.map((ad)=>{
                        return(
                            <ul key={ad.id}>
                                <li style={{listStyle:"none"}}>
                                    <img src={ad.img} alt="img" className="img-fluid px-3"></img>
                                    {ad.name}
                                </li>
                            </ul>
                        )
                    })}
                </Col>
            </Row>
        </div>
    )
}