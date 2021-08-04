import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NewHomeImage from './images/NewHome.jpg';
import Search from "./Search";
import Image1 from "./images/image1.jpg";
import Image2 from "./images/image2.jpg";
import Image3 from "./images/image3.jpg";
import Image4 from "./images/image4.jpg";
import Image5 from "./images/image5.jpg";
import Image6 from "./images/image6.jpg";


class NewHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false
    };
  }
  signOut = () => {
    localStorage.removeItem("token");
    this.setState({
      islogout: true
    });
  };
  render() {
    if (this.state.islogout) {
      return <Redirect to="/Home" />;
    }
   
    return (
      <div className="NewHome" style={{
        backgroundImage: `url(${NewHomeImage})`,
        backgroundSize: "cover",
        height: "88vh"
        }}>   
      
        <p>You have successfully logged in</p>
          
        
            <button onClick={this.signOut} href="#">
              Sign Out
            </button>
        <Search/>   
        <div className="Picturebody">
          <div className="picture">
            <img src={Image1} alt="" />
          
            <img src={Image2} alt="" />
        
            <img src={Image3} alt="" />
          </div>
          <div className="picture">
            <img src={Image4} alt="" />
          
            <img src={Image5} alt="" />
        
            <img src={Image6} alt="" />
          </div>

        </div> 
      </div> 
    );
  }
}
 
export default NewHome;