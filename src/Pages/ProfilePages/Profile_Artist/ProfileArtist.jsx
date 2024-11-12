import styles from "./ProfileArtist.module.css"
import profile_img from "../../../assets/Hasan.jpg"
import art1 from "../../../assets/art1.jpg"
import art2 from "../../../assets/art2.jpg"
import art3 from "../../../assets/art3.jpg"
import art4 from "../../../assets/art4.jpg"

import ArtistInfoFrom from "./ArtistInfoFrom"
import { Link, useNavigate } from "react-router-dom"
import PostArtFrom from "./PostArtFrom"
import ArtistTimeline from "./ArtistTimeline"
import { FaClipboardList } from "react-icons/fa6";
import { useState } from "react"
import ArtistOrder from "./ArtistOrder"

const card_datas=[{
  "img":art1,
  "quantity":1,
  "name":"mona Lisa",
  "like":230000,
  "price":790,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},
  {
  "img":art2,
  "quantity":1,
  "name":"Starry Night",
  "like":999,
  "price":250,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},{
  "img":art3,
  "quantity":1,
  "name":"beauty girl",
  "like":20000,
  "price":290,
  "available":"Not Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},{
  "img":art4,
  "name":"smoking man",
  "like":1000,
  "price":2500,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},
{ "img":art1,
  "name":"mona Lisa",
  "like":2000000,
  "price":3680,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},{
  "img":art2,
  "name":"Starry Night",
  "like":1000,
  "price":2500,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},
{ "img":art3,
  "name":"beauty girl",
  "like":2000000,
  "price":3680,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},{
  "img":art4,
  "name":"smoking man",
  "like":1000,
  "price":2500,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},
{ "img":art1,
  "name":"mona Lisa",
  "like":2000000,
  "price":3680,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
}]

const orderData=[{
  "orderId":"106033B897E",
  "img":art1,
  "quantity":1,
  "name":"mona Lisa",
  "price":790,
  "address":"16501 Collins Ave, Sunny lsles Beach, FL 33160, United States",
  "status":"waiting for Confirmation"
  
  
},
  {
  "orderId":"106033B897E",
  "img":art2,
  "quantity":1,
  "name":"Starry Night",
  "like":999,
  "price":250,
  "address":"16501 Collins Ave, Sunny lsles Beach, FL 33160, United States",
  "status":"Confirmed"
  
},{
  "orderId":"106033B897E",
  "img":art3,
  "quantity":1,
  "name":"beauty girl",
  "like":20000,
  "price":290,
  "address":"16501 Collins Ave, Sunny lsles Beach, FL 33160, United States",
  "status":"waiting for Confirmation"
  
},{
  "orderId":"106033B897E",
  "img":art4,
  "name":"smoking man",
  "like":1000,
  "price":2500,
  "mobile":"0178*****48",
  "address":"16501 Collins Ave, Sunny lsles Beach, FL 33160, United States",
  "status":"Confirmed"
  
},
{ 
  "orderId":"106033B897E",
  "img":art1,
  "name":"mona Lisa",
  "like":2000000,
  "price":3680,
  "mobile":"0178*****48",
  "address":"16501 Collins Ave, Sunny lsles Beach, FL 33160, United States",
  "status":"Assigned to rider"
  
},{
  "orderId":"106033B897E",
  "img":art2,
  "name":"Starry Night",
  "like":1000,
  "price":2500,
  "mobile":"0178*****48",
  "address":"16501 Collins Ave, Sunny lsles Beach, FL 33160, United States",
  "status":"canceled"
  
},
{ 
  "orderId":"106033B897E",
  "img":art3,
  "name":"beauty girl",
  "like":2000000,
  "price":3680,
  "mobile":"0178*****48",
  "address":"16501 Collins Ave, Sunny lsles Beach, FL 33160, United States",
  "status":"Confirmed"
  
},{
  "orderId":"106033B897E",
  "img":art4,
  "name":"smoking man",
  "like":1000,
  "price":2500,
  "mobile":"0178*****48",
  "address":"16501 Collins Ave, Sunny lsles Beach, FL 33160, United States",
  "status":"delivered"
  
}]

const name="Hasan"
const username="hasan" 
const email="ismailhosen1006@gmail.com"
const mobile="01789828149"
const bio="An artist is a person engaged in an activity related to creating art, practicing the arts, or demonstrating an art. The most common usage (in both everyday speech and academic discourse) refers to a practitioner in the visual arts only."
const address="Dhaka,Bangladesh"
const facebook="https://www.facebook.com/profile.php?id=100075446262873"
const instagram="https://www.instagram.com/hasan._al_banna/"
const linkedin="https://www.linkedin.com/in/md-ismail-hosen-81b176276/"
const twitter=""

export default function ProfileArtist() {
  const navigate =useNavigate()
  const [order,setorder]=useState(false)
  const [getProfileImage,setgetProfileImage]=useState("")
  const handleProfileImage=(path)=>{
    setgetProfileImage(path)
  }
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
                <img src={profile_img} className={styles.profile_img}/>
                </label>
                <input type="file" accept="image/jpeg, image/png, image/jpg" id="img_input" className={styles.input_for_img} onChange={(e)=>handleProfileImage(e.target.files[0])}/>
                <button className={styles.logout_btn} onClick={() => {window.localStorage.removeItem("login"); navigate("/");}}>Logout</button>
              </div>
                <ArtistInfoFrom name={name} username={username} email={email} mobile={mobile} bio={bio} address={address} facebook={facebook} instagram={instagram} linkedin={linkedin} twitter={twitter}/>
            </div>
            <PostArtFrom/>
            <div className={styles.timeline}>
            <div className={styles.timeline_title}>
                   <p className={styles.timeline_title_p}>TimeLine </p>
                   <div className={styles.timeline_title_desgin}></div>
            </div>
            <div className={styles.timeline_card}>
                 {card_datas.map((item,i)=> <ArtistTimeline card_data={item} key={i}/>)}
            </div>
            </div>
        </>
      
      }
      </div>
  )
}
