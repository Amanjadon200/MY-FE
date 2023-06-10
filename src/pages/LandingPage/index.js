import React, { useEffect, useState } from 'react';
const LandingPage = () => {
  // const [state, setState] = useState();
  // const timeout = () => {
  //   return new Promise(function (myResolve, myReject) {
  //     setTimeout(() => {
  //       myResolve(); // when successful
  //     }, 1000);
  //     // when error
  //   });
  // };
  // useEffect(() => {
  //   let isCancel = false;
  //   async function handleChange() {
  //     await timeout();
  //     if (!isCancel)
  //       alert('hi your name is ' + state);
  //   }
  //   handleChange();
  //   console.log('object');
  //   return () => {
  //     isCancel = true;
  //   };
  // }, [state]);
  return (
    <div>
      {/* <input className='border-2  p-2 ml-96 mt-48 border-black' placeholder='enter' value={state} onChange={(e) => { setState(e.target.value); }} /> */}
      Landing page
    </div>
  );
};

export default LandingPage;
