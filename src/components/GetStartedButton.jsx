export default function GetStartedButton({ name = 'Button', className = '' }) {
  return (
    <button
      className={`bg-[#6f56dd] px-4 py-2 text-white font-semibold rounded-full cursor-pointer ${className}`}
    >
      {name}
    </button>
  );
}
