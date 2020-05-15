import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
  return (
    <div className={s.item}>
      <div>
        <img
          alt=""
          src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg"
        />
      </div>
      <div className={s.descriptionBlock}>
          <img src={props.profile.photos.large} alt=""/>
          <div>
              ABOUT me:
              {props.profile.aboutMe}
          </div>
          <div>

          </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
