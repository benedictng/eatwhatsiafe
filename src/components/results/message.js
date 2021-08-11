import React from "react";

const message = ({ is_conclusive }) => {
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
    </div>
  );
};

export default message;
