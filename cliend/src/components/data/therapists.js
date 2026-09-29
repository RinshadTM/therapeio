import family from "../../assets/family.jpg";
import consaltancy from "../../assets/consaltancy.jpg";

import dctr1 from "../../assets/dctr1.jpg";
import dctr2 from "../../assets/dctr2.png";
import dctr3 from "../../assets/dctr3.png";

export const supports = [
  {
    id: 1,
    support: "Family Counseling",
    image: family,
  },
  {
    id: 2,
    support: "Consultant Psychologist",
    image: consaltancy,
  },
  {
    id: 3,
    support: "Clinical Psychologist",
    image: family,
  },
  {
    id: 4,
    support: "Wellness Workshops",
    image: family,
  },
  {
    id: 5,
    support: "Psychiatrist",
    image: consaltancy,
  },
  {
    id: 6,
    support: "Sexual Health",
    image: family,
  },
];

export const therapist = [
  {
    id: 1,
    name: "Gazal Ayesha",
    post: "Consultant Psychologist",
    image: dctr2,
    rating: "4.8",
    experience: "2+ Years of Experience",
    expertise: ["Counselling Psychology", "Psychotherapy", "Adult"],
  },

  {
    id: 2,
    name: "Ayesha Rahman",
    post: "Clinical Psychologist",
    image: dctr2,
    rating: "4.8",
    experience: "3+ Years of Experience",
    expertise: ["Anxiety", "Depression", "Adult"],
  },

  {
    id: 3,
    name: "Fathima Sihana K P",
    post: "Consultant Psychologist",
    image: dctr2,
    rating: "4.7",
    experience: "2+ Years of Experience",
    expertise: ["Adult", "Couples", "Child"],
  },

  {
    id: 4,
    name: "Shafana V",
    post: "Consultant Psychologist",
    image: dctr1,
    rating: "4.7",
    experience: "4+ Years of Experience",
    expertise: ["Couples", "Child", "Family"],
  },

  {
    id: 5,
    name: "Dr. Vismaya Nair",
    post: "Clinical Psychologist",
    image: dctr3,
    rating: "4.9",
    experience: "5+ Years of Experience",
    expertise: ["Trauma Recovery", "Anxiety", "Depression"],
  },

  {
    id: 6,
    name: "Dr. Arun Menon",
    post: "Consultant Psychologist",
    image: dctr1,
    rating: "4.8",
    experience: "6+ Years of Experience",
    expertise: ["Stress Management", "Adult", "Psychotherapy"],
  },

  {
    id: 7,
    name: "Dr. Neha Thomas",
    post: "Child Psychologist",
    image: dctr3,
    rating: "4.7",
    experience: "4+ Years of Experience",
    expertise: ["Child Psychology", "Family", "Counselling"],
  },

  {
    id: 8,
    name: "Dr. Anjali Menon",
    post: "Consultant Psychologist",
    image: dctr2,
    rating: "4.8",
    experience: "3+ Years of Experience",
    expertise: ["Relationship Counselling", "Couples", "Adult"],
  },

  {
    id: 9,
    name: "Dr. Rahul Nair",
    post: "Clinical Psychologist",
    image: dctr1,
    rating: "4.9",
    experience: "7+ Years of Experience",
    expertise: ["Depression", "Trauma Recovery", "Psychotherapy"],
  },

  {
    id: 10,
    name: "Dr. Meera Joseph",
    post: "Consultant Psychologist",
    image: dctr3,
    rating: "4.8",
    experience: "5+ Years of Experience",
    expertise: ["Sexual Health", "Relationship", "Adult"],
  },
];

export const getTherapist = (id) =>
  therapist.find((t) => t.id === Number(id));