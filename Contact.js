import React, { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState({
        name:"",
        email:"",
        address:"",
        phone:"",
    });
      const inputEvent = (event) =>{
          const {name , value} = event.target;
          setData((preVal) =>{
              return{
                  ...preVal,
                  [name] : value,
              };
          });
        
    }
    const formSubmit = (e) =>{
       e.preventDefault();
       alert(`My Name is ${data.name} 
       My Email is : ${data.email} 
       My Address is : ${data.address}
       My Phone is : ${data.phone}`);
    }

    return (
         <>
            <div className="my-1">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-file-signature"></i> Your Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                        name="name" 
                        value={data.name} 
                        onChange={inputEvent}
                        placeholder="Enter Your Name" />
                        </div>
                           <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-envelope"></i> Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                        name="email"
                        value={data.email} 
                        onChange={inputEvent}
                         placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-map-marker-alt"></i> Address</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                        name="address" 
                        value={data.address}
                        onChange={inputEvent}
                        placeholder="" />
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-phone-alt"></i> Phone No:</label>
                        <input type="number" class="form-control" id="exampleFormControlInput1"
                        name="phone" 
                        value={data.phone} 
                        onChange={inputEvent}
                        placeholder="+91 " />
                        </div>
                          <div class="col-12">
                            <button class="btn btn-outline-success" type="submit">Submit form</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
