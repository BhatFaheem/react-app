import videosDB from "./data/data";
import "./App.css";
import { useState } from "react";
import AddVideo from "./componenets/AddVideo";
import VideoList from "./componenets/VideoList";
function App() {
  const [videos, setVideos] = useState(videosDB);
  const [editableVideo, setEditableVideo] = useState(null);

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }
  function deleteVideo(id) {
    setVideos(videos.filter(video=> video.id !== id));
  }
  function editVideo(id) {
    setEditableVideo(videos.find(video=> video.id === id));
  }
  function UpdateVideo(video)
  {
      const index = videos.findIndex(v =>v.id === video.id);
      const newVideos = [...videos];
      newVideos.splice(index , 1 , video);
      setVideos(newVideos);
      
  }
  return (
    <div
      className="App"
      onClick={() => {
        console.log("App");
      }}
    >
      <AddVideo addVideos={addVideos} UpdateVideo={UpdateVideo} editableVideo = {editableVideo}></AddVideo>
      <VideoList deleteVideo = {deleteVideo} editVideo = {editVideo} videos={videos}></VideoList>
    </div>
  );
}
export default App;
