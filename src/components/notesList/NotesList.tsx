import React from "react";
import { Note } from '../../controllers/storage.controller';
import NoteItem from './NoteItem';
import NoteParentItem from './NoteParentItem';

export default class NotesList extends React.Component {
    recursiveRenderItem(rootItem: Note) {
        return <NoteParentItem item={rootItem} key={rootItem.name}>
            {Array.isArray(rootItem.children)
                ? rootItem.children.map((item) => this.recursiveRenderItem(item))
                : null}
        </NoteParentItem>
    }

    renderParentItems(items: Note[]) {
        return items.map(item => this.recursiveRenderItem(item))
    }
    sampleData = {
        "time": 1647208089881,
        "blocks": [
            {
                "id": "8ezairp-P5",
                "type": "paragraph",
                "data": {
                    "text": "hop"
                }
            }
        ],
        "version": "2.23.2"
    }
    sampleTree: Note[] = [{
        name: "Note 1", data: this.sampleData, children: [
            { name: "Subnote 1.1", data: this.sampleData, children: [] },
            {
                name: "Subnote 1.2", data: this.sampleData, children: [
                    { name: "Subnote 1.2.1", data: this.sampleData, children: [] }
                ]
            },
            { name: "Subnote 1.3", data: this.sampleData, children: [] },
        ]
    },
    {
        name: "Note 2", data: this.sampleData, children: [
            { name: "Subnote 2.1", data: this.sampleData, children: [] },
            {
                name: "Subnote 2.2", data: this.sampleData, children: [
                    { name: "Subnote 2.2.1", data: this.sampleData, children: [] }
                ]
            },
            { name: "Subnote 2.3", data: this.sampleData, children: [] },
        ]
    }]
    render() {
        return <div className='mr-2 mt-2 p-2 rounded-md'>
            <h1>Notes</h1>
            {this.renderParentItems(this.sampleTree)}
        </div>;
    }
}