import React from "react";

const Loading = () => {
  return (
    <div class="d-flex justify-content-center mt-2">
        <div class="spinner-grow text-info" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
  );
};

export default Loading;