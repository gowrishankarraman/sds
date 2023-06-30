import React from 'react'
import Developer from './Developers'
import Services from './Services'
import About from './About'
import Deveservice from './Deveservice'
import From from './Form'
import Fooder from './Fooder'
import Headermid from './Headermid';

function Body() {
  return (
    <div>
     
      <Headermid></Headermid>
        <Developer></Developer>
        <Services></Services>
        <About></About>
        <Deveservice></Deveservice>
        <From></From>
        <Fooder></Fooder>
     
    </div>
  )
}

export default Body