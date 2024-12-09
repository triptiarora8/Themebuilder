export default function Marquee() {
  return (
    <div className="flex overflow-x-hidden mt-[100px] w-full h-[180px] font-extrabold font-bricolage text-[150px]/[180px]">
      <div className="flex animate-marquee space-x-[20px]">
        <div>Build</div>
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#6158FC] via-[#FF3FA8] to-[#FF8234]">
          Better
        </div>
        <div>Build</div>
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#6158FC] via-[#FF3FA8] to-[#FF8234]">
          Faster
        </div>
      </div>
    </div>
  );
}
