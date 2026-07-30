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
    name: 'Mafunda S.S',
    position: 'Principal',
    category: 'Leadership',
    image: '/assets/about/principal.jpg',
  },

  // ── School Management Team ─────────────────────────────────────────────
  {
    name: 'Ludidi L. V',
    position: 'Departmental Head',
    subject: 'NS Gr8-9 and Technology Gr8-9',
    category: 'School Management Team',
  },
  {
    name: 'Mbingo N. P',
    position: 'Educator & SMT',
    subject: 'IsiXhosa HL Gr8-9 and Creative arts Gr8-9',
    category: 'School Management Team',
  },
  {
    name: 'Mahlaba K',
    position: 'Educator & SMT',
    subject: 'Mathematics Gr8, 11 & 12',
    category: 'School Management Team',
  },
  {
    name: 'Mthembu M. P',
    position: 'Educator & SMT',
    subject: 'Life Sciences Gr10-11 and Life Orientation Gr9-11',
    category: 'School Management Team',
  },

  // ── Educators ──────────────────────────────────────────────────────────
  {
    name: 'Bilibane P',
    position: 'Educator',
    subject: 'Geography Gr10 and IsiXhosa HL Gr10-12',
    category: 'Educators',
  },
  {
    name: 'Moyakhe N',
    position: 'Educator',
    subject: 'Geography Gr11-12 and Tourism Gr11-12',
    category: 'Educators',
  },
  {
    name: 'Ndabambi T.J',
    position: 'Educator',
    subject: 'Business Studies Gr10-12',
    category: 'Educators',
  },
  {
    name: 'Ndonyela Z. B',
    position: 'Educator',
    subject: 'Maths Literacy Gr10-12 & Mathematics Gr9',
    category: 'Educators',
  },
  {
    name: 'Nonti L.',
    position: 'Educator',
    subject: 'English FAL Gr9-12',
    category: 'Educators',
  },
  {
    name: 'Sicongwana M.',
    position: 'Educator',
    subject: 'History Gr11-12 & English FAL Gr8, Tourism Gr10',
    category: 'Educators',
  },
  {
    name: 'Tshazi B.',
    position: 'Educator',
    subject: 'Agricultural Sciences Gr10-12 & Life Sciences Gr12',
    category: 'Educators',
  },
  {
    name: 'Ziphathe T',
    position: 'Educator',
    subject: 'Physical Sciences Gr10-12 & Mathematics Gr10',
    category: 'Educators',
  },
  {
    name: 'Dlamini M.',
    position: 'Educator',
    subject: 'Social Sciences Gr8-9 & LO Gr12',
    category: 'Educators',
  },
  {
    name: 'Malamlela Z.',
    position: 'Educator',
    subject: 'History Gr10 & Life Orientation Gr8',
    category: 'Educators',
  },

  // ── Support Staff ────────────────────────────────────────────────────────
  { name: 'Gcinilizwe N. V', position: 'Admin', category: 'Support Staff' },
  { name: 'Mbalana Z', position: 'EPWP Security', category: 'Support Staff' },
  { name: 'Lugayeni Z. P', position: 'SBCA EPWP', category: 'Support Staff' },
  { name: 'Gcinilizwe P', position: 'Transport Patroller', category: 'Support Staff' },
];

const categories = [
  'Leadership',
  'School Management Team',
  'Educators',
  'Support Staff',
];

const StaffCard = ({ member }: { member: StaffMember; key?: React.Key }) => (
  <div
    className="rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center p-6 text-center hover:-translate-y-1"
    style={ { background: '#FFFBEF', border: '1px solid #C8A400' } }
  >
    {/* Avatar */}
    <div
      className="w-24 h-24 rounded-2xl flex items-center justify-center mb-4 overflow-hidden"
      style={ { background: '#FDF9EC', border: '3px solid #C8A400' } }
    >
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
      ) : (
        <User size={40} style={ { color: '#C8A400', opacity: 0.5 } } />
      )}
    </div>

    <h3 className="text-sm font-bold leading-tight" style={ { color: '#166534' } }>
      {member.name}
    </h3>
    <p className="text-xs font-semibold mt-1" style={ { color: '#C8A400' } }>
      {member.position}
    </p>
    {member.subject && (
      <span
        className="mt-2 inline-block text-xs font-medium px-3 py-1 rounded-full"
        style={ { background: '#FDF9EC', color: '#166534', border: '1px solid #C8A400' } }
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
    <div className="min-h-screen py-12 px-4" style={ { background: '#FDF9EC' } }>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight mb-3" style={ { color: '#166534' } }>
            Our Staff
          </h1>
          <div className="w-16 h-1 mx-auto rounded-full mb-4" style={ { background: '#C8A400' } } />
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Meet the dedicated team of educators and support staff at Ludidi Senior Secondary School.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={
                activeCategory === cat
                  ? { background: '#C8A400', color: '#166534', border: '2px solid #C8A400', fontWeight: 700 }
                  : { background: '#FFFBEF', color: '#166534', border: '2px solid #C8A400' }
              }
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-md"
            >
              {cat}
              <span className="ml-2 text-xs font-bold opacity-60">
                ({staffData.filter(m => m.category === cat).length})
              </span>
            </button>
          ))}
        </div>

        {/* Staff Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {filtered.map((member, index) => (
            <StaffCard key={index} member={member} />
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-gray-400 text-xs mt-10 italic">
          Staff names and photos will be updated progressively. Add details via the Staff Portal.
        </p>
      </div>
    </div>
  );
};
