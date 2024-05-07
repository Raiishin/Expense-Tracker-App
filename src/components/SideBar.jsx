'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

import DashboardIcon from '../assets/dashboard.svg';
import CategoriesIcon from '../assets/categories.svg';
import SettingsIcon from '../assets/settings.svg';

const SideBar = () => {
  const router = useRouter();

  const menuButtonArr = [
    { icon: DashboardIcon, title: 'Dashboard', redirectionLink: '/' },
    { icon: CategoriesIcon, title: 'Categories', redirectionLink: '/categories' },
    { icon: SettingsIcon, title: 'Settings', redirectionLink: '/settings' }
  ];

  return (
    <div
      className="xs:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/4 2xl-:w-1/5 
				bg-white rounded-2xl m-12 h-4/5 outline outline-1 flex flex-col gap-2 p-4"
    >
      <div className="pt-8 flex flex-col">
        {menuButtonArr.map(({ icon, title, redirectionLink }) => (
          <button key={title} onClick={e => router.push(redirectionLink)}>
            <div className="flex flex-row pb-6">
              <Image src={icon} alt={title} className="p-0.5" />
              <h1 className="bold text-xl pl-2">{title}</h1>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
