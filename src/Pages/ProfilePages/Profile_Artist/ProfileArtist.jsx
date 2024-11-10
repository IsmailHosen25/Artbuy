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



export default function ProfileArtist() {
  const navigate =useNavigate()
  return (
    <div className={styles.profile_artist}>
      <div className={styles.back_home}>
        <p>Back to&ensp;</p>
        <Link to="/"> Home</Link>
        <p>&ensp;/&ensp;</p>
        <p className={styles.artist_order}> <FaClipboardList/> Order</p>
      </div>
      <div className={styles.profile_info}>
        <div>
          <img src={profile_img} className={styles.profile_img}/>
          <button className={styles.logout_btn} onClick={() => {window.localStorage.removeItem("login"); navigate("/");}}>Logout</button>
        </div>
          <ArtistInfoFrom name={"Hasan"} username={"hasan"} email={"ismailhosen1006@gmail.com"} mobile={"01789828149"} bio={"An artist is a person engaged in an activity related to creating art, practicing the arts, or demonstrating an art. The most common usage (in both everyday speech and academic discourse) refers to a practitioner in the visual arts only."} address={"Dhaka,Bangladesh"}/>
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
      </div>
  )
}
