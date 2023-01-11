import { BiLoaderAlt } from 'react-icons/bi';

function Loading() {
  return (
    <div className='min-h-screen flex justify-center items-center text-5xl'>
      <BiLoaderAlt size='1.5em' className='text-red-500 animate-spin' />
      <div className='pl-3'>
        Loading...
      </div>
    </div>
  );
}

export default Loading;
