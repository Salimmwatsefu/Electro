 import React from "react";
 import './SellersCard.css'

 function SellersCard() {
    return(
    <div className="container d-flex justify-content-center align-items-center mt-5 mb-5">
    <div className="card">
        <div class="p-2">
            <div class="mt-4">
                <div class="mt-2 team-button d-flex justify-content-between px-2"> <button class="btn btn-success graphic">Step 1: About Ad</button> <button class="btn btn-success code ml-2"> Step 2: About Details</button> </div>
            </div>
        </div>
        <div class="d-flex flex-row justify-content-between px-3">
            <div class="d-flex flex-column ml-2"> <span>Categories</span> <select class="form-select form-select-sm mt-2" aria-label=".form-select-sm">
                    <option selected>Phones</option>
                    <option value="1">TVs</option>
                    <option value="2">Laptops</option>
                    <option value="3">Powerbanks</option>
                </select> </div>
            <div class="d-flex flex-column ml-2"> <span>Select Location</span> <select class="form-select form-select-sm mt-2" aria-label=".form-select-sm">
                    <option selected>Nairobi</option>
                    <option value="1">Mombasa</option>
                    <option value="2">Kisumu</option>
                    <option value="3">Eldoret</option>
                </select> </div>
        </div>
        <div class="d-flex flex-row"> <img src="https://i.imgur.com/7ZqokLR.jpg" class="rounded-circle" width="70"></div>
    </div>
     <div class="mt-4 mb-3"> <span class="ml-3">Next</span>
            <div class="mt-2 team-button d-flex justify-content-between px-3"> <button class="btn btn-success">Save</button> <button class="btn btn-primary ml-1">Continue</button> </div>
    </div>
</div>
    )
    
 }

 export default SellersCard