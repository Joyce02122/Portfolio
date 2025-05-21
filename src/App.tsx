import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import ProjectDetail from './pages/ProjectDetail';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
