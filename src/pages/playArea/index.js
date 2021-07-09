import { useState } from "react";
import cn from "classnames";
import data from "../../questions";
import { useParams, Link } from "react-router-dom";
import "./style.scss";

const PlayArea = (props) => {
  const { number } = useParams();
  console.log(data, number);
  const currentQuestion = data.questions[number];
  const [showAll, setShowAll] = useState(false);
  const [value, setValue] = useState("");
  const [revealIndex, setRevealIndex] = useState([]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const ans = currentQuestion.answers;
  const ques = currentQuestion.ques;

  const searchValue = () => {
    let index =
      value &&
      ans.findIndex(
        ({ value: val }) =>
          val.toLowerCase().includes(value.toLowerCase()) ||
          value.toLowerCase().includes(val.toLowerCase())
      );
    if (index >= 0) setRevealIndex((revealIndex) => [...revealIndex, index]);
    setValue("");
  };

  return (
    <div className="playarea-cont">
      <div className="header">
        <Link to={{ pathname: `/` }}>Home</Link>
        <div onClick={() => setShowAll(true)}> Show All </div>
      </div>
      <div className="search-bar-cont">
        <div className="bar">
          <div className="question">{ques}</div>
          <input
            className="searchbar"
            type="text"
            title="Search"
            value={value}
            onChange={handleInputChange}
          />
        </div>
        <div className="buttons">
          <button className="button" type="button" onClick={searchValue}>
            Google Search
          </button>
        </div>

        <div className="answers-cont">
          {ans.map(({ value, weightage }, index) => {
            return (
              <div className="ans-item" key={value}>
                <div>{value}</div>
                <div>{weightage}</div>
                <div
                  className={cn("mask", {
                    "fade-out": showAll || revealIndex.includes(index)
                  })}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlayArea;