export const checkvaliddata=(email,password,name)=>{
const emailvalid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
const passwordvalid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
const namevalidate =/^[a-zA-Z0-9_]+$/.test(name);

if(!emailvalid) return 'Email id is not valid'
if(!passwordvalid) return 'Password is not valid'
if(!namevalidate) return 'name is not valid'
return null
}


