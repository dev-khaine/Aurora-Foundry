import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Palette, 
  Component, 
  PenTool, 
  Megaphone, 
  Menu, 
  X,
  Share2
} from 'lucide-react';
import { ViewState } from './types';
import { Marketing } from './components/views/Marketing';
import { BrandGuide } from './components/views/BrandGuide';
import { DesignSystem } from './components/views/DesignSystem';
import { Dashboard } from './components/views/Dashboard';
import { Editor } from './components/views/Editor';
import { Socials } from './components/views/Socials';
import { Profile } from './components/views/Profile';
import { Login } from './components/views/Login';
import { ToastProvider } from './context/ToastContext';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.MARKETING);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const navItems = [
    { id: ViewState.MARKETING, label: 'Marketing', icon: Megaphone },
    { id: ViewState.BRAND_GUIDE, label: 'Brand Identity', icon: Palette },
    { id: ViewState.DESIGN_SYSTEM, label: 'Design System', icon: Component },
    { id: ViewState.DASHBOARD, label: 'Product: Dashboard', icon: LayoutDashboard },
    { id: ViewState.EDITOR, label: 'Product: Editor', icon: PenTool },
    { id: ViewState.SOCIALS, label: 'Social Assets', icon: Share2 },
  ];

  const handleLogin = () => {
    setIsAuthenticated(true);
    setShowLogin(false);
    setCurrentView(ViewState.DASHBOARD);
  };

  const renderContent = () => {
    switch (currentView) {
      case ViewState.MARKETING: return <Marketing onStartBuilding={() => setShowLogin(true)} />;
      case ViewState.BRAND_GUIDE: return <BrandGuide />;
      case ViewState.DESIGN_SYSTEM: return <DesignSystem />;
      case ViewState.DASHBOARD: return <Dashboard />;
      case ViewState.EDITOR: return <Editor />;
      case ViewState.SOCIALS: return <Socials />;
      case ViewState.PROFILE: return <Profile />;
      default: return <Marketing onStartBuilding={() => setShowLogin(true)} />;
    }
  };

  if (showLogin && !isAuthenticated) {
    return (
      <ToastProvider>
        <Login onLogin={handleLogin} />
      </ToastProvider>
    );
  }

  const isLandingPage = currentView === ViewState.MARKETING;

  return (
    <ToastProvider>
      <div className="min-h-screen bg-sand-100 text-ink-900 font-sans selection:bg-ocean-100 selection:text-ocean-900">
        
        {/* Sidebar Navigation (Desktop) - Hidden on Landing Page */}
        {!isLandingPage && (
          <aside className="hidden md:flex flex-col w-64 fixed inset-y-0 left-0 border-r border-ink-900/5 bg-white z-50 transition-all duration-300">
            <div className="p-6 flex items-center gap-3">
              {/* Logo */}
              <div 
                className="w-8 h-8 flex-shrink-0 cursor-pointer"
                onClick={() => setCurrentView(ViewState.MARKETING)}
              >
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
                  <path d="M30 80V50C30 38.9543 38.9543 30 50 30C61.0457 30 70 38.9543 70 50V80" stroke="#0B4F6C" strokeWidth="16" strokeLinecap="round" />
                  <circle cx="50" cy="58" r="10" fill="#FF8A6B" />
                </svg>
              </div>
              <span className="font-bold text-lg tracking-tight text-ink-900">Aurora Foundry</span>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentView === item.id;
                
                // If not authenticated, hide product views in sidebar
                if (!isAuthenticated && (item.id === ViewState.DASHBOARD || item.id === ViewState.EDITOR || item.id === ViewState.PROFILE)) {
                  return null;
                }

                // Hide Marketing link in sidebar if we are already in app (optional, but keeps sidebar clean)
                if (item.id === ViewState.MARKETING) return null;

                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentView(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                      isActive 
                        ? 'bg-ocean-50 text-ocean-700 shadow-sm' 
                        : 'text-ink-500 hover:text-ink-900 hover:bg-sand-50'
                    }`}
                  >
                    <Icon size={18} className={`transition-colors duration-200 ${isActive ? 'text-ocean-600' : 'text-ink-400 group-hover:text-ink-600'}`} />
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <div className="p-4 border-t border-ink-100">
              {isAuthenticated ? (
                <div 
                  onClick={() => setCurrentView(ViewState.PROFILE)}
                  className={`flex items-center gap-3 p-2 rounded-lg transition-colors cursor-pointer group ${currentView === ViewState.PROFILE ? 'bg-ocean-50' : 'hover:bg-sand-50'}`}
                >
                  <img src="https://picsum.photos/id/64/100/100" alt="User" className="w-8 h-8 rounded-full border border-ink-100" />
                  <div className="flex flex-col text-left">
                    <span className={`text-sm font-medium ${currentView === ViewState.PROFILE ? 'text-ocean-900' : 'text-ink-900'}`}>Alex Designer</span>
                    <span className="text-xs text-ink-500">Pro License</span>
                  </div>
                </div>
              ) : (
                <button 
                  onClick={() => setShowLogin(true)}
                  className="w-full py-2 bg-ocean-600 text-white rounded-lg text-sm font-medium hover:bg-ocean-700 transition-colors"
                >
                  Sign In
                </button>
              )}
            </div>
          </aside>
        )}

        {/* Mobile Header - Hidden on Landing Page (Landing has its own nav) */}
        {!isLandingPage && (
          <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md border-b border-ink-100 flex items-center justify-between px-4 z-50">
            <div className="flex items-center gap-2" onClick={() => setCurrentView(ViewState.MARKETING)}>
              <div className="w-6 h-6 flex-shrink-0">
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
                  <path d="M30 80V50C30 38.9543 38.9543 30 50 30C61.0457 30 70 38.9543 70 50V80" stroke="#0B4F6C" strokeWidth="16" strokeLinecap="round" />
                  <circle cx="50" cy="58" r="10" fill="#FF8A6B" />
                </svg>
              </div>
              <span className="font-bold text-ink-900">Aurora</span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-ink-600">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        )}

        {/* Mobile Menu Overlay - Only for App Navigation */}
        {!isLandingPage && isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 pt-20 px-4 md:hidden animate-in slide-in-from-top-10">
            <nav className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                
                if (!isAuthenticated && (item.id === ViewState.DASHBOARD || item.id === ViewState.EDITOR || item.id === ViewState.PROFILE)) {
                  return null;
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentView(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl text-lg font-medium transition-colors ${
                      currentView === item.id 
                        ? 'bg-ocean-50 text-ocean-700' 
                        : 'text-ink-500 active:bg-sand-50'
                    }`}
                  >
                    <Icon size={24} />
                    {item.label}
                  </button>
                );
              })}
              {isAuthenticated && (
                 <button
                    onClick={() => {
                      setCurrentView(ViewState.PROFILE);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl text-lg font-medium transition-colors ${
                      currentView === ViewState.PROFILE
                        ? 'bg-ocean-50 text-ocean-700' 
                        : 'text-ink-500 active:bg-sand-50'
                    }`}
                  >
                    <img src="https://picsum.photos/id/64/100/100" alt="User" className="w-6 h-6 rounded-full border border-ink-100" />
                    My Profile
                  </button>
              )}
              {!isAuthenticated && (
                <button
                  onClick={() => {
                    setShowLogin(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-4 px-4 py-4 rounded-xl text-lg font-medium text-ocean-600 bg-ocean-50 mt-4"
                >
                  Sign In
                </button>
              )}
            </nav>
          </div>
        )}

        {/* Main Content Area */}
        {/* Full width for Landing Page, padded for App */}
        <main className={`${isLandingPage ? 'w-full' : 'md:pl-64 pt-20 md:pt-0'} min-h-screen transition-all duration-300`}>
          <div className={`${isLandingPage ? '' : 'max-w-7xl mx-auto p-4 md:p-8 lg:p-12'}`}>
            <div key={currentView} className="animate-fade-in-up">
              {renderContent()}
            </div>
          </div>
        </main>

      </div>
    </ToastProvider>
  );
};

export default App;