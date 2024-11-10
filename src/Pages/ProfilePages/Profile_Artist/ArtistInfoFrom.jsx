import styles from "./ArtistInfoFrom.module.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
export default function ArtistInfoFrom({
  name,
  username,
  email,
  mobile,
  bio,
  address,
}) {
  const [edit, setedit] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: name,
      mobile: mobile,
      bio: bio,
      address: address,
    },
    onSubmit: async (values) => {
      console.log(values);
    },
  });
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
        {edit ? (
          <button
            className={styles.btn}
            type="submit"
            onClick={() => setedit(false)}
          >
            Save
          </button>
        ) : (
          <div className={styles.edit_btn} onClick={() => setedit(true)}>
            Edit <MdOutlineModeEditOutline />
          </div>
        )}
      </form>
    </div>
  );
}
