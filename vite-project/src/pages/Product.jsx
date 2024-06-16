import React from 'react';
import {itemDetails} from '../icons/listItem.js';

const Product = () => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column mt-3">
            <h2>Bread Crumbs</h2>
                <div className="breadcrumbs">
                     {itemDetails.breadcrumbs.map((item, index) => (
                        <React.Fragment className='d-flex ' key={index}>
                            <a target={"_blank"} className="text-decoration-none text-info-emphasis" href={item.link}>{item.text} </a>
                            {index < itemDetails.breadcrumbs.length -1 && (
                                <span> {"  /  "} </span>
                            )}
                         </React.Fragment>

                     ))}
                </div>
        </div>
    );
};

export default Product;