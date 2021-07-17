import "./style.scss";
import data from "../../questions";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const PlayArea = (props) => {
  return (
    <div className="home">
      <div className="header">
        <div className="heading">The Great Brain Drain</div>
      </div>
      <div className="questions-cont">
        {data.questions.map((_, i) => {
          return (
            <Link
              to={{
                pathname: `/question/${i}`
              }}
              className="question-link"
            >
              <Button text={`Ques ${i + 1}`} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PlayArea;
