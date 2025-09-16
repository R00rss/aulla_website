export type Animal = {
  id: number;
  type: TypeAnimal;
  name: string;
  image: string;
};

export type TypeAnimal = "dog" | "cat";
