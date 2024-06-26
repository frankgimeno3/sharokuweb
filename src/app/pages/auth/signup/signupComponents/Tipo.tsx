import { FC } from 'react';
import { useRouter } from 'next/navigation';


interface TipoProps {
  userType: any
  handleUserTypeChange: any
}

const Tipo: React.FC<TipoProps> = ({ userType, handleUserTypeChange }) => {
  const router = useRouter();

  return (
    <div className='text-left'>
      <label htmlFor="userType" className="block text-sm font-medium leading-6 text-white">
        Tipo de cuenta
      </label>
      <div className="mt-2">
        <select
          id="userType"
          name="userType"
          value={userType || ''}
          onChange={handleUserTypeChange}
          required
          className="pl-3 bg-transparent block w-full rounded-md border-0   py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
        >
          <option value="propietario" className='pl-3 bg-gray-100 text-black'>Propietario</option>
          <option value="inquilino" className='pl-3 bg-gray-100 text-black'>Inquilino</option>
          <option value="servicios" className='pl-3 bg-gray-100 text-black'>Proveedor de servicios</option>
          <option value="administrador" className='pl-3 bg-gray-100 text-black'>Administrador de fincas</option>
          <option value="moderador" className='pl-3 bg-gray-100 text-black'>Moderador</option>
        </select>
      </div>
    </div>);
};

export default Tipo;