import React, { useState } from 'react';
import YouTube from 'react-youtube';
import './Form.css';

const getYouTubeVideoId = (url: string): string => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : '';
};

const Form: React.FC = () => {
  const [formData, setFormData] = useState<{ youtubeUrl: string }>({
    youtubeUrl: '',
  });

  const [videoId, setVideoId] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const videoId = getYouTubeVideoId(formData.youtubeUrl);
    setVideoId(videoId);
  };

  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="formstyle">
      <span className="row">
        <div className="col-4">
          <form onSubmit={handleSubmit}>
            <label htmlFor="youtubeUrl">YouTube URL:</label>
            <div className="urlstyle">
              <input
                type="text"
                id="youtubeUrl"
                className="input-field"
                value={formData.youtubeUrl}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    youtubeUrl: e.target.value,
                  })
                }
              />
              <br />
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>

        <div className="col-8">
          {videoId && (
            <YouTube videoId={videoId} opts={opts} />
          )}
        </div>
      </span>
    </div>
  );
};

export default Form;