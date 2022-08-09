import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

import DefaultChatMsg from "../component/layout/chatmain/chat";

import av1 from "../images/avatar/1.png";
import av2 from "../images/avatar/2.png";
import av3 from "../images/avatar/3.png";
import av4 from "../images/avatar/4.png";
import av5 from "../images/avatar/5.png";
import av6 from "../images/avatar/6.png";
import av7 from "../images/avatar/7.png";
import av8 from "../images/avatar/8.png";
import av9 from "../images/avatar/9.png";
import av10 from "../images/avatar/10.png";

const data = [
  {
    dp: av1,
    primary: "Henry Kevil",
    message: "I will be there by 5",
    view_status: "unseen",
  },
  {
    dp: av2,
    primary: "Pallavi Kumari",
    message: "I am here to help you",
    view_status: "unseen",
  },
  {
    dp: av3,
    primary: "Natalia",
    message: "Hello, thank you for visiting. Can I help you with something?",
    view_status: "seen",
  },
  {
    dp: av4,
    primary: "Taylor",
    message:
      "Hello, thank you for contacting our live chat support. May I have your name please?",
    view_status: "seen",
  },
  {
    dp: av5,
    primary: "Alia",
    message: "Oh! That sounds challenging.",
    view_status: "unseen",
  },
  {
    dp: av6,
    primary: "Sam",
    message: "I can understand your frustration.",
    view_status: "seen",
  },
  {
    dp: av7,
    primary: "Stephan Strange",
    message: "It makes me sad to hear that happened.",
    view_status: "unseen",
  },
  {
    dp: av8,
    primary: "Tony Stark",
    message: "We appreciate your honest feedback.",
    view_status: "unseen",
  },
  {
    dp: av9,
    primary: "Bruce Banner",
    message:
      "It looks like you’re visiting quite a few pages! Can we help you find anything?",
    view_status: "seen",
  },
  {
    dp: av10,
    primary: "Bharat Singh",
    message:
      "Seems that you are visiting our site frequently but not making a final purchase. Can I help you decide on the right choice?",
    view_status: "seen",
  },
];

export default function AlignItemsList() {
  return (
    <Grid container direction="row">
      <Grid item xs={3}>
        <List
          style={{
            position: "fixed",
            overflowY: "scroll",
            overflowX: "hidden",
            borderRight: "2px solid black",
          }}
          sx={{ bgcolor: "background.paper" }}
        >
          {data.map((val, index) => (
            <div>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={val.primary} src={val.dp} />
                </ListItemAvatar>
                <ListItemText
                  primary={val.primary}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {val.view_status === "unseen" ? (
                          <strong style={{ fontSize: "1.2em" }}>
                            {val.message}
                          </strong>
                        ) : (
                          val.message
                        )}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          ))}
        </List>
        <Divider orientation="vertical" flexItem></Divider>
      </Grid>
      <Grid item xs={8}>
        <DefaultChatMsg />
      </Grid>
    </Grid>
  );
}
