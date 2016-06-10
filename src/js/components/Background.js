import React from "react";
import ENV_VARS from "../../../config/ENV_VARS";

const Background = () => (
    <div className="background">
        <img src={ENV_VARS.BG_IMG_PATH}/>
    </div>
)

export default Background