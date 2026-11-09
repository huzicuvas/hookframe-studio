import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Video, Grid, Sun, Moon } from 'lucide-react';
import { HookFramesLogo } from './HookFramesLogo';

interface NavbarProps {
 onOpenContact?: () => void;
 onNavigateToGallery?: () => void;
 onNavigateToAbout?: () => void;
 onNavigateToWorkflow?: () => void;
 onNavigateHome?: () => void;
 onOpenChat?: () => void;
 theme?: 'dark' | 'light';
 onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
 onOpenContact,
 onNavigateToGallery,
 onNavigateToAbout,
 onNavigateToWorkflow,
 onNavigateHome,
 onOpenChat,
 theme = 'dark',
 onToggleTheme,
}) => {
 const [isScrolled, setIsScrolled] = useState(false);
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 useEffect(() => {
 const handleScroll = () => {
 setIsScrolled(window.scrollY > 20);
 };
 window.addEventListener('scroll', handleScroll);
 return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 const navLinks = [
 { name: 'Portfolio', href: '#portfolio', sectionId: 'portfolio' },
 { name: 'Gallery', href: '/gallery', isGallery: true },
 { name: 'About & Services', href: '/about', isAbout: true },
 { name: 'Workflow', href: '/workflow', isWorkflow: true },
 { name: 'Pricing & Quotes', href: '#pricing', sectionId: 'pricing' },
 { name: 'FAQ', href: '#faq', sectionId: 'faq' },
 ];

 const handleLinkClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
 if (link.isGallery && onNavigateToGallery) {
 e.preventDefault();
 onNavigateToGallery();
 setMobileMenuOpen(false);
 } else if (link.isAbout && onNavigateToAbout) {
 e.preventDefault();
 onNavigateToAbout();
 setMobileMenuOpen(false);
 } else if (link.isWorkflow && onNavigateToWorkflow) {
 e.preventDefault();
 onNavigateToWorkflow();
 setMobileMenuOpen(false);
 } else if (link.sectionId) {
 // Same-page section: scroll without putting a hash in the URL bar.
 e.preventDefault();
 document.getElementById(link.sectionId)?.scrollIntoView({ behavior: 'smooth' });
 setMobileMenuOpen(false);
 }
 };

 const handleLogoClick = (e: React.MouseEvent) => {
 if (onNavigateHome) {
 e.preventDefault();
 onNavigateHome();
 }
 };

 return (
 <header
 id="navbar"
 className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
 isScrolled
 ? 'bg-white/90 dark:bg-[#0B0D12]/90 backdrop-blur-md border-b border-neutral-200/80 dark:border-[#222833]/80 py-3'
 : 'bg-transparent py-5'
 }`}
 >
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
 {/* Brand Logo with exact Dark Background Icon + White Typography */}
 <a
 href="/"
 id="nav-logo"
 onClick={handleLogoClick}
 className="group flex items-center focus:outline-none"
 >
 <HookFramesLogo size="md" />
 </a>

 {/* Desktop Nav Links */}
 <nav className="hidden md:flex items-center gap-1 bg-white/90 dark:bg-[#11141B]/90 border border-neutral-200 dark:border-[#222833] px-3 py-1.5 rounded-full text-xs font-medium text-neutral-600 dark:text-neutral-400 backdrop-blur-md">
 {navLinks.map((link) => (
 <a
 key={link.name}
 href={link.href}
 onClick={(e) => handleLinkClick(e, link)}
 className={`px-3 py-1 rounded-full hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors duration-200 ${
 link.isGallery ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''
 }`}
 >
 {link.name}
 </a>
 ))}
 </nav>

 {/* Theme toggle + mobile menu button */}
 <div className="flex items-center gap-2">
 <button
 type="button"
 id="theme-toggle"
 onClick={onToggleTheme}
 className="p-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white bg-white dark:bg-[#11141B] border border-neutral-200 dark:border-[#222833] focus:outline-none active:scale-95 transition-colors"
 aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
 >
 {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
 </button>

 <button
 type="button"
 id="mobile-menu-toggle"
 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
 className="md:hidden p-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white bg-white dark:bg-[#11141B] border border-neutral-200 dark:border-[#222833] focus:outline-none"
 aria-label="Toggle navigation menu"
 >
 {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
 </button>
 </div>
 </div>

 {/* Mobile Drawer */}
 {mobileMenuOpen && (
 <div
 id="mobile-drawer"
 className="md:hidden bg-white dark:bg-[#11141B] border-b border-neutral-200 dark:border-[#222833] px-6 py-5 mt-3 space-y-4 animate-in slide-in-from-top duration-200"
 >
 <div className="flex flex-col space-y-2">
 {navLinks.map((link) => (
 <a
 key={link.name}
 href={link.href}
 onClick={(e) => handleLinkClick(e, link)}
 className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
 link.isGallery
 ? 'text-blue-600 dark:text-blue-400 font-semibold bg-neutral-200/50 dark:bg-neutral-800/50'
 : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800'
 }`}
 >
 {link.name}
 </a>
 ))}
 </div>
 </div>
 )}
 </header>
 );
};
