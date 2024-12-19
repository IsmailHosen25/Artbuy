import styles from './Login.module.css'
import {Link,useNavigate} from "react-router-dom"
import {useFormik} from "formik"
import * as yup from "yup"
import axios from 'axios'
export default function Login() {
  const navigate=useNavigate()
  const formik =useFormik({
    initialValues:{
      email:"",
      password:""
    },
    validationSchema:yup.object({
      email:yup.string()
              .required(" email or Number is required"),
      password:yup.string()
             .required("password is required")
    }),onSubmit:async(values)=>{
      const data=JSON.stringify(values)
      const res=await axios.post(`${import.meta.env.VITE_SERVER_URL}/users/login`,data,{
        headers:{
              "Content-Type":"application/json",
               },
        withCredentials:true
       })
       if(res.data.request==="Accepted"){
        window.localStorage.setItem("login","true")
        window.localStorage.setItem("username",res.data.data.username)
        window.localStorage.setItem("userType",res.data.data.usertype)
        navigate(`/profile?username=${res.data.data.username}`)
      }else if(res.data.request==="Not athurizrd"){
        alert(res.data.request)
      }
      else{
        alert(res.data.error)
      }
    }
})
  return (
    <div className={styles.ls}>
        <div className={styles.continer}>
              <div className={styles.login}>
                 <form onSubmit={formik.handleSubmit}>
                     <label className={styles.label}>Login</label>
                      <input className={styles.input} type="text" name='email' placeholder="User Email" value={formik.values.email} onChange={formik.handleChange}/>
                      <p>{formik.errors.email}</p>
                      <input className={styles.input} type="password" name='password' placeholder="password" value={formik.values.password} onChange={formik.handleChange}/>
                      <p>{formik.errors.password}</p>
                      <button className={styles.btn} type='submit'>Login</button>
                 </form>
                 <p><i>New Member <Link to="/signup">Register</Link> here</i></p>
                 <p><i>Back to <Link to="/">Home </Link>page</i></p>
               </div>
      </div>
    </div>
  )}
