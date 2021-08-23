import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const message = ({ is_conclusive }) => {
  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }
  console.log(window.location.href);
  return (
    <div>
      <p className="h0">
        CONGRATULATIONS,<br></br>SUCKERS.
      </p>
      {is_conclusive && <p>A decision has been made. Finally.</p>}
      {!is_conclusive && (
        <p>
          Eh... The results wasn't conclusive but who the F cares, we picked
          this for you.
        </p>
      )}
      <Container>
        <Col>
          <p>{window.location.href}</p>
        </Col>
        <Col>
          <button onClick={copy}>Copy URL</button>
        </Col>
      </Container>
    </div>
  );
};

export default message;
