import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-transparent absolute top-0 left-0 right-0'>
      <div className='flex justify-between items-center max-w-full mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-xl sm:text-2xl text-slate-700 flex flex-wrap items-center'>
            <span className='text-slate-500'>👊✋✌️</span>
            <span className='ml-2'>Rock Paper Scissors</span>
          </h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/' className='text-slate-700 hover:text-gray-900'>
            <li className='hidden sm:inline text-sm sm:text-base font-medium'>
              Home
            </li>
          </Link>
          <Link to='/rules' className='text-slate-700 hover:text-gray-900'>
            <li className='hidden sm:inline text-sm sm:text-base font-medium'>
              Rules
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
