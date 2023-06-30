import { Servicedata } from "../ServiceData";

export default function Services(){
    return(
        <div className="container  " id="Services">
            <hr></hr>
            <div className="text-center m-5 hid">
                <h2 >Services</h2>
                <p className="linespace ">
                From IT strategy consulting and comprehensive
                 technology roadmaps to the end-to-end development of
                  scalable solutions, SDS delivers a full-cycle software development services that adapt seamlessly to your project requirements and business needs.
                </p>
            </div>
            <div className="container d-flex  justify-content-center flex-wrap hid  ">
                {Servicedata.map((sd)=>
               <ul key={sd.id}  className="col-md-4 col-12  " >
                <li  style={{listStyle:"none"}} >
                   <img src={sd.img} alt="img" className="me-3"></img>
                  <span className="pt-5">{sd.name}</span> 
                </li>
               </ul> )}
            </div>
        </div>
    )
}