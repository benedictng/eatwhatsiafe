import React from "react";
import { resultsData } from "./results-data";
import Message from "./message";
import FirstPlace from "./first-place";

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
    </>
  );
};
