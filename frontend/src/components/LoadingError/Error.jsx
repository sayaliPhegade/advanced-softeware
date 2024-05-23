import React from "react";

const Message = ({
    variant, children
}) =>{
    return(
        <div className={`alert ${variant}`}>{children}</div>
    )
};

Message.defaultProops ={
    variant : "alert-info",
};

export default Message;