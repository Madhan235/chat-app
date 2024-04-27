import React, { useState } from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Sidebar() {
  const [click, setClick] = useState(false);

  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <button onClick={() => setClick(!click)}>
        <GiHamburgerMenu className="text-white size-6 mb-2" />
      </button>
      <div className={`${click ? 'hidden' : 'flex flex-col max-w-[100%]'}`}>
        <SearchInput />
        <div className="divder px-3"></div>
        <Conversations />
        <LogoutButton />
      </div>
    </div>
  );
}
