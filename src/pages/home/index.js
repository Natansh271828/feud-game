import "./style.scss";
import data from "../../questions";
import { Link } from "react-router-dom";

const PlayArea = (props) => {
  return (
    <div className="home">
      <div className="questions-cont">
        {data.questions.map((_, i) => {
          return (
            <Link
              to={{
                pathname: `/question/${i}`
              }}
              className="question-link"
            >
              Ques {i + 1}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PlayArea;
