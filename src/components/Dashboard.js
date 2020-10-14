import React, { useState, useEffect } from "react";
//import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Slider from "@material-ui/core/Slider";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import OnlineMode from "./Notifications/onlineMode";
import MasterVolume from "./Notifications/masterVolume";
import SoundQuality from "./Notifications/soundQuality";

const Dashboard = (props) => {
  const [onlineMode, setOnlineMode] = useState(false);
  const [masterVolume, setMasterVolume] = useState(20);
  const [soundQuality, setSoundQuality] = useState();

  //same thing as componentDidUpdate, but in functional based coding.
  useEffect(() => {
    console.log(onlineMode);
  }, [onlineMode]);

  const handleSwitch = (evt) => {
    evt.preventDefault();
    setOnlineMode(!onlineMode);
  };

  const handleVolume = (evt, newValue) => {
    evt.preventDefault();
    setMasterVolume(newValue);
    console.log(masterVolume);
  };

  const handleQuality = (evt) => {
    evt.preventDefault();
    setSoundQuality(evt.target.value);
    console.log(soundQuality);
  };

  return (
    <div className="fullContainer">
      <h2>Welcome to your Music App!</h2>
      <div className="cardContainer">
        <Grid
          spacing={24}
          style={{
            padding: 24,
            display: "flex"
          }}
        >
          <Grid item xs={12} sm={6} lg={4} xl={3} style={{ margin: 24 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h2">
                  Online Mode
                </Typography>
                <Typography variant="body2" component="p">
                  <br />
                  Is this application connected to the internet?
                </Typography>
              </CardContent>
              <CardActions>
                <FormControlLabel
                  control={<Switch name="loginSlider" />}
                  label="Offline / Online"
                  onChange={handleSwitch}
                />
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} lg={4} xl={3} style={{ margin: 24 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h2">
                  Master Volume
                </Typography>
                <br />
                <Typography variant="body2" component="p">
                  Overrides all other sound settings in this application.
                </Typography>
              </CardContent>
              <CardActions>
                <Slider
                  defaultValue={20}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  onChange={handleVolume}
                  min={10}
                  max={100}
                />
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} lg={4} xl={3} style={{ margin: 24 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h2">
                  Sound Quality
                </Typography>
                <Typography variant="body2" component="p">
                  <br />
                  Manually control the music quality in the event of a poor
                  connection.
                </Typography>
              </CardContent>
              <CardActions>
                <FormControl>
                  <InputLabel htmlFor="uncontrolled-native">Name</InputLabel>
                  <NativeSelect
                    defaultvalue={""}
                    onChange={handleQuality}
                    inputProps={{
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value="" />
                    <option value={"10"}>Low</option>
                    <option value={"20"}>Normal</option>
                    <option value={"30"}>High</option>
                  </NativeSelect>
                </FormControl>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
      <h4>System Notifications...</h4>
      <div className="notifications">
        <Grid spacing={24} style={{ padding: 24, display: "flex" }}>
          <Grid item xs={12} sm={6} lg={4} xl={3} style={{ margin: 24 }}>
            <Card>
              <OnlineMode onlineMode={onlineMode} />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} lg={4} xl={3} style={{ margin: 24 }}>
            <Card>
              <MasterVolume masterVolume={masterVolume} />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} lg={4} xl={3} style={{ margin: 24 }}>
            <Card>
              <SoundQuality soundQuality={soundQuality} />
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

// class Dashboard extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       onlineMode: false,
//       masterVolume: 20,
//       //

//     };
//   }

// componentDidUpdate = () => {
//   console.log(this.state.onlineMode)
// }

// handleSwitch = (evt) => {
// evt.preventDefault()
// this.setState({
//   onlineMode: !this.state.onlineMode
// })
// }

//   render() {
//     return (
//       <div className="fullContainer">
//         <h2>Welcome to your Music App!</h2>
//         <div className="cardContainer">
//           <Grid spacing={24} style={{ padding: 24, display: "flex" }}>
//             <Grid item xs={12} sm={6} lg={4} xl={3} style={{ margin: 24 }}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6" component="h2">
//                     Online Mode
//                   </Typography>
//                   <Typography variant="body2" component="p">
//                     <br />
//                     Is this application connected to the internet?
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <FormControlLabel
//                     control={<Switch name="loginSlider" />}
//                     label="Offline / Online"
//                     onChange={this.handleSwitch}
//                   />
//                 </CardActions>
//               </Card>
//             </Grid>

//             <Grid item xs={12} sm={6} lg={4} xl={3} style={{ margin: 24 }}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6" component="h2">
//                     Master Volume
//                   </Typography>
//                   <br />
//                   <Typography variant="body2" component="p">
//                     Overrides all other sound settings in this application.
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Slider
//                     defaultValue={30}
//                     aria-labelledby="discrete-slider"
//                     valueLabelDisplay="auto"
//                     step={10}
//                     marks
//                     min={10}
//                     max={110}
//                   />
//                 </CardActions>
//               </Card>
//             </Grid>

//             <Grid item xs={12} sm={6} lg={4} xl={3} style={{ margin: 24 }}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6" component="h2">
//                     Sound Quality
//                   </Typography>
//                   <Typography variant="body2" component="p">
//                     <br />
//                     Manually control the music quality in the event of a poor
//                     connection.
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <FormControl>
//                     <InputLabel htmlFor="uncontrolled-native">Name</InputLabel>
//                     <NativeSelect
//                       defaultValue={30}
//                       inputProps={{
//                         id: "uncontrolled-native",
//                       }}
//                     >
//                       <option value={10}>Low</option>
//                       <option value={20}>Normal</option>
//                       <option value={30}>High</option>
//                     </NativeSelect>
//                   </FormControl>
//                 </CardActions>
//               </Card>
//             </Grid>
//           </Grid>
//         </div>
//         <h4>System Notifications...</h4>
//         <div className="notifications">
//           <Grid spacing={24} style={{ padding: 24, display: "flex" }}>
//             <Grid item xs={12} sm={6} lg={4} xl={3} style={{ margin: 24 }}>
//               <Card>
//                <OnlineMode onlineMode={this.state.onlineMode}/>
//               </Card>
//             </Grid>

//             <Grid item xs={12} sm={6} lg={4} xl={3} style={{ margin: 24 }}>
//               <Card>
//                 <MasterVolume />
//               </Card>
//             </Grid>

//             <Grid item xs={12} sm={6} lg={4} xl={3} style={{ margin: 24 }}>
//               <Card>
//                 <SoundQuality />
//               </Card>
//             </Grid>
//           </Grid>
//         </div>
//       </div>
//     );
//   }
// }

// const Dashboard = (props) => {
//   return (
//     <div className="fullContainer">
//       <h2>Welcome to your Music App!</h2>
//       <div className="cardContainer">
//         <Grid spacing={24} style={{ padding: 24, display: "flex" }}>
//           <Grid item xs={12} sm={6} lg={4} xl={3} style={{ margin: 24 }}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6" component="h2">
//                   Online Mode
//                 </Typography>
//                 <Typography variant="body2" component="p">
//                   <br />
//                   Is this application connected to the internet?
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <FormControlLabel
//                   control={<Switch name="loginSlider" />}
//                   label="Secondary"
//                 />
//               </CardActions>
//             </Card>
//           </Grid>

//           <Grid item xs={12} sm={6} lg={4} xl={3} style={{ margin: 24 }}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6" component="h2">
//                   Master Volume
//                 </Typography>
//                 <br />
//                 <Typography variant="body2" component="p">
//                   Overrides all other sound settings in this application.
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Slider
//                   defaultValue={30}
//                   aria-labelledby="discrete-slider"
//                   valueLabelDisplay="auto"
//                   step={10}
//                   marks
//                   min={10}
//                   max={110}
//                 />
//               </CardActions>
//             </Card>
//           </Grid>

//           <Grid item xs={12} sm={6} lg={4} xl={3} style={{ margin: 24 }}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6" component="h2">
//                   Sound Quality
//                 </Typography>
//                 <Typography variant="body2" component="p">
//                   <br />
//                   Manually control the music quality in the event of a poor
//                   connection.
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <FormControl>
//                   <InputLabel htmlFor="uncontrolled-native">Name</InputLabel>
//                   <NativeSelect
//                     defaultValue={30}
//                     inputProps={{
//                       id: "uncontrolled-native",
//                     }}
//                   >
//                     <option value={10}>Low</option>
//                     <option value={20}>Normal</option>
//                     <option value={30}>High</option>
//                   </NativeSelect>
//                 </FormControl>
//               </CardActions>
//             </Card>
//           </Grid>
//         </Grid>
//       </div>
//       <h4>System Notifications...</h4>
//       <div className="notifications">
//         <Grid spacing={24} style={{ padding: 24, display: "flex" }}>
//           <Grid item xs={12} sm={6} lg={4} xl={3} style={{ margin: 24 }}>
//             <Card>
//               <OnlineMode />
//             </Card>
//           </Grid>

//           <Grid item xs={12} sm={6} lg={4} xl={3} style={{ margin: 24 }}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6" component="h2">
//                   Master Volume
//                 </Typography>
//                 <br />
//                 <Typography variant="body2" component="p">
//                   Overrides all other sound settings in this application.
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Slider
//                   defaultValue={30}
//                   aria-labelledby="discrete-slider"
//                   valueLabelDisplay="auto"
//                   step={10}
//                   marks
//                   min={10}
//                   max={110}
//                 />
//               </CardActions>
//             </Card>
//           </Grid>

//           <Grid item xs={12} sm={6} lg={4} xl={3} style={{ margin: 24 }}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6" component="h2">
//                   Sound Quality
//                 </Typography>
//                 <Typography variant="body2" component="p">
//                   <br />
//                   Manually control the music quality in the event of a poor
//                   connection.
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <FormControl>
//                   <InputLabel htmlFor="uncontrolled-native">Name</InputLabel>
//                   <NativeSelect
//                     defaultValue={30}
//                     inputProps={{
//                       id: "uncontrolled-native",
//                     }}
//                   >
//                     <option value={10}>Low</option>
//                     <option value={20}>Normal</option>
//                     <option value={30}>High</option>
//                   </NativeSelect>
//                 </FormControl>
//               </CardActions>
//             </Card>
//           </Grid>
//         </Grid>
//       </div>
//     </div>
//   );
// };

export default Dashboard;
