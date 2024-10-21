import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaSearchengin } from 'react-icons/fa6'
import useConversation from '../../zustand/useConversation.js';
import useGetConversations from '../../hooks/useGetConversations.js';

const SearchInput = () => {

  const [search, setSearch] = useState('');

  const { setSelectedConversation } = useConversation();

  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!search) console.log('no search');

    if (search.length < 3) {
      return toast.error('Type in Search Bar atleast 3 letters....');
    }

    const conversation = conversations.find((c) => c.username.toLowerCase().includes(search.toLowerCase()));

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("")
    } else toast.error("No Such User Found!");

  }
  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
      <input type="text" placeholder='Search...' className='input input-bordered rounded-full h-10' value={search} onChange={(e) => setSearch(e.target.value)} />
      <button type='submit' className='btn btn-circle bg-sky-600 border-0 text-white'>
        <FaSearchengin className='size-4' />
      </button>

    </form>
  )
}

export default SearchInput
