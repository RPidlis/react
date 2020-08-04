import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userAva from '../../../assets/images/ava.png'

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if(!profile){
        return <Preloader />
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length){
            savePhoto(e.target.files[0])
        }
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
          <img src={profile.photos.large || userAva} alt=""/>
          {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
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
