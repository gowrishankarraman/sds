import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Headermid() {
    return (
        <div className='headmid-bg '>
            <Row className='mx-auto text-center  container  '>
                <Col className='p-3 text-white col-12 col-lg-5 '>
                    <h2 className='m-5 hid'>
                        We can develop reliable, scalable and secure software solutions for
                         any OS, browser and device.
                    </h2>
                    <p className='m-2 hid'>
                    We transform businesses with powerful and adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow.
                    </p>
                </Col>
                <Col className='col-12 col-lg-6 mb-2 hid'>
                <img src='https://www.humancloudsoft.com/images/hire-developers.png'alt='img' className='img-fluid '></img>
                </Col>
            </Row>
        </div>
    )
}
