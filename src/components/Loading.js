import React from "react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center mt-2">
        <div className="spinner-grow text-info" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  );
};

export default Loading;