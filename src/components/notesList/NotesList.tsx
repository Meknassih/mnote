import React from "react";
import { Note } from '../../controllers/storage.controller';
import NoteParentItem from './NoteParentItem';

interface NotesListProps {
    onNoteSelected: Function;
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
        return items.map(item => this.recursiveRenderItem(item))
    }

    sampleData = [{
        "time": 1647208089881,
        "blocks": [
            {
                "id": "auieac.xy-P5",
                "type": "paragraph",
                "data": {
                    "text": "text 1"
                }
            }
        ],
        "version": "2.23.2"
    }, {
        "time": 1647208089881,
        "blocks": [
            {
                "id": "eiucsrldôn-P5",
                "type": "paragraph",
                "data": {
                    "text": "text 2"
                }
            }
        ],
        "version": "2.23.2"
    }, {
        "time": 1647208089881,
        "blocks": [
            {
                "id": "ieuuie-P5",
                "type": "paragraph",
                "data": {
                    "text": "text 3"
                }
            }
        ],
        "version": "2.23.2"
    },]
    sampleTree: Note[] = [{
        name: "Note 1", data: this.sampleData[0], children: [
            { name: "Subnote 1.1", data: this.sampleData[1], children: [] },
            {
                name: "Subnote 1.2", data: this.sampleData[2], children: [
                    { name: "Subnote 1.2.1", data: this.sampleData[0], children: [] }
                ]
            },
            { name: "Subnote 1.3", data: this.sampleData[1], children: [] },
        ]
    },
    {
        name: "Note 2", data: this.sampleData[0], children: [
            { name: "Subnote 2.1", data: this.sampleData[2], children: [] },
            {
                name: "Subnote 2.2", data: this.sampleData[0], children: [
                    { name: "Subnote 2.2.1", data: this.sampleData[1], children: [] }
                ]
            },
            { name: "Subnote 2.3", data: this.sampleData[2], children: [] },
        ]
    }]
    render() {
        return <div className='mr-2 mt-2 p-2 rounded-md'>
            <h1>Notes</h1>
            {this.renderParentItems(this.sampleTree)}
        </div>;
    }
}