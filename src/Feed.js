import React from "react";
import "./Feed.css";
import { useState, useEffect } from "react";
import InputOption from "./InputOption";
import CreateIcon from "@mui/icons-material/Create";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ImageIcon from "@mui/icons-material/Image";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    // db.collection("posts").add({
    //   name: user.displayName,
    //   description: user.email,
    //   message: input,
    //   photoUrl: user.photoUrl || "",
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    // });
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOption">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption
            Icon={SubscriptionsIcon}
            title="Video"
            color="#7E7A33E"
          />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/* posts */}
      {posts.map((post) => (
        <post />
      ))}
      <Post name="Abhishek" description="this is a test" message="Good job." />
    </div>
  );
}

export default Feed;
