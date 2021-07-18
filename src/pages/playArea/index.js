import { useState } from "react";
import cn from "classnames";
import data from "../../questions";
import { useParams, Link } from "react-router-dom";
import Toast from "../../components/toast";
import "./style.scss";

const PlayArea = (props) => {
  const { number } = useParams();
  console.log(data, number);
  const currentQuestion = data.questions[number];
  const [showAll, setShowAll] = useState(false);
  const [value, setValue] = useState("");
  const [revealIndex, setRevealIndex] = useState([]);

  const [errors, setErrors] = useState(0);
  const [showCross, setVisible] = useState(false);

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
    if (index >= 0) {
      setRevealIndex((revealIndex) => [...revealIndex, index]);
    } else {
      console.log("here");
      setErrors((err) => err + 1);
      setVisible(true);
    }
    setValue("");
  };

  return (
    <div className="playarea-cont">
      <div className="header">
        <Link to={{ pathname: `/` }}>Home</Link>
        <div className="heading">The Great Brain Drain</div>
        <div onClick={() => setShowAll(true)}> Show All </div>
      </div>
      <div className="question">{ques}</div>
      <div className="search-bar-cont">
        <div className="bar">
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
            Search
          </button>
        </div>

        <div className="answers-cont">
          {ans.map(({ value, weightage }, index) => {
            return (
              <div className="ans-item" key={value}>
                <div>{value}</div>
                {/* <div>{weightage}</div> */}
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
      {showCross && (
        <Toast
          setVisible={setVisible}
          content={
            <div className="error-cont">
              {[...Array(errors)].map((_, i) => (
                <div className="close big thick" key={i} />
              ))}
            </div>
          }
        />
      )}
    </div>
  );
};

export default PlayArea;
