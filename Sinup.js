import {React,useState} from 'react';
import {Login} from './login'
function Page(){
 const[name,setName] =useState('');
 const[lname,setLName] =useState('');
 const[mail,setMail] =useState('');
 const[form,setForm] =useState(true);
 function getName(e){
  setName(e.target.value);
  console.log(e.target.value);

 }
 function getLastName(e){
  setLName(e.target.value);
 }
 function getMail(e){
  setMail(e.target.value);
 }
 const callApi= async(e)=>{
  e.preventDefault();
 const formdata={name,lname,mail}; 
 console.log(formdata);
 const params={
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(formdata)

 }
 const res=await fetch("http://localhost:5000/dummy",params);
 console.log(res.status)
 if(res.status===200){
  setForm(false);
 }
 const data=await res.json();
 console.log(data);
 }
 return(
  <div>
   <form>
     name:<input type="text"onChange={getName} /><br/>
      phone:<input type="text" onChange={getLastName}/><br/>
      password<input type="text" onChange={getMail}/><br/>
    <button onClick={callApi}>add</button>
    </form>
    {form===true?<Login/>:null}
  </div>
 )
}
export default Page;