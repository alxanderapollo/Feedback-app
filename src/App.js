import React from 'react';
import Header from './components/Header'
//jsw -> javascript xml
function App () {
    // const title = 'Blog Post'
    // const body = 'This is my blog post'

    // const Loading = false;
    // if(Loading) return <h1>Loading...</h1>

    // const showComments = false;

    // const comments = [
    //     {id:1, text:'Comment one'},
    //     {id:2, text: 'Comment two'},
    //     {id:3, text: 'Comment three'},
    // ];
    // <p>{body}</p>
    // {/* un ordered list of items w/ map */}
    // <ul>
    //     {comments.map((comment,index) => (
    //         <li key={comment.id}>{comment.text}</li>
    //     ))}
    // </ul>
  return (<>
    <div className="container">
        <Header/>
        <h1>My App</h1>
       
    </div>
  </>);
};

export default App;
