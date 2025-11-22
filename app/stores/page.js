'use client';

import NavbarWithCustomGif from '../components/NavbarWithCustomGif';
import StoreGallery from '../components/StoreGallery';

export default function StoresPage() {
  return (
    <>
      <NavbarWithCustomGif />
      <div className="pt-24 pb-12">
        <StoreGallery />
      </div>
    </>
  );
}

