import React, { useState } from 'react';
import YouTube from 'react-youtube';
import './Form.css';
import ThumbnailGenerator from './YouTube';

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
    
    });
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log('Form data:', formData);
      // Here comes the on submit action  ie, video preview and user authentication
    };
  
    
  
    return (
      <div className='formstyle'>
        <span className='row'>
          <div className='col-4'> 
            <form onSubmit={handleSubmit}>
              <label htmlFor="youtubeUrl">YouTube URL:</label>
              <div className='urlstyle'>
              <div className="App">
      <h1>YouTube Thumbnail Generator</h1>
      <ThumbnailGenerator />
    </div>
                
                <br />
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
  
          <div className='col-8'> 
            Youtube video preview
          </div>
        </span>
      </div>
    );
  };
  
  export default Form;