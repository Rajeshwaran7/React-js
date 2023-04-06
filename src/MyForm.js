import axios from 'axios';
import {useState } from 'react';
import './App.css';

function MyForm() 
{
  const initialValues ={traine_id:"",Name:"",mobilenumber:"",dateofbirth:"",doornumber:"",Streetname:"",landmark:"",pincode:"",city:"",state:"",country:""};
  const [formValues,setforvalue]=useState(initialValues);
   const [formErrors,setformErrors]=useState({});
   const [isSubmit,setisSubmit] = useState(false);
   const url='http://localhost:8080/traine';
  const handleChange =(e) =>
  { 
   const { name,value}=e.target;
   setforvalue({ ...formValues, [name]: value});
   console.log("formValues",formValues)

  };
  const handlesubmit =(e) =>
  {
   e.preventDefault();
   axios.post(url,{ traineId:formValues.traine_id,
    name:formValues.Name,
    mobileNumber:formValues.mobilenumber,
    dateOfBirth:formValues.dateofbirth,
    address:{
     door_no:formValues.doornumber,
       street_name:formValues.Streetname,
       land_mark:formValues.landmark,
       pincode:formValues.pincode,
       city:formValues.city,
       state:formValues.state,
       country:formValues.country
    }
   })
   .then(res =>{
    console.log(res.formValues)
   });
   setformErrors(validate(formValues));
   setisSubmit(true);
  
  
  };



  const validate=(values) =>{
  const errors={}
  const numbersReg= /^[0-9]*$/i;
  const nameReg=/^[a-zA-Z. \\s]*$/i;
  const LandReg=/^[a-zA-Z\\s]*$/i;
  
  if(!values.traine_id)
  {
    errors.traine_id= "Trainee id is required";
  }
  else if(!numbersReg.test(values.traine_id)){
    errors.traine_id="Should be numbers only..!";
  }

  if(!values.Name)
  {
    errors.Name= " Name  is required";
  }
  else if(!nameReg.test(values.Name))
  {
    errors.Name="You can only use alphabet letters(a-z A-Z), space(  ) and dot( . ) ";
  }
  else if(values.Name.length < 3)
  {
    errors.name="Name should be more than or equal to three letters..!";
  }
  if(!values.mobilenumber)
  {
         errors.mobilenumber="Mobile number is required";
  }
  else if(!numbersReg.test(values.mobilenumber))
  {
    errors.mobilenumber="Numbers only allowed here..!"
  }else if(values.mobilenumber.length < 10 || values.mobilenumber.length > 10){
    errors.mobilenumber="Mobile number should be equal to 10 digits..!";
  }
 
  if(!values.dateofbirth)
  {
        errors.dateofbirth="Date of Birth id required";
  }
  if(!values.doornumber)
  {
    errors.doornumber="Door number is required";
  }  else if(!numbersReg.test(values.doornumber)){
    errors.doornumber="Numbers only allowed here..!"
  }else if(values.doornumber.length <0){
    errors.doornumber="it should more than 0";
  }
  if(!values.Streetname)
  {
    errors.Streetname="Streetname is required";
  }
  else if(!LandReg.test(values.Streetname))
  {
    errors.Streetname="Special characters and numbers are not allowed..!";
  }
  else if(values.Streetname.length < 3)
  {
    errors.Streetname="Streetname should be atleast 3 letters..!";
  }

  if(!values.landmark)
  {
    errors.landmark="Land mark is required";
  }
  
  if(!values.pincode)
  {
    errors.pincode="Pincode is required";
  }
  else if(!numbersReg.test(values.pincode))
  {
    errors.pincode="Please enter numbers only..!";
  }
  else if(values.pincode.length < 6 || values.pincode.length > 6)
  {
    errors.pincode="Pincode should be equal to 6 digits..!";
  }

  if(!values.city)
  {
    errors.city="city is required";
  }
  else if(!LandReg.test(values.city)){
    errors.city="Special characters and numbers are not allowed..!";
  }else if(values.city.length < 3){
    errors.city="city should be atleast 3 letters..!";
  }

  if(!values.state)
  {
    errors.state="State is required";
  }  else if(!LandReg.test(values.state)){
    errors.state="Special characters and numbers are not allowed..!";
  }else if(values.state.length < 3){
    errors.state="state should be atleast 3 letters..!";
  }
  if(!values.country)
  {
    errors.country="country is required";
  }  else if(!LandReg.test(values.country)){
    errors.country="Special characters and numbers are not allowed..!";
  }else if(values.country.length < 3){
    errors.country= "country should be atleast 3 letters..!";
  }
  return errors;
  };
return (
  
    <div className="Ap">
   <center>
   <div className='form'>
   <center>
    {
    Object.keys(formErrors).length === 0 && isSubmit === true ?(<div id="submitted"><h4>Submitted succesfully..!</h4></div>
    ) : (
      <pre id ="welcome_from"> ENTER THE DATA HERE..!</pre>
    )
    }
    </center>
   <form  onSubmit={handlesubmit} >
  <table>
   <tr> 
    <td><label >Trainee id </label></td>
  <td><input  type ="text"
  name="traine_id" placeholder='Trainee id' value ={formValues.traine_id} onChange={handleChange}/></td>
</tr>
<p>{formErrors.traine_id}</p>

<tr>
<td><label >Name </label></td>
<td><input  type ="text" name="Name" placeholder='Name' value ={formValues.Name} onChange={handleChange}/></td>
</tr>
<p>{formErrors.Name}</p>

<tr>
<td><label >Mobile number </label> </td>
<td><input  type ='text' name='mobilenumber' placeholder='eg.9786875646' value ={formValues.mobilenumber}
   onChange={handleChange}/></td>
</tr>
<p>{formErrors.mobilenumber}</p>

<tr>
<td><label >Date of birth </label></td>
<td><input  type ="date" name="dateofbirth" placeholder='Date of birth' value ={formValues.dateofbirth} 
  onChange={handleChange}/></td>
</tr>
<p>{formErrors.dateofbirth}</p>
<tr>
<td><label>Door number</label></td>
<td><input  type ="text" name="doornumber" placeholder='Door number' value ={formValues.doornumber}
onChange={handleChange}/></td>
</tr>
<p>{formErrors.doornumber}</p>

<tr>
<td><label>Street name </label></td>
<td><input  type ="text" name='Streetname' placeholder='Street name' value ={formValues.Streetname}
  onChange={handleChange}/></td>
  </tr>
  <p>{formErrors.Streetname}</p>


  <tr>
  <td><label>Land mark</label></td>
<td><input  type ="text" name="landmark" placeholder='Land mark' value ={formValues.landmark} onChange={handleChange}/></td>
 </tr>
 <p>{formErrors.landmark}</p>
 
 <tr>
 <td><label >City</label></td>
 <td><input type="text" name="city" placeholder='Enter City' value ={formValues.city}
 onChange={handleChange}/></td>
</tr>
<p>{formErrors.city}</p>

<tr>
  <td><label >Pincode</label></td>
  <td><input  type ="text" name="pincode" placeholder='Enter pincode' value ={formValues.pincode}
   onChange={handleChange}/></td>
</tr>
<p>{formErrors.pincode}</p>


<tr>
<td><label >State</label></td>
<td><input  type ="text" name="state" placeholder='Enter State' value ={formValues.state}
 onChange={handleChange}/></td>
</tr>
<p>{formErrors.state}</p>

<tr>
<td><label >Country</label></td>
<td><input type="text" name="country" placeholder=' Enter country' value ={formValues.country}
 onChange={handleChange}/></td>
</tr>
<p>{formErrors.country}</p>
</table>

<center>
  <button>
      <input type= "submit" name='submit' value="Submit your form"></input>
      </button>
  </center>
  </form> 
  </div>
</center>
</div>
  );
}
export default MyForm;
