import React from 'react';
import { User } from 'lucide-react';

interface StaffMember {
  name: string;
  position: string;
  subject?: string;
  category: string;
  image?: string;
}

const staffData: StaffMember[] = [
  // ── Leadership ──────────────────────────────────────────────────────────
  {
    name: 'Mrs Molotsi',
    position: 'Principal',
    category: 'Leadership',
    image: './assets/about/principal.jpg',
  },
  {
    name: 'Deputy Principal',
    position: 'Deputy Principal',
    category: 'Leadership',
  },
  {
    name: 'Mr M Z Makalima',
    position: 'Contact Administrator',
    category: 'Leadership',
  },

  // ── Departmental Heads ───────────────────────────────────────────────────
  {
    name: 'HOD — Humanities',
    position: 'Head of Department',
    subject: 'Humanities',
    category: 'Departmental Heads',
  },
  {
    name: 'HOD — Mathematics & Science',
    position: 'Head of Department',
    subject: 'Mathematics & Science',
    category: 'Departmental Heads',
  },
  {
    name: 'HOD — Languages',
    position: 'Head of Department',
    subject: 'Languages',
    category: 'Departmental Heads',
  },

  // ── Class Teachers ───────────────────────────────────────────────────────
  { name: 'Class Teacher', position: 'Class Teacher — Grade 8A',  category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 8B',  category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 8C',  category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 9A',  category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 9B',  category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 9C',  category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 10A', category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 10B', category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 10C', category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 11A', category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 11B', category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 11C', category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 12A', category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 12B', category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 12C', category: 'Class Teachers' },

  // ── Support Staff ────────────────────────────────────────────────────────
  { name: 'School Administrator', position: 'School Administrator', category: 'Support Staff' },
  { name: 'Security Officer',     position: 'Security Officer',     category: 'Support Staff' },
  { name: 'Learner Support Agent',position: 'Learner Support Agent',category: 'Support Staff' },
];

const categories = [
  'Leadership',
  'Departmental Heads',
  'Class Teachers',
  'Support Staff',
];

const StaffCard = ({ member }: { member: StaffMember }) => (
  <div
    className="rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center p-6 text-center hover:-translate-y-1"
    style={ { background: '#FFFDF5', border: '1px solid #C4A862' } }
  >
    {/* Avatar */}
    <div
      className="w-24 h-24 rounded-full flex items-center justify-center mb-4 overflow-hidden"
      style={ { background: '#FAF8F0', border: '3px solid #C4A862' } }
    >
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
      ) : (
        <User size={40} style={ { color: '#C4A862', opacity: 0.5 } } />
      )}
    </div>

    <h3 className="text-sm font-bold leading-tight" style={ { color: '#1B2A4A' } }>
      {member.name}
    </h3>
    <p className="text-xs font-semibold mt-1" style={ { color: '#C4A862' } }>
      {member.position}
    </p>
    {member.subject && (
      <span
        className="mt-2 inline-block text-xs font-medium px-3 py-1 rounded-full"
        style={ { background: '#FAF8F0', color: '#1B2A4A', border: '1px solid #C4A862' } }
      >
        {member.subject}
      </span>
    )}
  </div>
);

export const Staff = () => {
  const [activeCategory, setActiveCategory] = React.useState('Leadership');
  const filtered = staffData.filter(m => m.category === activeCategory);

  return (
    <div className="min-h-screen py-12 px-4" style={ { background: '#FAF8F0' } }>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight mb-3" style={ { color: '#1B2A4A' } }>
            Our Staff
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Meet the dedicated team behind Ramafole Senior Secondary School — 35 educators committed to excellence.
          </p>
          <div className="w-16 h-1 bg-[#C4A862] mx-auto mt-4 rounded-full" />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-bold transition-all"
              style={
                activeCategory === cat
                  ? { background: '#1B2A4A', color: '#C4A862' }
                  : { background: '#FFFDF5', color: '#1B2A4A', border: '1px solid #C4A862' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Staff grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map((member, i) => (
            <StaffCard key={`${member.name}-${i}`} member={member} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            No staff members in this category yet.
          </div>
        )}
      </div>
    </div>
  );
};
