// app/contact/page.tsx
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="absolute inset-0 -z-10">
              <Image
                src="/home/hero.jpg"
                alt="Hero Image"
                fill
                className="object-cover"
                priority
              />
            </div>
    </>
  );
}
