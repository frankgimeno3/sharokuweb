import { FC } from 'react';
 import { useRouter } from 'next/navigation';


interface RegionProps {
    region: any
    handleRegionChange: any
}

const Ciudad: React.FC<RegionProps> = ({ region, handleRegionChange }) => {
  const router = useRouter();


  return (
    <div>
      <label htmlFor="userCity" className="block text-sm font-medium leading-6 text-white">
        Ciudad
      </label>
      <div className="mt-2">
        <input
          id="userCity"
          type="text"
          placeholder="Inserte aquí su ciudad"
          value={region}
          onChange={handleRegionChange}
          required
          className="bg-transparent block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default Ciudad;