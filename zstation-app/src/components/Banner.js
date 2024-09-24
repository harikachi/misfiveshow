import React from "react";
import '../css/Banner.css';

function Banner() { 
    return (
    <div className="page-header">
        <div className="page-header__text container">
            <h1 className="page-header__title" data-testid="PageHeader__Title">Find a station</h1>
            <input type="text" className="page-header-search" placeholder="Please enter a Location / station / Truck stop / Airstop" />
            <label className="page-header-label">Or use my current location</label>
        </div>
    </div>
    );
}

export default Banner;