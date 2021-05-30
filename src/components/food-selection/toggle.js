import React from 'react'
import "./food-selection.css";
import Col from "react-bootstrap/Col";


const Toggle = () => {

    return (
        <div>
            <Col>
            <button> 
            <img src = "https://cdn.shopify.com/s/files/1/1061/1924/products/Drooling_Emoji_Icon_0ea27b99-ba08-410f-b078-94bba64c4efc_large.png?v=1571606089" 
            className = "selection"
            alt = "Yes" /> 
            </button>
            </Col>

            <Col>
            <button>
            <img src = "https://cdn.shopify.com/s/files/1/1061/1924/products/14_large.png?v=1571606116" 
            className = "selection"
            alt = "No" 
            />
            </button>
            </Col>
        </div>
    )
}

export default Toggle
