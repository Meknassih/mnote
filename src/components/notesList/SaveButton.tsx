import React from "react";

interface SaveButtonProps {
    onClick: Function
}

export default class SaveButton extends React.Component<SaveButtonProps> {
    render() {
        return <button onClick={() => this.props.onClick()}>Save</button>
    }
}