import React from 'react';
import PostComponent from './PostComponent'
import { generateNum } from './Generator';

function Twitter() {
  const photos = ['https://i.ibb.co/yYK0g5Y/1-40.jpg', 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'];
  const images = ['https://images.unsplash.com/photo-1611771341253-dadb347165a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', 'https://images.unsplash.com/photo-1618355776464-8666794d2520?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGdyYWR1YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1518288774672-b94e808873ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80']
  const posts = [
    {
      id: generateNum(),
      author: {
        name: "Yana Kapustian",
        photo: photos[0],
        nickname: "@yana_kapustian",
      },
      content: "I was lucky to visit Norway this summer. The views were spectacular!",
      image: images[0],
      date: "15.07.2022",
    },
    {
      id: generateNum(),
      author: {
        name: "Emily Smith",
        photo: photos[1],
        nickname: "@girl_with_flowers",
        },
      content: "Finally graduated! Now I'm a bachelor of Computer Science!",
      image: images[1],
      date: "24.06.2022",
    },
    {
      id: generateNum(),
      author: {
        name: "Liam Weikko",
        photo: photos[2],
        nickname: "@stranger",
        },
      content: "Meet Rosie! My new cat!",
      image: images[2],
      date: "20.06.2022",
    },
  ]
  return (
    <div className='container-twitter'>
        {posts.map(post => <PostComponent data={post} key={post.id}></PostComponent>)}
    </div>
      
  );
}

export default Twitter;