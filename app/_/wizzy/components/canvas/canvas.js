import React from "react";

const Canvas = ({ children }) => {
    return (
        <div id="canvas" className="dnd-area">
            {children}
        </div>
    );
};

export default Canvas;
