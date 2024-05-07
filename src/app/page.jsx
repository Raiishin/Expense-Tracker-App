'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import Separator from '../components/Separator';
import React from 'react';

import { TransactionTypeEnum } from '../const/index';

import TransactionHistoryIcon from '../assets/transactionHistory.svg';
import ThreeDotsIcon from '../assets/threeDots.svg';

const partialTransactions = [
  {
    id: '1',
    title: 'Sushi',
    date: ' 31 Feb 2024',
    type: 'expense',
    amount: 23.1
  },
  {
    id: '2',
    title: 'Affiliate Income',
    date: ' 31 Feb 2024',
    type: 'income',
    amount: 100.3
  },
  {
    id: '3',
    title: 'Referral Income',
    date: ' 31 Feb 2024',
    type: 'income',
    amount: 55
  },
  {
    id: '4',
    title: 'Bread',
    date: ' 31 Feb 2024',
    type: 'expense',
    amount: 23.1
  },
  {
    id: '5',
    title: 'Mcdonalds',
    date: ' 31 Feb 2024',
    type: 'expense',
    amount: 36.3
  },
  {
    id: '6',
    title: 'Referral Income',
    date: ' 31 Feb 2024',
    type: 'income',
    amount: 100
  }
];

const Home = () => {
  const router = useRouter();

  return (
    <div>
      <TopBar />
      <div className="flex flex-row justify-between bg-cyan h-full">
        <SideBar />

        <div
          className="xs:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/4 2xl-:w-1/5 
				bg-white rounded-2xl mt-12 mr-4 p-8 h-6 outline outline-1 place-content-center items-center flex flex-col"
        >
          <h1 className="pt-2">Monthly Budget</h1>
          <div className="pb-2">$2000</div>
        </div>
        <div
          className="xs:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/4 2xl-:w-1/5 
				bg-white rounded-2xl mt-12 mr-4 p-8 h-6 outline outline-1 place-content-center items-center flex flex-col"
        >
          <h1 className="pt-2">Total Income</h1>
          <div className="pb-2 text-green">$4500</div>
        </div>
        <div
          className="xs:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/4 2xl-:w-1/5 
				bg-white rounded-2xl mt-12 mr-4 p-8 h-6 outline outline-1 place-content-center items-center flex flex-col"
        >
          <h1 className="pt-2">Total Expenses</h1>
          <div className="pb-2 text-red">$1500</div>
        </div>
        <div
          className="xs:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl-:w-1/5
				bg-white rounded-2xl m-12 h-4/5 outline outline-1 flex flex-col gap-2 pt-4"
        >
          <div className="flex flex-row place-content-center items-center w-full">
            <Image src={TransactionHistoryIcon} alt={'TransactionHistoryIcon'} />
            <h1 className="p-2 text-xl">Transaction History</h1>
          </div>

          {partialTransactions.map(transaction => {
            const appendedAmount = `$${transaction.amount}`;

            return (
              <div key={transaction.id}>
                {Separator()}

                <div className="flex flex-row justify-between mt-2">
                  <div className="flex flex-col mt-2 mb-2 pl-4">
                    <h1 className="text-2xl">{transaction.title}</h1>
                    <h2 className="text-xl">{transaction.date}</h2>
                  </div>

                  <div className="flex flex-row pr-4">
                    <p
                      className={`text-xl mt-6 mr-4 ${
                        transaction.type === TransactionTypeEnum.EXPENSE ? 'text-red' : 'text-green'
                      }`}
                    >
                      {appendedAmount}
                    </p>
                    <button onClick={e => router.push(`/transaction/edit?id=${transaction.id}`)}>
                      <Image src={ThreeDotsIcon} alt={'ThreeDotsIcon'} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {Separator()}

          <div className="flex justify-center">
            <button
              onClick={e => router.push('/transaction/new')}
              className="bg-light-gray w-1/2 h-16 m-4 rounded-2xl text-md"
            >
              Add New Transaction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
