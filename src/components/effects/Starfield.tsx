'use client';

export default function BlobBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-50"
        style={{ background: 'radial-gradient(circle, #E0DBD2 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div
        className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full opacity-35"
        style={{ background: 'radial-gradient(circle, #D8D3C8 0%, transparent 70%)', filter: 'blur(80px)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(ellipse, #CCCAC2 0%, transparent 70%)', filter: 'blur(100px)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[450px] h-[450px] rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, #DDD9D0 0%, transparent 70%)', filter: 'blur(70px)' }}
      />
    </div>
  );
}
