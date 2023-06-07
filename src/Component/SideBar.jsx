import React ,{useState} from "react";
import { Link } from "react-router-dom";
import RegistrationVarify from "../Pages/RegistrationVarify/RegistrationVarify";
export default function SideBar() {


  return (
    <div class="pindicator">
      <div class="bullet current ">  <Link to="/RegistrationBasic"> 
       <span class="icon tns90">1</span></Link>   

        
      </div>
      <div class="bullet "><Link to="/RegistrationVarify">
         <span class="icon tns90" >2</span></Link>
        
      </div>
      <div class="bullet next future">
        <Link to="/RegistrationCreate"><span class="icon tns90">3</span></Link>
        
      </div>
      <div class="bullet future"><Link to="/RegistrationTechSkills">
        <span class="icon tns90">4</span></Link>
        
      </div>
      <div class="bullet future">
        <Link to="/RegistrationStatus"><span class="icon tns90">5</span></Link> 
        
      </div>
      
    </div>
  );
}
