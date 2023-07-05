import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(){
    return(
  
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Ecommerce Application</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" href="./add">AddItem</a>
        </li>
  
      </ul>
    
    </div>
  </div>
</nav>

    )
}