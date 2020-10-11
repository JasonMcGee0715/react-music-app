import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function MasterVolume(props) {
  return (
    props.MasterVolume > 80 &&
    <div>
      <CardContent>
        <Typography variant="body2" component="p">
          Listening to music at a high volume could cause long term hearing
          loss.
        </Typography>
      </CardContent>
    </div>
  );
}
