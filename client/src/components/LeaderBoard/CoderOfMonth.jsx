import React, { useEffect, useState } from 'react';
import "./style.css";

export default () => {


  var url = "https://bootdey.com/img/Content/avatar/avatar7.png";

    return <>
        
        <div >

        <div className="d-flex flex-row align-items-center text-center">

        
        <div className="card">
                <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                    <img src= "https://bootdey.com/img/Content/avatar/avatar7.png" onError={(e) => { e.target.onerror = null; e.target.src = url; }} alt="Admin" className="rounded-circle" width={150} />
                    <div className="mt-3">
                        <h4>name</h4>
                        <p className="text-secondary mb-1">intro1</p>
                        <p className="text-muted font-size-sm">intro2</p>
                    </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                    <img src= "https://bootdey.com/img/Content/avatar/avatar7.png" onError={(e) => { e.target.onerror = null; e.target.src = url; }} alt="Admin" className="rounded-circle" width={150} />
                    <div className="mt-3">
                        <h4>name</h4>
                        <p className="text-secondary mb-1">intro1</p>
                        <p className="text-muted font-size-sm">intro2</p>
                    </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
    
    </>
}