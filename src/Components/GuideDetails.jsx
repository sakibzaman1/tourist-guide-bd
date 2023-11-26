import React from 'react';
import { useParams } from 'react-router-dom';

const GuideDetails = () => {

    const {name} = useParams();
    return (
        <div>
            <h1>Guide Profile of {name}</h1>
            <h1></h1>
        </div>
    );
};

export default GuideDetails;