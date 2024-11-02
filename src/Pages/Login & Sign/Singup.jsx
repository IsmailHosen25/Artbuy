import styles from './Sign.module.css'
import {Link,useNavigate} from "react-router-dom"
import {useFormik} from "formik"
import * as yup from "yup"
import axios from 'axios'
export default function Singup() {
  const navigate=useNavigate()
  const formik =useFormik({
    initialValues:{
      username:"",
      number_email:"",
      password:"",
      cpassword:""
    },
    validationSchema:yup.object({
      username:yup.string()
              .required("username is required"),
      email:yup.string()
            .required("email or Number is required"),
      password:yup.string()
               .required("password is required"),
      cpassword:yup.string()
              .required("confirm password is required")
    }),onSubmit:async (values)=>{
          navigate("/")
    }
    
    
  })
  return (
    <div className={styles.ls}>
        <div className={styles.continer}>
              <div className={styles.signup}>
                 <form onSubmit={formik.handleSubmit}>
                     <label className={styles.label}>Sign Up</label>
                      <input  className={styles.input} type="text" name='username' placeholder="User Name" value={formik.values.username} onChange={formik.handleChange}/>
                      <p>{formik.errors.username}</p>
                      <input  className={styles.input} type="email" name='email' placeholder="User Email" value={formik.values.email} onChange={formik.handleChange}/>
                      <p>{formik.errors.email}</p>
                      <input  className={styles.input} type="password" name='password' placeholder="Password" value={formik.values.password} onChange={formik.handleChange}/>
                      <p>{formik.errors.password}</p>
                      <input  className={styles.input} type="password" name='cpassword' placeholder="Confirm Password" value={formik.values.cpassword} onChange={formik.handleChange}/>
                      <p>{formik.errors.cpassword}</p>
                      <button  className={styles.btn} type='submit'>Sign Up</button>
                 </form>
                 <p><i>Already member? <Link to={"/login"}>Login</Link> here.</i></p>
               </div>
      </div>
    </div>
  )}
