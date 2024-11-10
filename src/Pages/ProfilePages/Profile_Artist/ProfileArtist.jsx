import styles from "./ProfileArtist.module.css"
import profile_img from "../../../assets/Hasan.jpg"
import img from "../../../assets/art_img.jpg"

import ArtistInfoFrom from "./ArtistInfoFrom"
import { Link, useNavigate } from "react-router-dom"
import PostArtFrom from "./PostArtFrom"
import ArtistTimeline from "./ArtistTimeline"
import { FaClipboardList } from "react-icons/fa6";

const card_datas=[{
  "img":img,
  "name":"hello Name1",
  "like":2300,
  "price":790,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},
  {
  "img":img,
  "name":"hello Name2",
  "like":999,
  "price":250,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},{
  "img":img,
  "name":"hello Name3",
  "like":20000,
  "price":290,
  "available":"Not Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},{
  "img":img,
  "name":"hello Name4",
  "like":1000,
  "price":2500,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},
{ "img":img,
  "name":"hello Name5",
  "like":2000000,
  "price":3680,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},{
  "img":img,
  "name":"hello Name4",
  "like":1000,
  "price":2500,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},
{ "img":img,
  "name":"hello Name5",
  "like":2000000,
  "price":3680,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},{
  "img":img,
  "name":"hello Name4",
  "like":1000,
  "price":2500,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},
{ "img":img,
  "name":"hello Name5",
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
