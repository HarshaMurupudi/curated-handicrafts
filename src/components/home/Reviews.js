import React from 'react';
import { connect } from 'react-redux';

import { toggleDarkMode } from '../state/app';

function Reviews() {
  return (
    <section id="reviews-section" className="overlay text-center d-flex justify-content-center align-items-center text-white">
      <div>
        <h2>Reviews</h2>
        <div className="reviews">
          <p>Comming Soon</p>
        </div>

        <button></button>
      </div>
    </section>
  )
}

export default Reviews;


// <section id="reviews-section" className="overlay text-center d-flex justify-content-center align-items-center text-white">
//   <div>
//     <h2>Reviews</h2>
//     <div className="reviews">
//       <p>Comming Soon</p>
//     </div>

//     <button
//       style={isDarkMode ? { background: 'black', color: 'white' } : null}
//       onClick={() => dispatch(toggleDarkMode(!isDarkMode))}>Dark mode {isDarkMode ? 'on' : 'off'}
//     </button>
//   </div>
// </section>