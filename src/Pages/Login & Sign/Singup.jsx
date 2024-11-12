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
      email:"",
      password:"",
      confirm_password:"",
      userType:""
    },
    validationSchema:yup.object({
      username:yup.string()
              .required("username is required"),
      email:yup.string()
            .required("email or Number is required"),
      password:yup.string().min(6)
               .required("password is required"),
      confirm_password:yup.string()
              .required("Confirm Password is required")
              .oneOf([yup.ref("password"),null,'']),
      userType:yup.string()
      .required("Select as required")
    }),onSubmit:async (values)=>{
          const confirmsignup=confirm(`are you sure ${values.username}?`)
          if(confirmsignup){
            window.localStorage.setItem("login",true)
            window.localStorage.setItem("userType",values.userType)
            navigate("/")
          }else{
            console.log(values)
          }
    }
    
    
  })
  return (
    <div className={styles.ls}>
        <div className={styles.continer}>
              <div className={styles.signup}>
                 <form onSubmit={formik.handleSubmit}>
                     <label className={styles.label}>Sign Up</label>
                      <input  className={styles.input} type="text" name='username' placeholder="User Name" value={formik.values.username} onChange={formik.handleChange}/>
                      <p>{formik.touched.username ? formik.errors.username:""}</p>
                      <input  className={styles.input} type="email" name='email' placeholder="User Email" value={formik.values.email} onChange={formik.handleChange}/>
                      <p>{formik.touched.email? formik.errors.email:""}</p>
                      <input  className={styles.input} type="password" name='password' placeholder="Password" value={formik.values.password} onChange={formik.handleChange}/>
                      <p>{formik.touched.password?formik.errors.password:""}</p>
                      <input  className={styles.input} type="password" name='confirm_password' placeholder="Confirm Password" value={formik.values.cpassword} onChange={formik.handleChange}/>
                      <p>{formik.touched.confirm_password?formik.errors.confirm_password:""}</p>
                      <div className={styles.radio_btn}>
                      <label className={styles.select_lable}>Select ... </label>
                        <input type="radio" value="Artist" name="userType" onChange={formik.handleChange} className={styles.radio}/> Artist
                        <input type="radio" value="Buyer" name="userType" onChange={formik.handleChange} className={styles.radio}/> Buyer
                      </div>
                      <p>{formik.touched.userType?formik.errors.userType:""}</p>
                      <button  className={styles.btn} type='submit'>Sign Up</button>
                 </form>
                 <p><i>Already member? <Link to={"/login"}>Login</Link> here.</i></p>
                 <p><i>Back to <Link to="/">Home </Link>page</i></p>
               </div>
      </div>
    </div>
  )}
