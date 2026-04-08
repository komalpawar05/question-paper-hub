// ✅ Define type here itself
export interface Paper {
  id: string;
  title: string;
  subject: string;
  year: number; // ✅ important
  university: string;
  pages: number;
  price: number;
  popular: boolean;
  description: string;
}

// ✅ Apply type to data
const papers: Paper[] = [
  {
    id: "1",
    title: "Mathematics Final Exam 2023",
    subject: "Mathematics",
    year: 2023,
    university: "Mumbai University",
    pages: 12,
    price: 99,
    popular: true,
    description: "Complete final exam paper with solutions."
  },
  {
    id: "2",
    title: "Physics Semester 5 Paper",
    subject: "Physics",
    year: 2022,
    university: "Pune University",
    pages: 10,
    price: 79,
    popular: true,
    description: "Important questions and numericals."
  },
  {
    id: "3",
    title: "Computer Science Data Structures",
    subject: "Computer Science",
    year: 2024,
    university: "MIT",
    pages: 15,
    price: 120,
    popular: false,
    description: "DSA question bank with coding problems."
  },
    {
    id: "4",
    title: "Physics Semester 5 Paper",
    subject: "Physics",
    year: 2022,
    university: "Pune University",
    pages: 10,
    price: 79,
    popular: true,
    description: "Important questions and numericals."
  },
    {
    id: "5",
    title: "Chemistry Semester 3 Paper",
    subject: "Chemistry",
    year: 2023,
    university: "Mumbai University",
    pages: 8 ,
    price: 79,
    popular: true,
    description: "Important questions and numericals."
  },
];

export default papers;