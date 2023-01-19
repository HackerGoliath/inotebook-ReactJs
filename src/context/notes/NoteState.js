import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "63c7d94463e55b172871ae51",
            "user": "63c691c43d724204a5073954",
            "title": "Take Lunch",
            "description": "Please take Lunch",
            "tag": "personal",
            "date": "2023-01-18T11:34:28.350Z",
            "__v": 0
        },
        {
            "_id": "63c7d96563e55b172871ae53",
            "user": "63c691c43d724204a5073954",
            "title": "Playlist",
            "description": "Please access playlist",
            "tag": "YouTube",
            "date": "2023-01-18T11:35:01.454Z",
            "__v": 0
        },
        {
            "_id": "63c7d94463e55b172871ae51",
            "user": "63c691c43d724204a5073954",
            "title": "Take Lunch",
            "description": "Please take Lunch",
            "tag": "personal",
            "date": "2023-01-18T11:34:28.350Z",
            "__v": 0
        },
        {
            "_id": "63c7d96563e55b172871ae53",
            "user": "63c691c43d724204a5073954",
            "title": "Playlist",
            "description": "Please access playlist",
            "tag": "YouTube",
            "date": "2023-01-18T11:35:01.454Z",
            "__v": 0
        },
        {
            "_id": "63c7d94463e55b172871ae51",
            "user": "63c691c43d724204a5073954",
            "title": "Take Lunch",
            "description": "Please take Lunch",
            "tag": "personal",
            "date": "2023-01-18T11:34:28.350Z",
            "__v": 0
        },
        {
            "_id": "63c7d96563e55b172871ae53",
            "user": "63c691c43d724204a5073954",
            "title": "Playlist",
            "description": "Please access playlist",
            "tag": "YouTube",
            "date": "2023-01-18T11:35:01.454Z",
            "__v": 0
        },
        {
            "_id": "63c7d94463e55b172871ae51",
            "user": "63c691c43d724204a5073954",
            "title": "Take Lunch",
            "description": "Please take Lunch",
            "tag": "personal",
            "date": "2023-01-18T11:34:28.350Z",
            "__v": 0
        },
        {
            "_id": "63c7d96563e55b172871ae53",
            "user": "63c691c43d724204a5073954",
            "title": "Playlist",
            "description": "Please access playlist",
            "tag": "YouTube",
            "date": "2023-01-18T11:35:01.454Z",
            "__v": 0
        },
        {
            "_id": "63c7d94463e55b172871ae51",
            "user": "63c691c43d724204a5073954",
            "title": "Take Lunch",
            "description": "Please take Lunch",
            "tag": "personal",
            "date": "2023-01-18T11:34:28.350Z",
            "__v": 0
        },
        {
            "_id": "63c7d96563e55b172871ae53",
            "user": "63c691c43d724204a5073954",
            "title": "Playlist",
            "description": "Please access playlist",
            "tag": "YouTube",
            "date": "2023-01-18T11:35:01.454Z",
            "__v": 0
        },
        {
            "_id": "63c7d94463e55b172871ae51",
            "user": "63c691c43d724204a5073954",
            "title": "Take Lunch",
            "description": "Please take Lunch",
            "tag": "personal",
            "date": "2023-01-18T11:34:28.350Z",
            "__v": 0
        },
        {
            "_id": "63c7d96563e55b172871ae53",
            "user": "63c691c43d724204a5073954",
            "title": "Playlist",
            "description": "Please access playlist",
            "tag": "YouTube",
            "date": "2023-01-18T11:35:01.454Z",
            "__v": 0
        },
        {
            "_id": "63c7d94463e55b172871ae51",
            "user": "63c691c43d724204a5073954",
            "title": "Take Lunch",
            "description": "Please take Lunch",
            "tag": "personal",
            "date": "2023-01-18T11:34:28.350Z",
            "__v": 0
        },
        {
            "_id": "63c7d96563e55b172871ae53",
            "user": "63c691c43d724204a5073954",
            "title": "Playlist",
            "description": "Please access playlist",
            "tag": "YouTube",
            "date": "2023-01-18T11:35:01.454Z",
            "__v": 0
        },
        {
            "_id": "63c7d94463e55b172871ae51",
            "user": "63c691c43d724204a5073954",
            "title": "Take Lunch",
            "description": "Please take Lunch",
            "tag": "personal",
            "date": "2023-01-18T11:34:28.350Z",
            "__v": 0
        },
        {
            "_id": "63c7d96563e55b172871ae53",
            "user": "63c691c43d724204a5073954",
            "title": "Playlist",
            "description": "Please access playlist",
            "tag": "YouTube",
            "date": "2023-01-18T11:35:01.454Z",
            "__v": 0
        },
        {
            "_id": "63c7d94463e55b172871ae51",
            "user": "63c691c43d724204a5073954",
            "title": "Take Lunch",
            "description": "Please take Lunch",
            "tag": "personal",
            "date": "2023-01-18T11:34:28.350Z",
            "__v": 0
        },
        {
            "_id": "63c7d96563e55b172871ae53",
            "user": "63c691c43d724204a5073954",
            "title": "Playlist",
            "description": "Please access playlist",
            "tag": "YouTube",
            "date": "2023-01-18T11:35:01.454Z",
            "__v": 0
        },
    ]
    const [notes, setNotes] = useState(notesInitial)

    return (
        // state,update is same as : state:state update:update
        <noteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;