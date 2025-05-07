import React, { useState } from 'react';
import Image from 'next/image';

type SelectOptionProps = {
  setSelectedStudyType: (type: string) => void;
};

const OPTIONS = [
  {
    name: 'Exam',
    icon: '/exam_1.png',
  },
  {
    name: 'Job Interview',
    icon: '/job.png',
  },
  {
    name: 'Practice',
    icon: '/practice.png',
  },
  {
    name: 'Coding Prep',
    icon: '/code.png',
  },
  {
    name: 'Other',
    icon: '/knowledge.png',
  },
];

function SelectOption({ setSelectedStudyType }: SelectOptionProps) {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div>
      <h2 className="text-center mb-2 text-lg">
        Please choose your study material
      </h2>
      <div className="grid grid-cols-2 mt-5 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {OPTIONS.map(({ name, icon }, index) => (
          <div
            key={index}
            className={`p-4 flex flex-col items-center justify-center 
                border rounded-xl hover:border-primary cursor-pointer
                ${name == selectedOption && 'border-primary'}`}
            onClick={() => {
              setSelectedOption(name);
              setSelectedStudyType(name);
            }}
          >
            <Image src={icon} alt={name} width={50} height={50} />
            <h2 className="text-sm mt-2">{name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectOption;
