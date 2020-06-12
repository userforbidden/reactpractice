import React, { Component } from "react";
import Divider from '@material-ui/core/Divider';

class FormsPractice extends Component{
    constructor(){
        super()
        this.state = {
            firstName : "",
            lastName : "",
            age : "",
            gender : "",
            location : "",
            dietaryRestrictions: {
                isVegan: false,
                isKosher: false,
                isLactoseFree: false
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const {name,value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState(prevState => {
                return{
                    dietaryRestrictions:{
                        ...prevState.dietaryRestrictions,
                        [name]:checked
                    }
                }
            }
                
                ):
            this.setState(
                {
                    [name] : value
                }
                )
    }
    render(){
        return(
            <main>
                <form>
                    <h1>Enter your details below</h1>
                    <input
                        type="text" 
                        name="firstName" 
                        value ={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder="First Name"    
                    />
                    <br/>
                    <input
                        type="text" 
                        name="lastName" 
                        value ={this.state.lastName}
                        onChange={this.handleChange}
                        placeholder="Last Name"    
                    />
                    <br/>
                    <input
                        type="number" 
                        name="age" 
                        value ={this.state.age}
                        onChange={this.handleChange}
                        placeholder="Age"    
                    />
                    <br/>
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> Male
                    </label>
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female
                    </label>
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="other"
                            checked={this.state.gender === "other"}
                            onChange={this.handleChange}
                        /> Other
                    </label>
                    <br/>
                    <label>Location to Travel:</label>

                    <select
                    value = {this.state.location}
                    onChange={this.handleChange}
                    name="location"
                    >
                    <option value="usa-newyork">Newyork, USA</option>
                    <option value="usa-chicago">Chicago, USA</option>
                    <option value="fr-paris">Paris, France</option>
                    <option value="usa-losangeles">Los Angeles, USA</option>
                    <option value="in-newdelhi">New Delhi, India</option>
                    </select>
                    <br/>
                    <label>
                    <input 
                        type="checkbox"
                        name="isVegan"
                        checked={this.state.dietaryRestrictions.isVegan}
                        onChange={this.handleChange}
                    /> Vegetarian ?
                    </label>
                    <label>
                    <input 
                        type="checkbox"
                        name="isKosher"
                        checked={this.state.dietaryRestrictions.isKosher}
                        onChange={this.handleChange}
                    /> Kosher ? 
                    </label>
                    <label>
                    <input 
                        type="checkbox"
                        name="isLactoseFree"
                        checked={this.state.dietaryRestrictions.isLactoseFree}
                        onChange={this.handleChange}
                    /> Lactose Free?
                    </label>
                    <br/>
                    <button>Submit</button>
                </form>
                <br/>
                <Divider />
                
                <footer>
                    
                    <h1>Entered Information </h1>
                    <h2>Your Name: {this.state.firstName} {this.state.lastName}</h2>
                    <h2>Your Age: {this.state.age}</h2>
                    <h2>You are a {this.state.gender}</h2>
                    <h2>You wish to visit {this.state.location}</h2>
                    <p> Your dietary restrictions</p>
                    <p>Vegan: {this.state.dietaryRestrictions.isVegan ? "Yes" : "No"}</p>
                    <p>Kosher: {this.state.dietaryRestrictions.isKosher ? "Yes" : "No"}</p>
                    <p>Lactose Free: {this.state.dietaryRestrictions.isLactoseFree ? "Yes" : "No"}</p>

                </footer>
            </main>
        )
    }
}

export default FormsPractice