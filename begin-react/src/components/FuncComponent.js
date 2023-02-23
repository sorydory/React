import React from "react";
const FuncComponent = ( props ) => {
    const {name,childeren} = props;
    return(
        <div>{name} {childeren}</div>
    )
}
FuncComponent.defaultProps = {
    name: "aaaaa"
}
export default FuncComponent;