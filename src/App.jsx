import { useState } from 'react'
import { Icon } from 'react-icons-kit'
import {basic_eye} from 'react-icons-kit/linea/basic_eye'
import {basic_eye_closed} from 'react-icons-kit/linea/basic_eye_closed'
import {view_off} from 'react-icons-kit/ikons/view_off'
import {arrows_exclamation} from 'react-icons-kit/linea/arrows_exclamation'

import {arrows_circle_check} from 'react-icons-kit/linea/arrows_circle_check'

import './App.css'

function App() {
  const [type, setType] = useState("password")
  const [lowerValidate,setLowerValoidate] = useState(false);
  const [upperValidate,setUpperValoidate] = useState(false);
  const [numberValidate,setNumberValoidate] = useState(false);
  const [specialValidate,setSpecialValoidate] = useState(false);
  const [lengthValidate,setLengthValoidate] = useState(false);
  
  const handleChange=(value)=>{
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');
    const length = new RegExp('(?=.{8,})')
    if(lower.test(value)){
      setLowerValoidate(true);
    }
    else{
      setLowerValoidate(false);
    }
    if(upper.test(value)){
      setUpperValoidate(true);
    }
    else{
      setUpperValoidate(false);
    }
    if(number.test(value)){
      setNumberValoidate(true);
    }
    else{
      setNumberValoidate(false);
    }
    if(special.test(value)){
      setSpecialValoidate(true);
    }
    else{
      setSpecialValoidate(false);
    }
    if(length.test(value)){
      setLengthValoidate(true);
    }
    else{
      setLengthValoidate(false);
    }
  }

  return (
    <div className='wrapper'>
        <div className='box'>
          <p>Enter Password</p>
          <div className='input-with-icon-div form-control'>
            <input type={type} className='custom-input' onChange={(e)=>handleChange(e.target.value)}/>
            {
              type === "password" ? (<span className='icon-span' onClick={()=>setType("text")}><Icon icon={basic_eye_closed} size={20}/></span>) : (<span className='icon-span' onClick={()=>setType("password")}><Icon icon={basic_eye} size={20}/></span>)
            }
          </div>
          {/*Validation tracker*/}
          {/* <main className='tracker-box'>
            <div  className={lowerValidate?"validated" : "not-validated"}>
              {lowerValidate ? (
                <span className='list-icon green'>
                  <Icon icon={arrows_circle_check}/>  
                </span>
              ):(
                <span className='list-icon'>
                  <Icon icon={arrows_exclamation}/>  
                </span>
              )}
              At least one lowercase letter
            </div>
            <div className={upperValidate ? "validated" : "not-validated"}>
            {lowerValidate ?(
              <span className='list-icon green'>
                <Icon icon={arrows_circle_check}/>  
              </span>
            ):(
              <span className='list-icon'>
                <Icon icon={arrows_exclamation}/>  
              </span>
            )}
              At least one uppercase letter
            </div>
            <div className={numberValidate ? "validated" : "not-validated"}>
            {lowerValidate?(
              <span className='list-icon green'>
                <Icon icon={arrows_circle_check}/>  
              </span>
            ):(
              <span className='list-icon'>
                <Icon icon={arrows_exclamation}/>  
              </span>
            )}
              At least one number
            </div>
            <div className={specialValidate ? "validated" : "not-validated"}>
            {lowerValidate?(
              <span className='list-icon green'>
                <Icon icon={arrows_circle_check}/>  
              </span>
            ):(
              <span className='list-icon'>
                <Icon icon={arrows_exclamation}/>  
              </span>
            )}
              At least one special character
            </div>
            <div className={lengthValidate ? "validated" : "not-validated"}>
            {lowerValidate?(
              <span className='list-icon green'>
                <Icon icon={arrows_circle_check}/>  
              </span>
            ):(
              <span className='list-icon'>
                <Icon icon={arrows_exclamation}/>  
              </span>
            )}
              At least 8 character
            </div>
          </main> */}
          <main className='tracker-box'>
          <div className={lowerValidate?'validated':'not-validated'}>
            {lowerValidate?(
              <span className='list-icon green'>
                <Icon icon={arrows_circle_check}/>  
              </span>
            ):(
              <span className='list-icon'>
                <Icon icon={arrows_exclamation}/>  
              </span>
            )}
            At least one lowercase letter
          </div>
          <div className={upperValidate?'validated':'not-validated'}>
            {upperValidate?(
              <span className='list-icon green'>
                <Icon icon={arrows_circle_check}/>  
              </span>
            ):(
              <span className='list-icon'>
                <Icon icon={arrows_exclamation}/>  
              </span>
            )}
            At least one uppercase letter
          </div>
          <div className={numberValidate?'validated':'not-validated'}>
            {numberValidate?(
              <span className='list-icon green'>
                <Icon icon={arrows_circle_check}/>  
              </span>
            ):(
              <span className='list-icon'>
                <Icon icon={arrows_exclamation}/>  
              </span>
            )}
            At least one number
          </div>
          <div className={specialValidate?'validated':'not-validated'}>
            {specialValidate?(
              <span className='list-icon green'>
                <Icon icon={arrows_circle_check}/>  
              </span>
            ):(
              <span className='list-icon'>
                <Icon icon={arrows_exclamation}/>  
              </span>
            )}
            At least one special character
          </div>
          <div className={lengthValidate?'validated':'not-validated'}>
            {lengthValidate?(
              <span className='list-icon green'>
                <Icon icon={arrows_circle_check}/>  
              </span>
            ):(
              <span className='list-icon'>
                <Icon icon={arrows_exclamation}/>  
              </span>
            )}
            At least 8 characters
          </div>
        </main>
        </div>
    </div>
  )
}

export default App
