// import React from 'react';
// // import validate from './validateInfo';
// import useFormSignIn from './useFormSignIn';
// import '../Form.css';

// const TripForm = ({ submitForm }) => {
//     const { handleChange, handleSubmit, values, errors } = useFormSignIn(
//         submitForm
//     );

//     return (
//         <div className='form-content'>
//         <form onSubmit={handleSubmit} className='form' noValidate>
//             <h1>
//             Please share with us about your trip
//             </h1>
//             <div className='form-inputs'>
//                 <label className='form-label'>Trip Name</label>
//                 <input
//                     className='form-input'
//                     type='text'
//                     name='tripname'
//                     // when you click on lable this will highlight corresponding input area:
//                     id='tripname'
//                     placeholder='Enter your Trip Name'
//                     value={values.tripname}
//                     onChange={handleChange}
//                 />
//                 {errors.tripname && <p>{errors.username}</p>}
//             </div>
//             <div className='form-inputs'>
//                 <label className='form-label'>Country</label>
//                 <input
//                     className='form-input'
//                     type='text'
//                     name='country'
//                     // when you click on lable this will highlight corresponding input area:
//                     id='country'
//                     placeholder='Enter your country'
//                     value={values.country}
//                     onChange={handleChange}
//                 />
//                 {errors.country && <p>{errors.country}</p>}
//             </div>
//                 <div className='form-inputs'>
//                 <label className='form-label'>Description</label>
//                 <input
//                     className='form-input'
//                     // this type hides chars as *s
//                     type='text'
//                     name='description'
//                     // when you click on lable this will highlight corresponding input area:
//                     id='description'
//                     placeholder='Enter your description'
//                     value={values.description}
//                     onChange={handleChange}
//                 />
//                 {errors.description && <p>{errors.description}</p>}
//             </div>
//                 <div className='form-inputs'>
//                 <label className='form-label'>Photo</label>
//                 <input
//                     className='form-input'
//                     type='text'
//                     name='photo'
//                     // when you click on lable this will highlight corresponding input area:
//                     id='photo'
//                     placeholder='Please upload your photo'
//                     value={values.photo}
//                     onChange={handleChange}
//                 />
//                 {errors.photo && <p>{errors.photo}</p>}
//             </div>
//             <button className='form-input-btn' type='submit'>
//             Save Your Trip
//             </button>
//         </form>
//         </div>
//     );
// };

// export default TripForm;