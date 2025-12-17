'use client';

import dynamic from 'next/dynamic';

const VenueMap = dynamic(() => import('@/components/VenueMap'), {
  ssr: false,
});

export default function VenueMapWrapper() {
  return <VenueMap lat={19.959733} lng={73.735897} zoom={16} />;
}

