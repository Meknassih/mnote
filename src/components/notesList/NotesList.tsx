import React from "react";
import { Note } from '../../controllers/storage.controller';
import NoteParentItem from './NoteParentItem';

interface NotesListProps {
    onNoteSelected: Function;
    notes: Note[];
}

export default class NotesList extends React.Component<NotesListProps> {
    recursiveRenderItem(rootItem: Note) {
        return <NoteParentItem item={rootItem} key={rootItem.name} onSelected={(note: Note) => this.props.onNoteSelected(note)}>
            {Array.isArray(rootItem.children)
                ? rootItem.children.map((item) => this.recursiveRenderItem(item))
                : null}
        </NoteParentItem>
    }

    renderParentItems(items: Note[]) {
        if (items)
            return items.map(item => this.recursiveRenderItem(item))
        else
            return <p>Loading...</p>
    }

    render() {
        return <div className='mr-2 mt-2 p-2 rounded-md'>
            <h1>Notes</h1>
            {this.renderParentItems(this.props.notes)}
        </div>;
    }
}