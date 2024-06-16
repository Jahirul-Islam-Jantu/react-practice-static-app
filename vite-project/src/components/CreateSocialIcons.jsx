import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{socialIcons} from "../icons/data.js";


const CreateSocialIcons = () => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column mt-4">
            <h1>Social Icons</h1>
            <div className="d-flex">
                {socialIcons.map((item) => (
                    <div className="p-1" key={item.id}>
                        <FontAwesomeIcon icon={["fab", item.icon]}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CreateSocialIcons;