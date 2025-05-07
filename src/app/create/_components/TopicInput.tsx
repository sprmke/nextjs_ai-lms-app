import React from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

type TopicInputProps = {
  setTopic: (topic: string) => void;
  setDifficultyLevel: (difficultyLevel: string) => void;
};

function TopicInput({ setTopic, setDifficultyLevel }: TopicInputProps) {
  return (
    <div className="mt-10 w-full flex flex-col">
      <h2>
        Enter topic or paste the content for which you want to generate the
        study material
      </h2>

      <Textarea
        placeholder="Start writing here"
        className="mt-2 w-full"
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          setTopic(event.target.value)
        }
      />

      <h2 className="mt-5 mb-3">Select the difficulty Level</h2>
      <Select onValueChange={(value: string) => setDifficultyLevel(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Difficulty Level" />
        </SelectTrigger>
        <SelectContent>
          {['Easy', 'Moderate', 'Hard'].map((level) => (
            <SelectItem key={level} value={level}>
              {level}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default TopicInput;
