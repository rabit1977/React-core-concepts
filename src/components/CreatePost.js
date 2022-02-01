import React, { useState } from 'react';

function CreatePost() {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  return (
    <div>
      <h1>Create New Post</h1>
      <form>
        <input
          type='text'
          placeholder='Add Post Content'
          onChange={(event) => setContent(event.target.value)}
        />
        <br />
        <br />
        <input
          type='file'
          onChange={(event) => setImage(event.target.files[0])}
        />
        <button type='submit'>Submit Post</button>
      </form>
      <p>{content}</p>
      {image && (
        <img
          style={{ height: 100, width: 200, objectFit: 'cover' }}
          src={URL.createObjectURL(image)}
          alt=''
        />
      )}
    </div>
  );
}

export default CreatePost;
