import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function OnlineMode(props) {
  return (
    <div>
      <CardContent>
        <Typography variant="body2" component="p">
          Your application is offline. You won't be able to share or stream
          music to other devices.
        </Typography>
      </CardContent>
    </div>
  );
}
