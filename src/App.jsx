import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "What year was the very first model of the iPhone released?",
      answers: [
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2007",
          correct: true,
        },
        {
          text: "2012",
          correct: false,
        },
        {
          text: "2002",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What does “HTTP” stand for?",
      answers: [
        {
          text: "HyperText Transfer Protocol",
          correct: true,
        },
        {
          text: "HyperWrite Transfer Protocol",
          correct: false,
        },
        {
          text: "HyperText Translate Protocol",
          correct: false,
        },
        {
          text: "HyperTime Transfer Protocol",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which email service is owned by Microsoft",
      answers: [
        {
          text: "Hotmail",
          correct: true,
        },
        {
          text: "Gmail",
          correct: false,
        },
        {
          text: "Yahoo",
          correct: false,
        },
        {
          text: "twitter",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "What year was the World Wide Web invented?",
      answers: [
      {
      text: "1989",
      correct: true,
      },
      {
      text: "1975",
      correct: false,
      },
      {
      text: "1990",
      correct: false,
      },
      {
      text: "2000",
      correct: false,
      },
      ],
      }
      ,
      {
      id: 5,
      question: "What is the symbol of element Gold?",
      answers: [
      {
      text: "Au",
      correct: true,
      },
      {
      text: "Ag",
      correct: false,
      },
      {
      text: "Cu",
      correct: false,
      },
      {
      text: "Fe",
      correct: false,
      },
      ],
      },
      {
        id: 6,
        question: "What is the highest mountain in the world?",
        answers: [
        {
        text: "Mount Everest",
        correct: true,
        },
        {
        text: "K2",
        correct: false,
        },
        {
        text: "Kangchenjunga",
        correct: false,
        },
        {
        text: "Lhotse",
        correct: false,
        },
        ],
        }
        ,
        {
        id: 7,
        question: "What is the currency of Japan?",
        answers: [
        {
        text: "Japanese Yen",
        correct: true,
        },
        {
        text: "US Dollar",
        correct: false,
        },
        {
        text: "Euro",
        correct: false,
        },
        {
        text: "British Pound",
        correct: false,
        },
        ],
        }
        ,
        {
        id: 8,
        question: "What is the largest ocean in the world?",
        answers: [
        {
        text: "Pacific Ocean",
        correct: true,
        },
        {
        text: "Atlantic Ocean",
        correct: false,
        },
        {
        text: "Indian Ocean",
        correct: false,
        },
        {
        text: "Arctic Ocean",
        correct: false,
        },
        ],
        }
        ,
        {
        id: 9,
        question: "Which planet is referred to as the 'Red Planet'?",
        answers: [
        {
        text: "Mars",
        correct: true,
        },
        {
        text: "Jupiter",
        correct: false,
        },
        {
        text: "Venus",
        correct: false,
        },
        {
        text: "Mercury",
        correct: false,
        },
        ],
        }
        ,
        {
        id: 10,
        question: "What is the smallest country in the world by land area?",
        answers: [
        {
        text: "Vatican City",
        correct: true,
        },
        {
        text: "Monaco",
        correct: false,
        },
        {
        text: "Nauru",
        correct: false,
        },
        {
        text: "Tuvalu",
        correct: false,
        },
        ],
        }
        ,
        {
        id: 11,
        question: "What is the largest desert in the world?",
        answers: [
        {
        text: "Sahara Desert",
        correct: true,
        },
        {
        text: "Antarctic Desert",
        correct: false,
        },
        {
        text: "Arabian Desert",
        correct: false,
        },
        {
        text: "Gobi Desert",
        correct: false,
        },
        ],
        },
        {
          id: 12,
          question: "What is the name of the first man on the moon?",
          answers: [
          {
          text: "Neil Armstrong",
          correct: true,
          },
          {
          text: "Buzz Aldrin",
          correct: false,
          },
          {
          text: "Michael Collins",
          correct: false,
          },
          {
          text: "Alan Shepard",
          correct: false,
          },
          ],
          }
          ,
          {
          id: 13,
          question: "What is the name of the river that flows through Egypt?",
          answers: [
          {
          text: "Nile",
          correct: true,
          },
          {
          text: "Amazon",
          correct: false,
          },
          {
          text: "Yangtze",
          correct: false,
          },
          {
          text: "Yellow",
          correct: false,
          },
          ],
          }
          ,
          {
          id: 14,
          question: "What is the capital of Australia?",
          answers: [
          {
          text: "Canberra",
          correct: true,
          },
          {
          text: "Sydney",
          correct: false,
          },
          {
          text: "Melbourne",
          correct: false,
          },
          {
          text: "Perth",
          correct: false,
          },
          ],
          }
          ,
          {
          id: 15,
          question: "What is the name of the longest river in the world?",
          answers: [
          {
          text: "Nile",
          correct: true,
          },
          {
          text: "Yangtze",
          correct: false,
          },
          {
          text: "Amazon",
          correct: false,
          },
          {
          text: "Yellow",
          correct: false,
          },
          ],
          }
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );
 useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
 
