// function App() {

//   return (
//     <div className="min-h-screen bg-red-400 flex items-center justify-center">
//       <h1 className="text-5xl font-bold text-blue-900">
//         Portfolio
//       </h1>
//     </div>
//   )
// }

// export default App

import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>
          Home
        </Link>
        <Link to="/photos" style={{ marginRight: '1rem' }}>
          Photos
        </Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-red-400 flex items-center justify-center">
      <h1 className="text-5xl font-bold text-blue-900">
        Welcome to my photography portfolio!
      </h1>
    </div>
  );
}

function Photos() {
  return (
    <div className="min-h-screen bg-green-400 flex items-center justify-center">
      <h1 className="text-5xl font-bold text-blue-900">
        My photos will go here 📷
      </h1>
    </div>
  );
}

function About() {
  return (
    <div className="min-h-screen bg-green-400 flex items-center justify-center">
      <h1 className="text-5xl font-bold text-purple-900">About Me</h1>
    </div>
  );
}

export default App;
