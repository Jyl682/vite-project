import Overview from './pages/Overview.tsx'
import Assets from './pages/Assets.tsx'
import News from './pages/News.tsx'
import Article from './pages/Article.tsx'
import NavBar  from './components/Navbar.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Overview/>}/>
        <Route path="/assets" element={<Assets/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/article" element={<Article/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
