import './App.css';
import React, { useEffect, useState } from "react";


function UploadBook(){
    return(
        <div className='container'>
            <div className='row my-5'>
                <div className='col-md-6'>

                </div>
                <div className='col-md-6'>
                   <form>
                   <label class="form-label justify-content-start">Book Name</label>
                    <input type="text" placeholder='Enter book' className='form-control'/>
                    <label class="form-label">Author Name</label>
                    <input type="text" placeholder='Enter author name'  className='form-control'/>
                    <label class="form-label">Product Description</label>
                    <input type="text" placeholder='Enter book description'  className='form-control'/>
                   </form>
                    
                </div>
            </div>
        </div>
    )

}
export default UploadBook;