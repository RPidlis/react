import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = ({profile, status, updateStatus}) => {
    if(!profile){
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
          <img src={profile.photos.large} alt=""/>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
          <div>
              ABOUT me:
              {profile.aboutMe}
          </div>
          <div>

          </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
