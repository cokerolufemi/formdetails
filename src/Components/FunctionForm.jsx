import React, { useState } from "react";


function FunctionFormdetails() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [students, setStudents] = useState([
        {
            name: "coker",
            address: "lagos",
            email: "goc.ng@gmail.com",
            mobile: "+07036600179"
        },

        {
            name: "joel",
            address: "Accra",
            email: "jol.ng@gmail.com",
            mobile: " 05236600179"
        },
    ]);
    

    const handleSubmit =(e)=>{
        e.preventDefault();
        setStudents([...students,{name, address, email, mobile }],
            setName(""),
            setAddress(""),
            setEmail(""),
            setMobile(""),
        );
    };

    return( 
      <>
        <form>
           <div className="input-container">
                <div className="form-group">
                    <label>name</label>
                    <input type ="text" name="name" value={name} onChange ={(e) => {setName(e.target.value)}}/>
                </div>
                

                <div className="form-group">
                    <label>address</label>
                    <input type ="text"  name="address" value ={address} onChange ={(e) => {setAddress(e.target.value)}}/>
                </div>

                <div className="form-group">
                    <label>email</label>
                    <input type ="text"  name="email" value={email} onChange ={(e) => {setEmail(e.target.value)}}/>
                </div>

                <div className="form-group">
                    <label>mobile</label>
                    <input type="text"  name="mobile" value={mobile} onChange ={(e) => {setMobile(e.target.value)}}/>
                </div>

                <button onClick={handleSubmit}>submit</button>
           </div>

        </form>
       
       {students.map((student, index) =>{
            return(
                <div className="soc" key={index}>
                    <h2>{student.name}</h2>
                    <h2>{student.address}</h2>
                    <h2>{student.email}</h2>
                    <h2>{student.mobile}</h2>
                    
                </div>
            );
        })}
     </> 
    )

}
export default FunctionFormdetails;