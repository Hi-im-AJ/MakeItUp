import React from "react";

const AdressForm = () => {

    //First name, Last name, Country, Address,
    // Email, City, zip code, telephone
    return(

     <form>
        <label>
           First Name:
          <input type="text" name="firstName" />
        </label>
        <label>
            Last Name:
            <input type="text" name="lastName"/>
        </label>
        <label>
            Address:
            <input type="text" name="address"/>
        </label>
        <label>
            Email:
            <input type="text" name="email"/>
        </label>
        <label>
            City:
            <input type="text" name="city"/>
        </label>
        <label>
            Zip Code:
            <input type="number" name="zipCode"/>
        </label>
        <label>
            Telephone:
            <input type="number" name="telephone"/>
        </label>




        <input type="submit" value="Submit" />
        
    </form>
    )
 
}