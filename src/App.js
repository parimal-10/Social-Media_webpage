import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ActivityPage from './components/ActivityPage'
import ProfilePageContainer from './components/ProfilePageContainer'
// import CommunityPageContainer from './components/CommunityPageContainer'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ActivityPage />}/>
      <Route path="/profile" element={<ProfilePageContainer />}/>
      {/* <Route path='/community' element={<CommunityPageContainer />}/> */}
    </Routes>
  );
};

export default App;
