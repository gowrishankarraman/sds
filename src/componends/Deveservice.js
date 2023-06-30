import { Col, Row } from "react-bootstrap";

export default function Deveservice(){
    return(
        <div className="container-fluid abtcolr">
            <Row className=" d-flex  justify-content-around  ">
                <Col className="col-11 col-lg-5  mx-5 my-auto">
                <h1 className="mt-3 p-1 hid">Software Development Services</h1>
                <p className="mt-2 p-1 hid">
                We provide exclusive software development services that seamlessly adapt to your project objectives and business needs, from IT strategy advice and thorough technology roadmaps through the end-to-end implementation of scalable solutions. We provide startups, small-to-midsize (SMB), and enterprise-size companies with top-notch custom software development services.
                </p>
                </Col>
                <Col className="col-11 col-lg-4 mx-auto mt-3 hid ">
                    <img alt="img"  className="img-fluid rounded-4" src="https://www.humancloudsoft.com/images/mailto.png">
                    </img>
                </Col>
            </Row>
        </div>
    )
}