'use client';

import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import SelectOption from './_components/SelectOption';
import { Loader } from 'lucide-react';
import TopicInput from './_components/TopicInput';

type FormData = {
  topic: string;
  courseType: string;
  difficultyLevel: string;
};

function CreatePage() {
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    topic: '',
    courseType: '',
    difficultyLevel: '',
  });

  const handleUserInput = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));

    console.log(formData);
  };
  const generateCourseOutline = () => {};

  return (
    <div className="flex flex-col items-center p-5 md:px-24 lg:px-36 mt-20">
      <h2 className="font-bold text-4xl text-primary">
        Start Building Your Personal Study Material
      </h2>
      <p className="text-gray-500 text-lg">
        Fill all details in order to generate the study material for your next
        project
      </p>

      <div className="mt-10">
        {step == 0 ? (
          <SelectOption
            setSelectedStudyType={(value) =>
              handleUserInput('courseType', value)
            }
          />
        ) : (
          <TopicInput
            setTopic={(value) => handleUserInput('topic', value)}
            setDifficultyLevel={(value) =>
              handleUserInput('difficultyLevel', value)
            }
          />
        )}
      </div>

      <div
        className={`flex justify-between w-full mt-32 ${
          step == 0 ? 'justify-end' : 'justify-between'
        }`}
      >
        {step !== 0 && (
          <Button variant="outline" onClick={() => setStep(step - 1)}>
            Previous
          </Button>
        )}
        {step == 0 ? (
          <Button onClick={() => setStep(step + 1)}>Next</Button>
        ) : (
          <Button onClick={generateCourseOutline} disabled={isLoading}>
            {isLoading ? <Loader className=" animate-spin" /> : 'Generate'}
          </Button>
        )}
      </div>
    </div>
  );
}

export default CreatePage;
