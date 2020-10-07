import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function SoundQuality(props) {
  return (
    <div>
      <CardContent>
        <Typography variant="body2" component="p">
          Music quality is degraded. Increase quality if your connection allows
          it.
        </Typography>
      </CardContent>
    </div>
  );
}
