import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Homepage } from './components/pages/Homepage';
import { AboutUs } from './components/pages/AboutUs';
import { Services } from './components/pages/Services';
import { Industries } from './components/pages/Industries';
import { Careers } from './components/pages/Careers';
import { Contact } from './components/pages/Contact';
import { Toaster } from './components/ui/sonner';

// Error Boundary Class Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="text-center p-8">
            <h1 className="text-2xl text-slate-900 mb-4">Something went wrong</h1>
            <p className="text-slate-600 mb-6">We apologize for the inconvenience. Please refresh the page or contact support.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  // Set document metadata for better SEO
  React.useEffect(() => {
    document.title = 'Zenith Logistics Limited - Mining Sector Logistics Solutions in Ghana';
    
    // Add meta description if not exists
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', 'Leading logistics company specializing in mining sector solutions in Ghana. Offering haulage services, supply chain management, warehousing, and custom HV clothing.');
      document.head.appendChild(metaDescription);
    }

    // Add viewport meta tag if not exists
    let metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      metaViewport = document.createElement('meta');
      metaViewport.setAttribute('name', 'viewport');
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
      document.head.appendChild(metaViewport);
    }
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main role="main">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              {/* Catch-all route - redirect to homepage */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <Toaster 
            position="top-right"
            expand={false}
            richColors
            closeButton
          />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;