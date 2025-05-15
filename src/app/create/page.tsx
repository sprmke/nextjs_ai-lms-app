'use client';

import React, { useState } from 'react';

import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Loader } from 'lucide-react';
import { useUser } from '@clerk/nextjs';

import SelectOption from './_components/SelectOption';
import TopicInput from './_components/TopicInput';
import { Button } from '@/components/ui/button';

type FormData = {
  topic: string;
  courseType: string;
  difficultyLevel: string;
};

function CreatePage() {
  const { user } = useUser();

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

  // Save user input and generate AI course outline
  const generateCourseOutline = async () => {
    const courseOutline = await axios.post('/api/generate-course-outline', {
      courseId: uuidv4(),
      ...formData,
      createdBy: user?.primaryEmailAddress?.emailAddress,
    });

    console.log(courseOutline);
  };

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
