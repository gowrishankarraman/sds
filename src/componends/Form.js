import { Button, Card } from "react-bootstrap";

export default function From(){
    return(
        <div className="container-fluid formcolr" id="contactus">
            <form className="p-3">
            <Card className="p-5 text-center formcard">
                <Card.Title  className="hid">
                    <h1>Contact us</h1>
                    <hr style={{color:"goldenrod"}}></hr>
                </Card.Title>
                <Card.Body className=" ">
                <label className="col-12 col-lg-4 p-2 m-2 hid">
                    Name
                </label>
                <input type="text"  className="col-12 col-lg-6 p-2 m-2 hid"></input>
                <label className="col-12 col-lg-4  p-3 m-2 hid">
                    Email
                </label>
                <input type="text"  className="col-12 col-lg-6  p-2 m-2 hid"></input>
                <div className="d-flex justify-content-center row">
                <label className="col-12 col-lg-4 p-3 m-2 hid">
                    Message
                </label>
               <textarea className="col-12 col-lg-6 p-4 m-2 hid"  style={{resize:"none"}} rows={5} cols={12}  ></textarea>  
                </div>
                
                </Card.Body>
         
               <Card.Footer className="d-grid">
                <Button type="submit" className="btn btn-warning hid">Submit</Button>
               </Card.Footer>
            </Card>

            </form>
        </div>
    )
}