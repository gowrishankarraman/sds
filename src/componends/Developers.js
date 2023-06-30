import { Card } from "react-bootstrap";
import { Data } from "../Data";
// import { useEffect } from "react";

export default function Developer(){
    
    return(
        <div>
<h1 className="text-center p-3 m-5 hid">We have Dedicated Developers on</h1>
        <div className="d-flex justify-content-center flex-wrap text-center container ">
            
            {Data.map((d)=>{
                return(
                    
                    <Card key={d.id} style={{backgroundColor:d.color}} className="m-5 p-5 row hid">
                        <Card.Img src={d.img} alt="img" className="img-fluid col-12">

                        </Card.Img>
                        <Card.Body className="col-12">
                          {d.name}
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
        </div>

    )
}