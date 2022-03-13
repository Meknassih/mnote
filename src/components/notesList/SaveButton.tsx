import React from "react";

interface SaveButtonProps {
    onSave: Function
}

export default class SaveButton extends React.Component<SaveButtonProps> {
    render() {
        return <button onClick={() => this.props.onSave()}>Save</button>
    }
}