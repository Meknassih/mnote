import React from "react";
import { Note } from '../../controllers/storage.controller';

interface NoteItemProps {
    item: Note,
    icon?: string
}
export default class NoteItem extends React.Component<NoteItemProps> {
    render() {
        return <div className=' active:bg-slate-300 hover:bg-slate-100 rounded-md py-1 px-2 cursor-pointer my-1  focus-within:bg-slate-200 select-none max-w-full w-fit' tabIndex={0}>
            {this.props.icon && <span className='pr-2 text-slate-600'>{this.props.icon}</span>}
            <span>{this.props.item.name}</span>
        </div>;
    }
}