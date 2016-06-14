import React from "react";
import github_img from "../../resources/img/github.png"
import travis_img from "../../resources/img/travis.png"

const Footer = () => (
    <div className="footer">
        <div className="links">
            <div className="github">
                <a href="https://github.com/swing-deepdive/blobs"><img src={github_img}/></a>
            </div>
            <div className="travis">
                <a href="https://travis-ci.org/swing-deepdive/blobs"><img src={travis_img}/></a>
            </div>
        </div>
    </div>
)

export default Footer