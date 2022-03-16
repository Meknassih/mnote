import React from "react";
import { Note } from '../../controllers/storage.controller';
import NoteItem from './NoteItem';

interface NoteParentItemProps {
    item: Note;
    onSelected?: Function;
}
interface NoteParentItemState {
    isExpanded: boolean;
}

export default class NoteParentItem extends React.Component<NoteParentItemProps, NoteParentItemState> {
    constructor(props: NoteParentItemProps) {
        super(props)
        this.state = { isExpanded: false }
    }

    toggleExpansion() {
        this.setState({ isExpanded: !this.state.isExpanded })
        this.props.onSelected(this.props.item)
    }

    render() {
        return <>
            <div onClick={() => this.toggleExpansion()}>
                <NoteItem item={this.props.item} icon={React.Children.count(this.props.children) > 0 ? "+" : ""}></NoteItem>
            </div>
            <div className={`${this.state.isExpanded ? "opacity-100" : "opacity-0 hidden"} relative left-2`}>
                {this.props.children}
            </div>
        </>
    }
}