import { useEffect, useState } from "react";
import "./AddVideo.css";

const initialState = {
  time: "2 year Ago",
  channel: "Coder Dost",
  verified: false,
  title: "",
  views: "",
};

function AddVideo({ addVideos  ,editableVideo , UpdateVideo}) {
  const [video, setVideo] = useState(initialState);
  function handleSubmit(e) {
    e.preventDefault();
    if(editableVideo)
    {
      UpdateVideo(video);
    }
    else{

      addVideos(video);
    }
    setVideo(initialState);
    // console.log(video);
  }
  function handleChange(e) {
    // console.log(e.target.name, e.target.value);
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  useEffect(()=> {
    if(editableVideo)
    {
      setVideo(editableVideo);
    }
  } , [editableVideo]);
  return (
    <form>
      <input
        type="text"
        onChange={handleChange}
        placeholder="title"
        name="title"
        value={video.title}
      ></input>
      <input
        type="text"
        onChange={handleChange}
        placeholder="views"
        name="views"
        value={video.views}
      ></input>
      <button onClick={handleSubmit}> {editableVideo ? 'Edit' : 'Add'} Video</button>
    </form>
  );
}
export default AddVideo;
