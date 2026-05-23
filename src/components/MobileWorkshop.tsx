import { CheckCircle } from 'lucide-react';

interface MobileWorkshopProps {
  variant?: 'light' | 'dark';
}

const equipment = [
  'Professional diagnostic tools',
  'Soldering & micro-soldering station',
  'Screen replacement tools & parts',
  'Network analyzers & Wi-Fi scanners',
  'SSD/HDD adapters & imaging tools',
  'Camera & smart home installation kit',
];

export default function MobileWorkshop({ variant = 'light' }: MobileWorkshopProps) {
  const isDark = variant === 'dark';

  return (
    <section className={`py-16 lg:py-20 ${isDark ? 'bg-navy-950' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* Images: workshop interior mosaic */}
          <div className="flex-1 w-full max-w-xl">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 rounded-2xl overflow-hidden h-52">
                <img
                  src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1"
                  alt="FixariVan mobile workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-36">
                <img
                  src="https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                  alt="Repair tools"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-36">
                <img
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                  alt="Technician at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 max-w-lg">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className={`h-px w-6 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`} />
              <span className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                Inside Our Van
              </span>
            </div>

            <h2 className={`text-3xl lg:text-4xl font-bold leading-tight tracking-tight mb-4 ${isDark ? 'text-white' : 'text-navy-900'}`}>
              A fully equipped mobile workshop — at your door
            </h2>
            <p className={`text-base leading-relaxed mb-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Our Ford Transit Custom carries everything needed to diagnose and fix most tech problems on the spot. No parts waiting, no second trip.
            </p>

            <div className="space-y-2.5">
              {equipment.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={15} className={isDark ? 'text-blue-400 flex-shrink-0' : 'text-blue-600 flex-shrink-0'} />
                  <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
