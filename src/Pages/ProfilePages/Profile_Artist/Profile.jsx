import styles from "./Profile.module.css"
import axios from "axios"

import ProfileInfoFrom from "./ProfileInfoFrom"
import { Link, useLocation, useNavigate } from "react-router-dom"
import PostArtFrom from "./PostArtFrom"
import ArtistTimeline from "./ArtistTimeline"
import { FaClipboardList } from "react-icons/fa6";
import { useEffect, useState } from "react"
import ArtistOrder from "./ArtistOrder"
import ProfileOrder from "../../Global_Components/OrderForProfile/ProfileOrder"


export default function Profile() {
  const userType=window.localStorage.getItem("userType")
  const navigate =useNavigate()
  const [orderData,setorderData]=useState([])
  const [name,setname]=useState("")
  const [username,setusername]=useState("") 
  const [email,setemail]=useState("")
  const [mobile,setmobile]=useState("")
  const [bio,setbio]=useState("")
  const [address,setaddress]=useState("")
  const [socialmedia,setsocialmedia]=useState([])
  const [order,setorder]=useState(false)
  const [ProfileImage,setProfileImage]=useState([])
  const [cardata,setcarddata]=useState([])
  const handleProfileImage=async(path)=>{
    const formdata=new FormData()
    formdata.append("file",path)
    const res=await axios.put(`${import.meta.env.VITE_SERVER_URL}/users/updateprofileimg`,formdata,{withCredentials:true})
    if(res.data.request==="Accepted"){
      window.location.reload()
    }else{
      alert("somthing wrong, please try agian")
    }
  }
  const {search}=useLocation()
  const query=new URLSearchParams(search)
  const getInfo=async()=>{
    const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/users/profile/${query.get("username")}`,{
      headers:{
            "Content-Type":"application/json",
             },
      withCredentials:true
     })
    if (res.data.request==="Accepted"){
      setname(res.data.data.name)
      setusername(res.data.data.username)
      setemail(res.data.data.email)
      setmobile(res.data.data.mobile)
      setaddress(res.data.data.address)
      setbio(res.data.data.bio)
      setsocialmedia(res.data.data.socialmedia)
      setProfileImage(res.data.data.file)
    }
    else{
      window.localStorage.clear()
      navigate("/")
    }
  }
  const getarts=async()=>{
    const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/artist/getarts/${query.get("username")}`,{
      headers:{
            "Content-Type":"application/json",
             },
      withCredentials:true
     })
     if(res.data.request==="Accepted"){
            await setcarddata(res.data.data)
     }
     else if(res.data.request==="token expired"){
              window.localStorage.clear()
              navigate("/login")
     }
     else{
      window.localStorage.clear()
      navigate("/login")
     }
  }
  const getorderhistory=async()=>{
       if(window.localStorage.getItem("userType")==="Buyer"){


        const res=await axios.get(`${import.meta.env.VITE_SERVER_URL}/buyer/getbuyerorderhistory`,
          {
            headers:{
                  "Content-Type":"application/json",
                   },
            withCredentials:true
           }

        )
        if(res.data.request==="Accepted"){
          setorderData(res.data.data)
         }


       }else{
        const res=await axios.get(`${import.meta.env.VITE_SERVER_URL}/artist/getartistorderhistory`,
          {
            headers:{
                  "Content-Type":"application/json",
                   },
            withCredentials:true
           }

        )
        if(res.data.request==="Accepted"){
          setorderData(res.data.data)
         }
       }
       
        
  }
  useEffect(()=>{
     getInfo()
     getarts()
     getorderhistory()
  },[])
  return (
    <div className={styles.profile_artist}>
      <div className={styles.back_home}>
        {order? <>
          <p>Back to&ensp;</p>
          <p className={styles.back_to_account} onClick={()=>setorder(false)}>Account</p>
        </>
        :
        <>
        <p>Back to&ensp;</p>
        <Link to="/" className={styles.bth_link}> Home</Link>
        {userType==="Artist"?<>
        
          <p>&ensp;/&ensp;</p>
          <p className={styles.artist_order} onClick={()=>setorder(true)}> <FaClipboardList/> Order</p>
        
        </>
        
        
        :
        ""}
       
        </>
        
        }
        
      </div>
      {order?
      <div className={styles.profile_A_order}>
          {orderData.map((item,i)=><ArtistOrder key={i} orderData={item}/>)}
      </div>

      
      :


        <>
            <div className={styles.profile_info}>
              <div>
                <label htmlFor="img_input">
                <img src={`${import.meta.env.VITE_SERVER_URL}/users/img?name=${ProfileImage.filename}`} className={styles.profile_img}/>
                </label>
                <input type="file" accept="image/jpeg, image/png, image/jpg" id="img_input" className={styles.input_for_img} onChange={(e)=>handleProfileImage(e.target.files[0])}/>
                <button className={styles.logout_btn} onClick={() => {window.localStorage.clear(); navigate("/");}}>Logout</button>
              </div>
                <ProfileInfoFrom name={name} username={username} email={email} mobile={mobile} bio={bio} address={address} socialmedia={socialmedia}/>
            </div>



            {
              userType==="Artist"?
              <>
             <PostArtFrom/>
            <div className={styles.timeline}>
            <div className={styles.timeline_title}>
                   <p className={styles.timeline_title_p}>TimeLine </p>
                   <div className={styles.timeline_title_desgin}></div>
            </div>
            <div className={styles.timeline_card}>
                 {cardata.map((item,i)=> <ArtistTimeline card_data={item} key={i}/>)}
            </div>
            </div>
              </>
              
              
              :
              
              
              <>
              <div className={styles.profile_order}>
                      {orderData.map((item,i)=><ProfileOrder key={i} orderData={item}/>)}
              </div></>
            }

        </>
      
      }
      </div>
  )
}
