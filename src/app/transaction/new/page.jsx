'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import TopBar from '../../../components/TopBar';
import SideBar from '../../../components/SideBar';
import Separator from '../../../components/Separator';
import CommonDatePicker from '../../../components/CommonDatePicker';
import React, { useState } from 'react';
import dayjs from 'dayjs';

import { TransactionTypeEnum } from '../../../const/index';

const CreateTransaction = () => {
  const router = useRouter();

  const [selectedType, setSelectedType] = useState(undefined);
  const [selectedDate, setSelectedDate] = useState(dayjs(new Date()));

  return (
    <div>
      {console.log('selectedDate', selectedDate.toISOString())}
      <TopBar />
      <div className="flex flex-row justify-between bg-cyan h-full">
        <SideBar />

        <div className="w-full bg-white rounded-2xl mt-12 mr-4 p-8 h-full outline outline-1 flex flex-col">
          <div className="flex flex-row mt-10 w-full items-center">
            <p className="text-2xl">Type</p>
            <div className="flex flex-row w-full place-content-center items-center">
              <button
                className={`outline outline-1 p-4 rounded-2xl w-1/4 text-xl ${
                  selectedType === TransactionTypeEnum.INCOME && 'bg-green text-white'
                }`}
                onClick={e => setSelectedType(TransactionTypeEnum.INCOME)}
              >
                Income
              </button>
              <button
                className={`outline outline-1 p-4 rounded-2xl w-1/4 text-xl ${
                  selectedType === TransactionTypeEnum.EXPENSE && 'bg-red text-white'
                }`}
                onClick={e => setSelectedType(TransactionTypeEnum.EXPENSE)}
              >
                Expense
              </button>
            </div>
          </div>

          <div className="flex flex-row mt-10 w-full items-center">
            <p className="text-2xl">Name</p>
            <div className="flex flex-row w-full place-content-center items-center">
              <input className="underline outline outline-1" id="username" type="text"></input>
            </div>
          </div>

          <div className="flex flex-row mt-10 w-full items-center">
            <p className="text-2xl">Date</p>
            <div className="flex flex-row w-full place-content-center items-center">
              <CommonDatePicker
                value={selectedDate}
                onChange={newValue => setSelectedDate(newValue)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTransaction;
