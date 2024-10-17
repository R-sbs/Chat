import { FaSearchengin } from 'react-icons/fa6'

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full h-10' />
        <button type='submit' className='btn btn-circle bg-sky-600 border-0 text-white'>
            <FaSearchengin className='size-4' />
        </button>

    </form>
  )
}

export default SearchInput
