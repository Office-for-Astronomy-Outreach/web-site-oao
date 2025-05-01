import React from "react";

// YoutubePlaylist.js
function YoutubePlaylist({ playlistId }: { playlistId: string }) {
  return (
    <iframe
      className="aspect-video w-full shadow-md relative rounded-lg"
      src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
      title="YouTube Playlist"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
}

export default YoutubePlaylist;
