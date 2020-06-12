import React from "react";
import Divider from '@material-ui/core/Divider';

function FormComponent(props){
    return(
        <main>
            <form>
                <h1>Enter your details below</h1>
                <input
                    type="text" 
                    name="firstName" 
                    value ={props.firstName}
                    onChange={props.handleChange}
                    placeholder="First Name"    
                />
                <br/>
                <input
                    type="text" 
                    name="lastName" 
                    value ={props.lastName}
                    onChange={props.handleChange}
                    placeholder="Last Name"    
                />
                <br/>
                <input
                    type="number" 
                    name="age" 
                    value ={props.age}
                    onChange={props.handleChange}
                    placeholder="Age"    
                />
                <br/>
                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="male"
                        checked={props.gender === "male"}
                        onChange={props.handleChange}
                    /> Male
                </label>
                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="female"
                        checked={props.gender === "female"}
                        onChange={props.handleChange}
                    /> Female
                </label>
                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="other"
                        checked={props.gender === "other"}
                        onChange={props.handleChange}
                    /> Other
                </label>
                <br/>
                <label>Location to Travel:</label>

                <select
                value = {props.location}
                onChange={props.handleChange}
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
                    checked={props.dietaryRestrictions.isVegan}
                    onChange={props.handleChange}
                /> Vegetarian ?
                </label>
                <label>
                <input 
                    type="checkbox"
                    name="isKosher"
                    checked={props.dietaryRestrictions.isKosher}
                    onChange={props.handleChange}
                /> Kosher ? 
                </label>
                <label>
                <input 
                    type="checkbox"
                    name="isLactoseFree"
                    checked={props.dietaryRestrictions.isLactoseFree}
                    onChange={props.handleChange}
                /> Lactose Free?
                </label>
                <br/>
                <button>Submit</button>
            </form>
            <br/>
            <Divider />
            
            <footer>
                
                <h1>Entered Information </h1>
                <h2>Your Name: {props.firstName} {props.lastName}</h2>
                <h2>Your Age: {props.age}</h2>
                <h2>You are a {props.gender}</h2>
                <h2>You wish to visit {props.location}</h2>
                <p> Your dietary restrictions</p>
                <p>Vegan: {props.dietaryRestrictions.isVegan ? "Yes" : "No"}</p>
                <p>Kosher: {props.dietaryRestrictions.isKosher ? "Yes" : "No"}</p>
                <p>Lactose Free: {props.dietaryRestrictions.isLactoseFree ? "Yes" : "No"}</p>

            </footer>
        </main>
    )
}
export default FormComponent