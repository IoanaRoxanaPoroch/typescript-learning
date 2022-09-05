import React, { useState } from "react";
import { FC } from "react";

export enum HairColor {
  Blonde = "Your hair is blonde, good for you",
  Brown = "Cool color",
  Pink = "wow",
}

interface Props {
  name: string;
  age: number;
  email: string;
  hairColor: HairColor;
}

export const Person: FC<Props> = ({ name, age, email, hairColor }) => {
  const [country, setCountry] = useState<string | null>("");

  type NameType = "Pedro" | "Jack";

  const nameForType: NameType = "Jack";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <h1>{name}</h1>

      <h1>{email}</h1>

      <h1>{age}</h1>

      <input
        type="text"
        placeholder="Write your country..."
        onChange={handleChange}
      />

      {country}

      {hairColor}
    </div>
  );
};
