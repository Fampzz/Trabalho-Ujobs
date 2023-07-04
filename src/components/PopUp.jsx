import React, { useEffect, useState } from 'react';

const PopUp = ({ content, onClose }) => {
    return (
        <div>
            <div className="popup">
            <button className='close-button' onClick={onClose}>X</button>
                <div className='popup-content'>
                    <h2>Entre em contato com o freelancer pelo email:</h2>
                    <br/>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default PopUp;