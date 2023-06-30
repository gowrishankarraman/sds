
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './componends/Body';
// import Header from './componends/Header';
import About from './componends/About';
import Services from './componends/Services';
import From from './componends/Form';
import { useEffect } from 'react';





function App() {
  useEffect(()=>{
    const observe=new IntersectionObserver((entrys)=>{
      entrys.forEach((entry)=>{
        if(entry.isIntersecting)
        {
        entry.target.classList.add("show")
        }
        else{
        entry.target.classList.remove("show")

        }
      })
      
    })
    let hidden=document.querySelectorAll(".hid")
      hidden.forEach((el)=>observe.observe(el))
  },[])

  return (
    <div >
      
      {/* <Header></Header> */}
     <Routes>
      <Route path='/' element={<Body></Body>}> 
          </Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/service' element={<Services></Services>}></Route>
          <Route path='/contuctus' element={<From></From>}></Route>


      </Routes>
      
       
        
   

    </div>
  );
}

export default App;
