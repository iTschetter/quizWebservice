import { useLocation } from "react-router-dom";

const SubmittedQuiz = () => {

    const location = useLocation();
    const userScore = location.state.userScore;

    return (
        <div className="websiteTopper">
            <h1 className="smallerTitle">Your Responses have been Recorded.</h1>
            <br />
            <br />
            <h1 className="questionTopper">Your Results:</h1>
            <div className="questionBubble">
                <h1 className={userScore >= 8 ? "highScore" : userScore >= 5 ? "mediumScore" : "lowScore"}>{userScore} /10</h1>
            </div>
        </div>
    )
}

export default SubmittedQuiz;