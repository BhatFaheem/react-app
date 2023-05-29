import videosDB from "./data/data";
import "./App.css";
import { useReducer, useState } from "react";
import AddVideo from "./componenets/AddVideo";
import VideoList from "./componenets/VideoList";
function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  }
  const [videos, dispatch] = useReducer(videoReducer, videosDB);
  // const [videos, setVideos] = useState(videosDB);
  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }
  return (
    <div
      className="App"
      onClick={() => {
        console.log("App");
      }}
    >
      <AddVideo dispatch={dispatch} editableVideo={editableVideo}></AddVideo>
      <VideoList
        dispatch={dispatch}
        editVideo={editVideo}
        videos={videos}
      ></VideoList>
    </div>
  );
}
export default App;
