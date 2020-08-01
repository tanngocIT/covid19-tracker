import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ caseType, cases, total, active, isRed, ...props }) {
  if (!caseType) return null;
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        <Typography gutterBottom className={"infoBox--white"}>
          {caseType.title}
        </Typography>
        <h2 className={`infoBox__total ${!isRed && "infoBox__total--green"}`}>
          {total} Total
        </h2>

        <Typography className="infoBox--white infoBox__cases">
          + {cases} Today
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
