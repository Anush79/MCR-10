import { NavLink } from 'react-router-dom';


export default function Header() {
  return <div className='flex flex-col gap-12 text-left pl-4 font-bold min-w-[200px] min-h-screen pt-10 bg-slate-800 text-slate-500'>
    <NavLink to={'/'}>Dashboard</NavLink>
    <NavLink to={'/departments'}>Departments</NavLink>
    <NavLink to={'/products'}>Products</NavLink>
  </div>
}