// import { render } from '@testing-library/react';
// import React, { Component, useState } from 'react';



// const ImgUpload = () => {

//     const [ title, setTitle ] = useState("");
//     const [ img, setImg ] = useState();

//     const newPhoto = () => {
//         const uploadData = new FormData();
//         uploadData.append('title', title);
//         uploadData.append('img', img, img.name);
        
//         fetch('http://localhost:5000//photos/', {
//             method: 'POST',
//             body: uploadData
//         })
//         .then( res => console.log(res))
//         .catch(error => console.log(error))
//     }


//     return (
//         <div className="App">
//             <h3>Upload images with React</h3>
//             <label>
//                 Title
//                 <input type="text" value={title} onChange={(evt) => setTitle(evt.target.value)}/>
//             </label>
//             <br/>
//             <label>
//                 Image
//                 <input type="file" onChange={(evt) => setImg(evt.target.files[0])}/>
//             </label>
//             <br/>
//             <button onClick={() => newPhoto()}>New Photo</button>
//         </div>
//       );
// }


// export default ImgUpload
