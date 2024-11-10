import styles from "./ProfileArtist.module.css"
import profile_img from "../../../assets/Hasan.jpg"

import ArtistInfoFrom from "./ArtistInfoFrom"
import { Link, useNavigate } from "react-router-dom"
import PostArtFrom from "./PostArtFrom"
export default function ProfileArtist() {
  const navigate =useNavigate()
  return (
    <div className={styles.profile_artist}>
      <div className={styles.back_home}>
        <p>Back to&ensp;</p>
        <Link to="/"> Home</Link>
        <p>&ensp;/&ensp;</p>
        <p 
          className={styles.logout_link}
          onClick={()=>{
          window.localStorage.removeItem('login') 
          navigate("/")}}
        >Logout</p>
      </div>
      <div className={styles.profile_info}>
          <img src={profile_img} className={styles.profile_img}/>
          <ArtistInfoFrom name={"Hasan"} username={"hasan"} email={"ismailhosen1006@gmail.com"} mobile={"01789828149"} bio={"An artist is a person engaged in an activity related to creating art, practicing the arts, or demonstrating an art. The most common usage (in both everyday speech and academic discourse) refers to a practitioner in the visual arts only."} address={"Dhaka,Bangladesh"}/>
      </div>
      <PostArtFrom/>
      </div>
  )
}
