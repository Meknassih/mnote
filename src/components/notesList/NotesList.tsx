import React from "react";
import { Note } from '../../controllers/storage.controller';
import AddNoteButton from './AddNoteButton';
import NoteParentItem from './NoteParentItem';

interface NotesListProps {
    onNoteSelected: Function;
    onAddNote: Function;
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

    onAddNote() {
        // TODO: Add fake element at end of list and autofocus input to rename
        // TODO: Call this.props.onAddNote(name) with the name of the new note
    }

    render() {
        return <div className='mr-2 mt-2 p-2'>
            <div className="flex flex-row items-center justify-between">
                <h1>Notes</h1><AddNoteButton onClick={() => this.onAddNote()} />
            </div>
            {this.renderParentItems(this.props.notes)}
        </div>;
    }
}