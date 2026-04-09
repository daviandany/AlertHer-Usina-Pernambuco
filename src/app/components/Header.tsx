import { Shield, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Link, useLocation } from "react-router";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Don't show header on auth pages
  if (location.pathname === "/login" || location.pathname === "/cadastro" || location.pathname === "/esqueci-senha") {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-purple-500 rounded-full p-1.5">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">SafeHer</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-gray-700 hover:text-purple-600 transition-colors">
              Sobre
            </a>
            <a href="#recursos" className="text-gray-700 hover:text-purple-600 transition-colors">
              Recursos
            </a>
            <a href="#ajuda" className="text-gray-700 hover:text-purple-600 transition-colors">
              Ajuda
            </a>
            <Link to="/login" className="text-gray-700 hover:text-purple-600 transition-colors">
              Entrar
            </Link>
            <Link to="/cadastro">
              <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full px-6">
                Criar Conta
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-purple-100">
            <a
              href="#sobre"
              className="block text-gray-700 hover:text-purple-600 transition-colors py-2"
            >
              Sobre
            </a>
            <a
              href="#recursos"
              className="block text-gray-700 hover:text-purple-600 transition-colors py-2"
            >
              Recursos
            </a>
            <a
              href="#ajuda"
              className="block text-gray-700 hover:text-purple-600 transition-colors py-2"
            >
              Ajuda
            </a>
            <Link
              to="/login"
              className="block text-gray-700 hover:text-purple-600 transition-colors py-2"
            >
              Entrar
            </Link>
            <Link to="/cadastro">
              <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-full">
                Criar Conta
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}