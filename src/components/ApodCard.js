import React from "react";
import styled from "styled-components";

import {
    Card,
    Col
  } from "reactstrap";

const ApodCard = props => {

    const ApodImage = styled.img`
        width: 100%;
        height: auto;
        object-fit: scale-down;
    `;

    return (
        <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card>
                <h2 className="display-5">{props.title}</h2>
                <ApodImage alt="picture of the galaxy" src={props.hdurl} />
                <h2>{props.date}</h2>
                <p>{props.explanation}</p>
            </Card>
        </Col>
    );
};

export default ApodCard;