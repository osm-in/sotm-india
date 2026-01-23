'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState<string>('day1');

  // Schedule data in table format
  const scheduleData: {
    day1: {
      title: string;
      subtitle: string;
      columns: string[];
      rows: string[][];
    };
  } = {
    day1: {
      title: 'Day 1 - January 24th, 2026',
      subtitle: 'State of The Map India 2026',
      columns: ['Time', 'Session', 'Presenters', 'Duration'],
      rows: [
        ['9:00 AM - 10:30 AM', 'State of the Map in India', 'Ark Arjun', '10 min'],
        ['', 'Keynote: Bridging AI and OpenStreetMap: A Comprehensive MCP Server for Geospatial Intelligence and Community-Driven Mapping', 'Saikat Maiti', '20 min'],
        ['', 'TomTom & OSM Community Program', 'Kiran Ahire', '20 min'],
        ['', 'Why Building Community in India needs a Local First Approach, lessons from OSM Kerala', 'Ark Arjun', '20 min'],
        ['', 'What are the challenges of running a Data Ops Team', 'Sarang Kulkarni', '15 min'],
        ['', 'Group Photo', '-', '-'],
        ['10:30 AM - 11:30 AM', 'Tea/Networking', '-', '-'],
        ['11:30 AM - 1:00 PM', 'Mapping Cyclone Amphan Impacts Using OpenStreetMap: A Disaster Management Case Study of West Bengal', 'Riyanka Banerjee, Debanjali Roy, Aditi Bera, Aditi Majhi', '10 min'],
        ['', 'Spatial Distribution of Critical Disaster Management Facilities: A GIS-Based Approach of Maha Kumbh, Prayagraj', 'Bhavya Mangla, Devansh Negi, Shruti', '10 min'],
        ['', 'Need of Open Map Data for Creative Project', 'Bal Krishna Jha', '10 min'],
        ['', 'How I use PMGSY data along with supporting datasets for adding roads for Unmapped Villages', 'Devdatta Tengshe', '20 min'],
        ['', 'Interactive map publishing demo using OSM and open data with Amche Atlas', 'Arun Ganesh', '30 min'],
        ['1:00 PM - 2:00 PM', 'Lunch', '-', '-'],
        ['2:00 PM - 3:30 PM', 'The Role of Crowdsourced Damage Assessment in Disaster Response and Recovery', 'Mikko Tamura, Bernard Heng', '20 min'],
        ['', 'Introducing QuantaRoute - A Geocoding API Designed for India', 'Saikat Maiti', '20 min'],
        ['', 'On Ground OSM Mapping', '-', '50 min'],
        ['3:30 PM - 4:00 PM', 'Tea/Networking', '-', '-'],
        ['4:00 PM - 5:30 PM', 'Mapathon', '-', '-']
      ]
    }
  };

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'Keynote':
        return 'bg-purple-100 text-purple-800';
      case 'Talk':
        return 'bg-blue-100 text-blue-800';
      case 'Workshop':
        return 'bg-green-100 text-green-800';
      case 'Break':
        return 'bg-amber-100 text-amber-800';
      case 'Sessions':
        return 'bg-indigo-100 text-indigo-800';
      case 'Panel':
        return 'bg-rose-100 text-rose-800';
      case 'Networking':
        return 'bg-orange-100 text-orange-800';
      case 'Registration':
        return 'bg-slate-100 text-slate-800';
      case 'Talk':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSessionType = (session: string, duration: string = '') => {
    if (session.includes('Keynote') || session.includes('keynote')) return 'Keynote';
    if (session.includes('Tea') || session.includes('Networking') || session.includes('Lunch')) return 'Break';
    if (session.includes('Mapathon') || session.includes('Workshop')) return 'Workshop';
    // Check for specific durations: 10, 15, 20, or 30 min talks
    const durationMatch = duration.match(/\d+/);
    if (session.includes('demo') || (durationMatch && ['10', '15', '20', '30'].includes(durationMatch[0]))) return 'Talk';
    return 'Talk';
  };

  return (
    <main className="bg-neutral-white min-h-screen">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <section className="py-12 px-6 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold text-primary mb-4">Conference Schedule</h1>
          </div>
        </section>

        {/* Schedule Grid Display */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            {/* Schedule Table */}
            <div className="mb-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-primary">{scheduleData.day1.title}</h2>
              </div>

              {/* Table for Desktop */}
              <div className="hidden sm:block overflow-x-auto border border-slate-300 rounded-lg shadow-md">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary text-white">
                      {scheduleData.day1.columns.map((col, idx) => (
                        <th
                          key={idx}
                          className="px-6 py-4 text-left font-semibold border-r border-slate-200 last:border-r-0"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {scheduleData.day1.rows.map((row, rowIdx) => {
                      const sessionType = getSessionType(row[1], row[3]);
                      const isTimeRow = row[0] !== '';
                      return (
                        <tr
                          key={rowIdx}
                          className={`border-b border-slate-200 hover:bg-slate-50 transition-colors ${
                            isTimeRow ? (rowIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50') : 'bg-slate-100'
                          }`}
                        >
                          <td className={`px-6 py-4 font-semibold border-r border-slate-200 ${isTimeRow ? 'text-secondary' : 'text-neutral-slate'}`}>
                            {row[0]}
                          </td>
                          <td className="px-6 py-4 font-medium text-neutral-charcoal border-r border-slate-200">
                            {row[1]}
                          </td>
                          <td className="px-6 py-4 text-neutral-slate border-r border-slate-200 text-sm">
                            {row[2]}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getTypeColor(sessionType)}`}
                            >
                              {row[3]}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Cards for Mobile */}
              <div className="sm:hidden space-y-4">
                {scheduleData.day1.rows.map((row, idx) => {
                  const sessionType = getSessionType(row[1], row[3]);
                  const isTimeRow = row[0] !== '';
                  return (
                    <div
                      key={idx}
                      className={`border-2 rounded-lg p-5 hover:shadow-md transition-shadow ${
                        isTimeRow ? 'bg-white border-slate-200' : 'bg-amber-50 border-amber-200'
                      }`}
                    >
                      <div className="mb-3">
                        {isTimeRow && (
                          <p className="text-sm font-bold text-secondary mb-1">{row[0]}</p>
                        )}
                        <h3 className="text-base font-bold text-neutral-charcoal">{row[1]}</h3>
                        {row[2] !== '-' && (
                          <p className="text-sm text-neutral-slate mt-2">{row[2]}</p>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-neutral-slate">{row[3]}</span>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(sessionType)}`}
                        >
                          {sessionType}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Legend */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-neutral-charcoal mb-4">Session Types</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {['Keynote', 'Talk', 'Workshop', 'Break'].map((type) => (
                  <div key={type} className="flex items-center gap-2">
                    <div className={`h-3 w-3 rounded-full ${getTypeColor(type).split(' ')[0]}`}></div>
                    <span className="text-sm text-neutral-slate">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* Call to Action */}
        <section className="py-12 px-6 mt-12">
          <div className="container mx-auto bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Don't Miss Out!</h2>
            <p className="text-lg mb-6 opacity-95">
              Register now to secure your spot at State of the Map India 2026
            </p>
            <a 
              href="https://www.openstreetmap.in/sotm-india/register"
              className="inline-block px-8 py-3 bg-accent text-secondary font-bold rounded-full hover:bg-highlight shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Register Now
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );}
