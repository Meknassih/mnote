import React from "react";
import { Note } from '../../controllers/storage.controller';

interface NoteItemProps {
    item: Note,
    icon?: string
}
export default class NoteItem extends React.Component<NoteItemProps> {
    render() {
        return <div className='bg-slate-200 hover:bg-slate-100 rounded-md py-1 px-2 cursor-pointer my-1'>
            <span className='pr-4 text-slate-600'>{this.props.icon || ""}</span><span>{this.props.item.name}</span>
        </div>;
    }
}