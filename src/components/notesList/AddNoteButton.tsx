import React from "react";
import { Plus } from 'react-feather';

interface AddNoteButtonProps {
    onClick: Function
}

export default class AddNoteButton extends React.Component<AddNoteButtonProps> {
    render() {
        return <button onClick={() => this.props.onClick()}>
            <Plus></Plus>
        </button>
    }
}