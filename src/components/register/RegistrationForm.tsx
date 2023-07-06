import React, {useState,useEffect} from 'react';
import api from '../../api/axiosConfig';
import './Registration.css';
function RegistrationForm() {
    
    const [firstName, setFirstName] = useState<any>(null);
    const [lastName, setLastName] = useState<any>(null);
    const [email, setEmail] = useState<any>(null);
    const [password,setPassword] = useState<any>(null);
    const [confirmPassword,setConfirmPassword] = useState<any>(null);
    const [showPassError, setShowPassError] = useState<any>(false);

    useEffect(() => {
      if(password !== confirmPassword && (confirmPassword !== null || confirmPassword !=="")){
        setShowPassError(true);
      } else if(password === "" && confirmPassword !== ""){
        setShowPassError(false);
      } else {
        setShowPassError(false);
      }
    }, [password,confirmPassword])
    

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = async () => {
        if(firstName && email && password !== confirmPassword){
            return;
        } else{
            try
        {
            const response = await api.post("/api/v1/register",{user: email,password});
        }
        catch(err)
        {
            console.error(err);
        }
        }
    }

    return(
        <div className='registerHeader'> Register
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" htmlFor="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" htmlFor="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="email">
                    <label className="form__label" htmlFor="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" htmlFor="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
                {showPassError && <div style={{color:"black"}}><p>"Password Mismatch"</p></div>}
            </div>
            <div className="footer">
                <button onClick={()=>handleSubmit()} type="submit" className="registerbtn">Register</button>
            </div>
        </div>
        </div>
    )       
}

export default RegistrationForm;