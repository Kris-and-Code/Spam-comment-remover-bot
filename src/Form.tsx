import React, { useState } from 'react';
import YouTube from 'react-youtube';
import './Form.css';

interface FormData {
    youtubeUrl: string;
  }
  const getYouTubeVideoId = (url: string): string => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : '';
  };

  const Form: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
      youtubeUrl: '',
      videoPreviewVisible: false,
    });
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log('Form data:', formData);
      // Here comes the on submit action  ie, video preview and user authentication
    };
  
    const setVideoPreviewVisible = () => { // Defined missing function
      setFormData({ ...formData, videoPreviewVisible: true });
    };
  
    return (
      <div className='formstyle'>
        <span className='row'>
          <div className='col-4'> {/* Added hyphen for valid class name */}
            <form onSubmit={handleSubmit}>
              <label htmlFor="youtubeUrl">YouTube URL:</label>
              <div className='urlstyle'>
                <input
                  type="url"
                  id="youtubeUrl"
                  value={formData.youtubeUrl}
                  onChange={(e) => {
                    setFormData({ ...formData, youtubeUrl: e.target.value });
                    setVideoPreviewVisible(); // Call the correct function
                  }}
                />
                {formData.youtubeUrl && formData.videoPreviewVisible && (
                  <YouTube
                    videoId={getYouTubeVideoId(formData.youtubeUrl)}
                    opts={{
                      // Customize preview options as needed
                      width: '560',
                      height: '315',
                      playerVars: {
                        autoplay: 0,
                      },
                    }}
                  />
                )}
                <br />
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
  
          <div className='col-8'> {/* Added hyphen for valid class name */}
            Youtube video preview
          </div>
        </span>
      </div>
    );
  };
  
  export default Form;