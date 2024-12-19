import styles from "./ProfileArtist.module.css"
import axios from "axios"
import a41 from "../../../assets/a41.jpg"
import a42 from "../../../assets/a42.jpeg"
import a43 from "../../../assets/a43.jpeg"
import a44 from "../../../assets/a44.jpg"
import a45 from "../../../assets/a45.jpg"

import ArtistInfoFrom from "./ArtistInfoFrom"
import { Link, useLocation, useNavigate } from "react-router-dom"
import PostArtFrom from "./PostArtFrom"
import ArtistTimeline from "./ArtistTimeline"
import { FaClipboardList } from "react-icons/fa6";
import { useEffect, useState } from "react"
import ArtistOrder from "./ArtistOrder"

const card_datas=[{
  "img":a41,
  "quantity":1,
  "name":"mona Lisa",
  "like":230000,
  "price":790,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},
  {
  "img":a42,
  "quantity":1,
  "name":"Starry Night",
  "like":999,
  "price":250,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},{
  "img":a43,
  "quantity":1,
  "name":"beauty girl",
  "like":20000,
  "price":290,
  "available":"Not Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},{
  "img":a44,
  "name":"smoking man",
  "like":1000,
  "price":2500,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},
{ "img":a45,
  "name":"mona Lisa",
  "like":2000000,
  "price":3680,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},{
  "img":a42,
  "name":"Starry Night",
  "like":1000,
  "price":2500,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},
{ "img":a43,
  "name":"beauty girl",
  "like":2000000,
  "price":3680,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},{
  "img":a44,
  "name":"smoking man",
  "like":1000,
  "price":2500,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},
{ "img":a41,
  "name":"mona Lisa",
  "like":2000000,
  "price":3680,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
}]

const orderData=[{
  "orderId":"106033B897E",
  "img":a41,
  "quantity":1,
  "name":"mona Lisa",
  "price":790,
  "address":"16501 Collins Ave, Sunny lsles Beach, FL 33160, United States",
  "status":"waiting for Confirmation"
  
  
},
  {
  "orderId":"106033B897E",
  "img":a42,
  "quantity":1,
  "name":"Starry Night",
  "like":999,
  "price":250,
  "address":"16501 Collins Ave, Sunny lsles Beach, FL 33160, United States",
  "status":"Confirmed"
  
},{
  "orderId":"106033B897E",
  "img":a43,
  "quantity":1,
  "name":"beauty girl",
  "like":20000,
  "price":290,
  "address":"16501 Collins Ave, Sunny lsles Beach, FL 33160, United States",
  "status":"waiting for Confirmation"
  
},{
  "orderId":"106033B897E",
  "img":a44,
  "name":"smoking man",
  "like":1000,
  "price":2500,
  "mobile":"0178*****48",
  "address":"16501 Collins Ave, Sunny lsles Beach, FL 33160, United States",
  "status":"Confirmed"
  
},
{ 
  "orderId":"106033B897E",
  "img":a41,
  "name":"mona Lisa",
  "like":2000000,
  "price":3680,
  "mobile":"0178*****48",
  "address":"16501 Collins Ave, Sunny lsles Beach, FL 33160, United States",
  "status":"Assigned to rider"
  
},{
  "orderId":"106033B897E",
  "img":a42,
  "name":"Starry Night",
  "like":1000,
  "price":2500,
  "mobile":"0178*****48",
  "address":"16501 Collins Ave, Sunny lsles Beach, FL 33160, United States",
  "status":"canceled"
  
},
{ 
  "orderId":"106033B897E",
  "img":a43,
  "name":"beauty girl",
  "like":2000000,
  "price":3680,
  "mobile":"0178*****48",
  "address":"16501 Collins Ave, Sunny lsles Beach, FL 33160, United States",
  "status":"Confirmed"
  
},{
  "orderId":"106033B897E",
  "img":a44,
  "name":"smoking man",
  "like":1000,
  "price":2500,
  "mobile":"0178*****48",
  "address":"16501 Collins Ave, Sunny lsles Beach, FL 33160, United States",
  "status":"delivered"
  
}]


export default function ProfileArtist() {
  const navigate =useNavigate()
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
  useEffect(()=>{
     getInfo()
     getarts()
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
        <p>&ensp;/&ensp;</p>
        <p className={styles.artist_order} onClick={()=>setorder(true)}> <FaClipboardList/> Order</p>
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
                <ArtistInfoFrom name={name} username={username} email={email} mobile={mobile} bio={bio} address={address} socialmedia={socialmedia}/>
            </div>
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
      
      }
      </div>
  )
}
