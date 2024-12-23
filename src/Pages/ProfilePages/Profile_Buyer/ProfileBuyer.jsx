import styles from "../Profile_Artist/ProfileArtist.module.css"
import thisStyles from "./ProfileBuyer.module.css"
import profile_img from "../../../assets/Hasan.jpg"
import a41 from "../../../assets/a41.jpg"
import a42 from "../../../assets/a42.jpeg"
import a43 from "../../../assets/a43.jpeg"
import a44 from "../../../assets/a44.jpg"
import a45 from "../../../assets/a45.jpg"

import ArtistInfoFrom from "../Profile_Artist/ArtistInfoFrom"
import { Link, useNavigate } from "react-router-dom"
import { FaClipboardList } from "react-icons/fa6";
import ProfileOrder from "../../Global_Components/OrderForProfile/ProfileOrder";

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
  "img":a45,
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

export default function ProfileBuyer() {
  const navigate =useNavigate()
  return (
    <div className={styles.profile_artist}>
      <div className={styles.back_home}>
        <p>Back to&ensp;</p>
        <Link to="/"> Home</Link>
      </div>
      <div className={styles.profile_info}>
        <div>
          <img src={profile_img} className={styles.profile_img}/>
          <button className={styles.logout_btn} onClick={() => {window.localStorage.removeItem("login"); navigate("/");}}>Logout</button>
        </div>
          <ArtistInfoFrom name={"Hasan"} username={"hasan"} email={"ismailhosen1006@gmail.com"} mobile={"01789828149"} bio={"An artist is a person engaged in an activity related to creating art, practicing the arts, or demonstrating an art. The most common usage (in both everyday speech and academic discourse) refers to a practitioner in the visual arts only."} address={"Dhaka,Bangladesh"}/>
      </div>
      <div className={styles.timeline}>
      <div className={styles.timeline_title}>
             <p className={styles.timeline_title_p}>Orders history </p>
             <div className={styles.timeline_title_desgin}></div>
      </div>
      <div className={thisStyles.profile_order}>
        {orderData.map((item,i)=><ProfileOrder key={i} orderData={item}/>)}
      </div>
      </div>
      </div>
  )
}
