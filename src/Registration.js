import React from 'react';
import RegisterImage from './images/register.jpg';

const Registration = () => {
    return(
        <div  className= "home" style={{
            backgroundImage: `url(${RegisterImage})`,
            backgroundSize: "cover",
            height: "94vh"
        }}>
        
            <h1> Welcome To Registration Page</h1>
            
            <form name='myForm' onSubmit="validateform()">
                <fieldset>
                
                <label>First Name: <input type="text" name="Fname" placeholder="Firstname" required/></label>                 
                <br/>
                <label>Last Name: </label>
                <input type="text" name="Lname" placeholder="Lastname" required/>
                <br/>
                <label>Email: </label>
                <input type="text" name="Email" placeholder="Email" required/>
                <br/>
                <label>Phone: </label>
                <input type="text" name="Phone" placeholder="Phone" required /> 
                <br/>
              
                <input type="submit" value="Submit"></input>
                </fieldset>
            </form>
        </div> 
    );
}
export default Registration;