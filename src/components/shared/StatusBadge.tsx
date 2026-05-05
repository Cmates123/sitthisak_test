type Status = 'LIVE NOW' | 'COMING SOON';

export default function StatusBadge({ status }: { status: Status }) {
  if (status === 'LIVE NOW') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#059669] bg-[#D1FAE5] rounded-full px-2.5 py-0.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
        LIVE NOW
      </span>
    );
  }
  return (
    <span className="text-xs font-semibold text-[#2563EB] bg-[#DBEAFE] rounded-full px-2.5 py-0.5">
      COMING SOON
    </span>
  );
}
