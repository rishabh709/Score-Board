import React from "react";
import classes from "./ScoreCard.module.css";
import { useMatchContext } from "../../context/matchReducer";
function ScoreCard() {
  const{ state: matchState } = useMatchContext();
 
  return (
    <div>
      <div className={classes.scoreCard}>
        <div className={classes.teamScores}>
          <div className={classes.team1}>
            <div className={classes.logoName}>
              <img src="src\assets\team-icons\team1.png" alt="team1" />
              <h3>{matchState.team1}</h3>
            </div>
            <div className={classes.score}>
              {/* <div className={classes.runs}>{match.wickets[match.currentInnings]}/{match.runs[match.currentInnings]}</div> */}
              <div className={classes.runs}>{matchState.wickets[0]}/{matchState.runs[0]}</div>
              <div className={classes.overs}>{matchState.overNum[0]}.{matchState.ballNum[0]}</div>
              {/* <div className={classes.overs}>{overState.overNumber}.{ballState.ballNumber}</div> */}
            </div>
          </div>

          <div className={classes.team2}>
            <div className={classes.score}>
              <div className={classes.runs}>{matchState.wickets[1]}/{matchState.runs[1]}</div>
              <div className={classes.overs}>{matchState.overNum[1]}.{matchState.ballNum[1]}</div>
              {/* <div className={classes.overs}>(0)</div> */}
            </div>
            <div className={classes.logoName}>
              <img src="src\assets\team-icons\team2.png" alt="team2" />
              <h3>{matchState.team2}</h3>
            </div>
          </div>
        </div>
        {/* <div className={classes.battingAndBolwing}>
          <div className={classes.batting}>
            <div className={classes.batter}>
              <div className={classes.name}>Batter1</div>
              <div className={classes.batterScore}>
                <div className={classes.runs}>20</div>
                <div className={classes.balls}>10</div>
              </div>
            </div>
            <div className={classes.batter}>
              <div className={classes.name}>Batter2</div>
              <div className={classes.batterScore}>
                <div className={classes.runs}>20</div>
                <div className={classes.balls}>10</div>
              </div>
            </div>
          </div>

          <div className={classes.bolwing}>
            <div className={classes.bolwer}>
              <div className={classes.name}>Bolwer</div>
              <div className={classes.summary}>
                <div className={classes.wickets}>1</div>
                <div className={classes.runsGiven}>-23</div>
                <div className={classes.oversBolwed}>(19.3)</div>
              </div>
            </div>
            <div className={classes.thisOver}>
              {currentOver.balls.map((ball, k)=>{
                return <div key={k}>{ball.run}</div>
              })}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ScoreCard;
