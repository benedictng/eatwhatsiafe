import React from "react";
import { resultsData } from "./results-data";
import Message from "./message";
import FirstPlace from "./first-place";
import SecondPlace from "./second-place";
import ThirdPlace from "./third-place";

import "./results.css";

import Container from "react-bootstrap/Container";

export const Results = () => {
    return (
        <>
            <div className="p-5 overflow">
                <Message is_conclusive={resultsData.data.results_conclusive} />
            </div>
            <Container className="winnercard p-5">
                <FirstPlace first_result={resultsData.data.results[0]} />
            </Container>
            <Container className="winnercard p-5">
                <SecondPlace second_result={resultsData.data.results[1]} />
            </Container>
            <Container className="winnercard p-5">
                <ThirdPlace third_result={resultsData.data.results[2]} />
            </Container>
            <Container></Container>
        </>
    );
};
