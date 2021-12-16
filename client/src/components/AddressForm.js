
import React,{ useState } from "react";

const AdressForm = () => {

    //First name, Last name, Country, Address,
    // Email, City, zip code, telephone

    const [formData, setFormData] = useState({
        firstName: "", 
        lastName: "",
        address: "",
        email: "",
        city: "",
        zipCode: "",
        telephone: "",
        
    })
      
    const handleChange = (event) => {
    
        setFormData({...formData, [event.target.name]:event.target.value})
    }

    const handleSubmit = (event) => {

        event.preventDefault()
    
    }

    return(
        
     <form onSubmit={handleSubmit}>
        <label>
           First Name:
          <input type="text" name="firstName" onChange={handleChange}/>
        </label>

        <label>
            Last Name:
            <input type="text" name="lastName" onChange={handleChange}/>
        </label>

        <label>
            Address:
            <input type="text" name="address" onChange={handleChange} />
        </label>

        <label>
            Email:
            <input type="text" name="email" onChange={handleChange} />
        </label>

        <label>
            City:
            <input type="text" name="city" onChange={handleChange} />
        </label>

        <label>
            Zip Code:
            <input type="number" name="zipCode" onChange={handleChange}/>
        </label>

        <label>
            Telephone:
            <input type="number" name="telephone" onChange={handleChange}/>
        </label>

        <input type="submit" value="Submit" />
        
    </form>
    )
}

export default AdressForm;