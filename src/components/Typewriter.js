import React, { useEffect, useState } from "react";

const Typewriter = () => {
  const words = [
    "Knowledge Gained, Challenges Conquered, Your Journey Begins With Determination.",
    "Dreams Pursued, Goals Achieved, Your Education, Your Path With Perseverance.",
    "Start Strong, Study Smart, Every Effort Counts, Every Lesson Learned With Purpose.",
    "Success Awaits, Opportunities Abound, Your Potential Unleashed With Courage.",
    "Learning Thrives, Skills Sharpened, Your Growth, Your Commitment With Resilience.",
    "Discover Passion, Ignite Curiosity, Explore, Excel, Your Future Starts Here.",
    "Strive For Excellence, Embrace Challenges, Powered By Ambition.",
    "Education Empowers, Knowledge Elevates, Choose Greatness With Confidence.",
    "Innovation Sparked, Creativity Unleashed, Your Ideas, Your Impact With Vision.",
    "Achievements Unlocked, Potential Realized, Endless Possibilities With Persistence.",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const targetWord = words[currentWordIndex];
      setCurrentWord(targetWord.substring(0, currentIndex));

      if (!isDeleting && currentIndex === targetWord.length) {
        setIsDeleting(true);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }

      setCurrentIndex((prevIndex) => prevIndex + (isDeleting ? -1 : 1));
    };

    const timeout = setTimeout(type, 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, currentWordIndex, isDeleting, words]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1
        id="typewriter"
        className="text-4xl font-bold text-white md:text-5xl lg:text-6xl"
      >
        {currentWord}
      </h1>
    </div>
  );
};

export default Typewriter;
