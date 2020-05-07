import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={s.item}>
      <div>
        <img
          alt=""
          src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg"
        />
      </div>
      <div className={s.descriptionBlock}>AVA + DESC</div>
    </div>
  );
};

export default ProfileInfo;
