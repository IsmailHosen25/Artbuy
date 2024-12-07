import styles from "./ArtistInfoFrom.module.css";
import { useFormik } from "formik";
import { json, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import axios from "axios";

export default function ArtistInfoFrom({
  name,
  username,
  email,
  mobile,
  bio,
  address,
  socialmedia
}) {
  const [newname,setnewname]=useState(name)
  const [newmobile,setnewmobile]=useState(mobile)
  const [newbio,setnewbio]=useState(bio)
  const [newaddress,setnewaddress]=useState(address)
  const [facebook,setfacbook]=useState("")
  const [instagram,setinstagram]=useState("")
  const [linkedin,setlinkedin]=useState("")
  const [twitter,settwitter]=useState("")
  const [edit, setedit] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: newname,
      mobile: newmobile,
      bio: newbio,
      address: newaddress,
      facebook:facebook,
      instagram:instagram,
      linkedin:linkedin,
      twitter:twitter
    },
    onSubmit: async (values) => {
      setedit(false)
      const data=JSON.stringify({
        "username":username,
        "name": values.name,
        "mobile": values.mobile,
        "bio": values.bio,
        "address": values.address,
        "socialmedia":[
          {
            "name":"facebook",
            "url":values.facebook
          },
          {
            "name":"linkedin",
            "url":values.linkedin
          },
          {
            "name":"instagram",
            "url":values.instagram
          },
          {
            "name":"twitter",
            "url":values.twitter
          }
        ]
      })
      const res=await axios.put(`${import.meta.env.VITE_SERVER_URL}/users/updateinfo`,data,{
        headers:{
              "Content-Type":"application/json",
               },
        withCredentials:true
       })
      if(res.data.request==="Accepted"){
        window.location.reload();
      }else{
        console.log("error-500")
      }
    },
  });
 const setalldata= ()=>{
  for (let i = 0; i < socialmedia.length; i++) {
    if(socialmedia[i].name==="facebook"){
      setfacbook(socialmedia[i].url)
    }
    else if(socialmedia[i].name==="instagram"){
      setinstagram(socialmedia[i].url)
    }
    else if(socialmedia[i].name==="linkedin"){
      setlinkedin(socialmedia[i].url)
    }else{
        settwitter(socialmedia[i].url)
    }
  }
}
  useEffect(()=>{
    setalldata()
  })
 
  return (
    <div className={styles.form_div}>
      <form onSubmit={formik.handleSubmit} className={styles.form_style}>
        <div>
          {edit ? (
            <input
              type="text"
              name="name"
              className={styles.input_name}
              placeholder={"Name"}
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          ) : (
            <p className={styles.name}>{name}</p>
          )}
        </div>
        <div className={styles.username_email}>
          <p>
            <b>User Name:</b>{" "}
          </p>
          <p className={styles.info}>
            <i>{username}</i>
          </p>
        </div>
        <div className={styles.username_email}>
          <p>
            <b>Email: </b>
          </p>
          <p className={styles.info}>
            <i>{email}</i>
          </p>
        </div>
        <div>
          {edit ? (
            <div className={styles.input_div}>
              <p>
                <b>Mobile:</b>
              </p>
              <input
                type="number"
                name="mobile"
                className={styles.input}
                placeholder="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange}
              />
            </div>
          ) : (
            <div className={styles.input_div}>
              <p>
                <b>Mobile:</b>
              </p>
              <p className={styles.info}>{mobile}</p>
            </div>
          )}
        </div>
        <div>
          {edit ? (
            <div className={styles.input_div}>
              <p>
                <b>Address:</b>
              </p>
              <input
                type="text"
                name="address"
                className={styles.input}
                placeholder="Address"
                value={formik.values.address}
                onChange={formik.handleChange}
              />
            </div>
          ) : (
            <div className={styles.input_div}>
              <p>
                <b>Address:</b>
              </p>
              <p className={styles.info}>{address}</p>
            </div>
          )}
        </div>
        <div>
          {edit ? (
            <div className={""}>
              <p className={styles.bio_title}>
                <b>Bio:</b>
              </p>
              <textarea
                rows="4"
                cols="70"
                name="bio"
                className={styles.bio_input}
                onChange={formik.handleChange}
                value={formik.values.bio}
              />
            </div>
          ) : (
            <div>
              <p className={styles.bio_title}>
                <b>Bio:</b>
              </p>
              <p className={styles.bio}>{bio}</p>
            </div>
          )}
        </div>
        <div className={styles.sm_link}>
        <Link className={`${styles.link} ${styles.facebook}`} to={facebook} target="_black"><IoLogoFacebook/></Link>
        {edit?<input type="text" name="facebook" placeholder="Add facbook link" value={formik.values.facebook} onChange={formik.handleChange}/>:""}
        
        <Link className={`${styles.link} ${styles.instagram}`} to={instagram} target="_black"><FaInstagram /></Link>
        {edit?<input type="text" name="instagram" placeholder="Add instagram link" value={formik.values.instagram} onChange={formik.handleChange}/>:""}
        <Link className={`${styles.link} ${styles.linkedin}`} to={linkedin} target="_black"><FaLinkedin/></Link>
        {edit?<input type="text" name="linkedin" placeholder="Add linkedin link" value={formik.values.linkedin} onChange={formik.handleChange}/>:""}
        <Link className={`${styles.link} ${styles.twitter}`} to={twitter} target="_black"><FaTwitter/></Link>
        {edit?<input type="text" name="twitter" placeholder="Add twitter link" value={formik.values.twitter} onChange={formik.handleChange}/>:""}
      </div>
        {edit ? (
          <button
            className={styles.btn}
            type="submit"
          >
            Save
          </button>
        ) : (
          <div className={styles.edit_btn} onClick={()=>setedit(true)}>
            Edit <MdOutlineModeEditOutline />
          </div>
        )}
 
     
    </form>
    </div>
  );
}
