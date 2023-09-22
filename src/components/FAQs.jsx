import { useState } from "react";

function Faqs() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveQuestionIndex(index);
  };

  const questions = [
    {
      id: 1,
      title: "Can I work on a project I started before the hackathon?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      id: 2,
      title: "What happens if I don't have an idea for a project?",
      answer: "Tailwind CSS is a utility-first CSS framework.",
    },
    {
      id: 3,
      title: "Can I join a team or do I have to come with one?",
      answer:
        "React is used for building web applications, while React Native is used for building mobile applications.",
    },
    {
      id: 3,
      title: "What happens if I need help during the hackathon?",
      answer:
        "React is used for building web applications, while React Native is used for building mobile applications.",
    },
    {
      id: 3,
      title: "What happens after the hackathon ends?",
      answer:
        "React is used for building web applications, while React Native is used for building mobile applications.",
    },
    {
      id: 3,
      title: "Can i work in  project I started before the hackathon?",
      answer:
        "React is used for building web applications, while React Native is used for building mobile applications.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-4">
        {questions.map((question, index) => (
          <div key={question.id}>
            <div
              className={`py-2.5 flex justify-between items-center cursor-pointer border-b border-fuchsia-500 ${
                activeQuestionIndex === index ? "" : ""
              }`}
              onClick={() => handleQuestionClick(index)}
            >
              <h2 className="">{question.title}</h2>
              <svg
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transform-transform ${
                  activeQuestionIndex === index ? "transform rotate-45" : ""
                }`}
              >
                <path
                  d="M4.78 10V6.2H0.96V4.32H4.78V0.559999H6.58V4.32H10.4V6.2H6.58V10H4.78Z"
                  fill="#D434FE"
                />
              </svg>
            </div>
            {activeQuestionIndex === index && (
              <div className="p-4 bg-fuchsia-500/10 transition-all">
                <p>{question.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Faqs;
