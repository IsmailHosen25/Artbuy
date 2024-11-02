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
        navigate("/")
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
               </div>
      </div>
    </div>
  )}
