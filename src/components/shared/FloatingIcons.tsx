'use client';
import { motion } from 'framer-motion';

const CARD = 64;
const GAP  = 20;
const N    = 4; // icons per set
const DIST = N * (CARD + GAP); // seamless loop distance = 336px

function MedalIcon() {
  return (
    <img
      src="/Screenshot_2569-05-06_at_04.21.11-removebg-preview.png"
      alt=""
      width={36}
      height={36}
      style={{ objectFit: 'contain' }}
      aria-hidden="true"
    />
  );
}

// up=true  → icons scroll upward  (exit top, reappear bottom)
// up=false → icons scroll downward (exit bottom, reappear top)
function Column({ up = true, speed = 8, topOffset = 0 }: { up?: boolean; speed?: number; topOffset?: number }) {
  const cells = Array.from({ length: N });
  return (
    <div className="overflow-hidden" style={{ height: 320, marginTop: topOffset }}>
      <motion.div
        style={{ display: 'flex', flexDirection: 'column', gap: GAP }}
        animate={{ y: up ? [0, -DIST] : [-DIST, 0] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
      >
        {[...cells, ...cells].map((_, i) => (
          <div
            key={i}
            style={{ width: CARD, height: CARD, flexShrink: 0 }}
            className="rounded-2xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.07)] flex items-center justify-center overflow-hidden"
          >
            <MedalIcon />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function FloatingIcons() {
  return (
    <div
      className="relative w-full mx-auto rounded-3xl bg-[#F0F1F8] overflow-hidden"
      style={{ maxWidth: 480, height: 320 }}
    >
      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-14 bg-linear-to-b from-[#F0F1F8] to-transparent z-10 pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-14 bg-linear-to-t from-[#F0F1F8] to-transparent z-10 pointer-events-none" />

      {/* 3 columns: left up, center down (offset), right up */}
      <div className="absolute inset-0 flex items-start justify-around px-10">
        <Column up={true}  speed={7}   topOffset={0}  />
        <Column up={false} speed={9}   topOffset={30} />
        <Column up={true}  speed={6}   topOffset={0}  />
      </div>
    </div>
  );
}
