import { Button, Col, Row } from 'react-bootstrap'
// import {  useNavigate } from 'react-router-dom'
export default function Header() {
    // const navigate=useNavigate()
    return (
        <div className='head-bg ' >
            <Row className='d-flex justify-content-center text-center text-white' >
                <Col lg='5' md='5' sm='11' className=''>
                    <h3 className='m-1 p-2 text-primary '><span className='p-2'>
                        <img src='https://www.humancloudsoft.com/images/icons/unique.png' alt='img'></img></span><span className='text-warning'>S</span><span className='text-danger'>D</span>S</h3>
                </Col>
                <Col lg='5' md='5' sm='11' className='Hlink'>
                    <div className='row '>
                        {/* <h6 className='col-12 col-md-3 pt-3'>Home</h6> */}
                        <a className='col-12 col-md-3 pt-3 nlink ' href='#Home' >Home</a>
                        <a className='col-12 col-md-3 pt-3 nlink ' href='#Services'>Services</a>
                        <a className='col-12 col-md-3 pt-3 nlink' href='#About'>About</a>
                        {/* <Link className='col-12 col-md-3 pt-3 nlink '  to="/"  >Home</Link> */}
                        {/* <Link className='col-12 col-md-3 pt-3 nlink'hrefLang="#Service" >Services</Link> */}
                        {/* <Link className='col-12 col-md-3 pt-3 nlink'to="/about" >About</Link> */}
                        {/* <h6 className='col-12 col-md-3 pt-3'>services</h6> */}
                        {/* <h6 className='col-12 col-md-3 pt-3'>Products</h6> */}
                    
                    </div>
                    

                </Col>
                <Col lg='2' md='2' sm='11'>
                <div  className='mt-2 '>
                        {/* <h6 className=' btn btn-warning pb-2 '>Contuct us</h6>  */}
                        
                        <Button className=' btn-outline-light btn-warning  pb-2 '><a href='#contactus' style={{textDecoration:"none",color:"black"}}>contactus</a></Button>
                        </div>
                </Col>
                

            </Row>

        </div>
    )



}