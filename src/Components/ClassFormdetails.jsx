import React, { Component } from"react";



class  ClassFormdetails extends Component{
    constructor(props){
        super();
        this.state = {
            students: [
                {name: "coker",
                 address: "lagos",
                 email: "goc.ng@gmail.com",
                 mobile: "+07036600179"
                },
                {name: "joel",
                address: "Accra",
                email: "jol.ng@gmail.com",
                mobile:" 05236600179"
               }
            ],
            name: "",
            address: "",
            email: "",
            mobile: ""
        };
    }
    handleRegister = (e) =>{
       e.preventDefault();
       this.setState({ [e.target.name]: e.target.value });
    };
    
    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            students: [
               ...this.state.students,
                {
                 name: this.state.name,
                 address: this.state.address,
                 email: this.state.email,
                 mobile: this.state.mobile,
                },
            ],

            name: "",
            address: "",
            email: "",
            mobile: "",
        });
    }; 
    
    render(){
        return(
            <>
                <form>
                    <label>name</label>
                    <input type ="text" name="name" value={this.state.name} onChange={this.handleRegister}/>
                    <label>address</label>
                    <input type ="text"  name="address" value ={this.state.address} onChange={this.handleRegister}/>
                    <label>email</label>
                    <input type ="text"  name="email" value={this.state.email} onChange={this.handleRegister}/>
                    <label>mobile</label>
                    <input type="text"  name="mobile" value={this.state.mobile} onChange={this.handleRegister}/>

                    <button onClick={this.handleSubmit}>submit</button>
                </form>

                  {
                    this.state.students.map((student, index) =>{
                        return(
                            <div key={index}>
                                <h1>Name:   {student.name}</h1>
                                <h1>Address:   {student.address}</h1>
                                <h1>Email:   {student.email}</h1>
                                <h1>Mobile:   {student.mobile}</h1>
                                
                            </div>
                        )
                    })
                  } 
            </>
        )
    }
}export default ClassFormdetails;