import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Heart, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Kashyap
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer & Creative Technologist crafting digital experiences that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <Link
                  key={link}
                  to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Me</h3>
            <div className="flex gap-3">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Mail, href: '#', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Kashyap. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
