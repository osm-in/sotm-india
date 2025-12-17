import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Sponsorship from '@/components/Sponsorship';
import AboutStats from '@/components/AboutStats';
import VenueMapWrapper from '@/components/VenueMapWrapper';
import { BookOpen, MessageCircle, Github, Globe, Twitter, Mail } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-neutral-white min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Sections Placeholder */}
      <section id="about" className="py-20 px-6 container mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-8">About the Conference</h2>
        <div className="prose max-w-3xl text-neutral-slate">
          <p className="text-lg mb-4">
            State of the Map India 2026 is an OpenStreetMap conference celebrating mapping, geospatial technology, and community collaboration in India.
          </p>
          <p className="text-lg mb-8">
            This year, we are proud to host the pilot edition of State of Map India 2026 alongside FOSS4G Asia 2026, bringing together the best minds in open source geospatial technology.
          </p>
        </div>
        <AboutStats />
      </section>

      <section id="speakers" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8">Speakers & Sessions</h2>
          <p className="text-lg text-neutral-slate mb-6">
            Call for proposals and registration to open soon. Stay tuned for an exciting lineup of speakers from the mapping community.
          </p>
        </div>
      </section>

      <section id="venue" className="py-20 px-6 container mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-8">Venue</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-2 text-neutral-charcoal">Nashik Engineering Cluster</h3>
            <p className="text-neutral-slate mb-4">MIDC Ambad, Nashik, India</p>
            <p className="text-neutral-slate mb-6">Join us in the beautiful city of Nashik for this landmark event. The venue offers state-of-the-art facilities for our conference sessions and workshops.</p>
            <a 
              href="https://www.openstreetmap.in/#16.95/19.959132/73.737277"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-medium hover:underline inline-flex items-center gap-1"
            >
              View Larger Map
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-[350px] md:h-auto min-h-[350px]">
            <VenueMapWrapper />
          </div>
        </div>
      </section>

      <Sponsorship />

      <footer id="contact" className="relative bg-[#111E0A] text-white py-12 px-6 border-t border-accent/20 overflow-hidden">
        {/* Saffron flair in top corner */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9933] opacity-20 rounded-bl-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-[#FF9933] opacity-30 rounded-bl-full"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 border-b border-accent/20 pb-8">
            <div className="mb-6 md:mb-0">
               <h4 className="text-xl font-bold mb-2 text-white">State of the Map India 2026</h4>
               <p className="text-accent/80 text-sm mb-4">Celebrating OpenStreetMap in India</p>
               <a href="mailto:contact@stateofthemap.in" className="inline-flex items-center gap-2 text-accent/80 hover:text-accent transition-colors text-sm">
                 <Mail className="w-4 h-4" />
                 contact@stateofthemap.in
               </a>
            </div>
            <div className="w-full md:w-auto">
               <h5 className="text-sm font-semibold mb-4 text-white">Join Our Community</h5>
               <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a 
                    href="https://wiki.openstreetmap.org/wiki/India" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent/80 hover:text-accent transition-colors text-sm"
                    title="OSM India Wiki"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span className="hidden sm:inline">Wiki</span>
                  </a>
                  <a 
                    href="https://t.me/OSMIndia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent/80 hover:text-accent transition-colors text-sm"
                    title="Telegram"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="hidden sm:inline">Telegram</span>
                  </a>
                  <a 
                    href="https://matrix.to/#/#osm-in-general:matrix.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent/80 hover:text-accent transition-colors text-sm"
                    title="Matrix"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="hidden sm:inline">Matrix</span>
                  </a>
                  <a 
                    href="https://github.com/osm-in/osm-in.github.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent/80 hover:text-accent transition-colors text-sm"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                  <a 
                    href="https://en.osm.town/@OSMIndia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent/80 hover:text-accent transition-colors text-sm"
                    title="Mastodon"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="hidden sm:inline">Mastodon</span>
                  </a>
                  <a 
                    href="https://x.com/osm_in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent/80 hover:text-accent transition-colors text-sm"
                    title="Twitter/X"
                  >
                    <Twitter className="w-4 h-4" />
                    <span className="hidden sm:inline">Twitter</span>
                  </a>
               </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-accent/60 text-sm">&copy; 2026 State of the Map India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
