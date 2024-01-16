import React from "react";
import "../styles/SocialLink.css";

function SocialLink({ link, icon, alt }) {
    return (
        <figure className="social-link">

            <a href={link}>
                <img className="social-link-icon"
                    src={require(`../icons/${icon}.svg`)}
                    alt={alt} />
            </a>

        </figure>
    );
}

export default SocialLink;