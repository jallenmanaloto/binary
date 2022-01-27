import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import CurrentUser from "../../auth/CurrentUser";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import QRCode from "qrcode.react";

const MyQRCode = () => {
  //setting context to get user id
  const { currentUser, headers } = useContext(CurrentUser);

  //setting state for the url of qrcode
  const [qrCode, setQrCode] = useState("");

  //getting url from database
  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3001/api/v1/item/${currentUser.id}`,
      headers: {
        "access-token": headers.token,
        client: headers.client,
        expiry: headers.expiry,
        uid: headers.uid,
      },
    })
      .then((res) => {
        setQrCode(res.data.image);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Paper
      sx={{
        height: "90vh",
        mt: { xs: 0, sm: -1, md: -1, lg: 0 },
        overflowY: "auto",
      }}
    >
      <Grid container justifyContent="center">
        <Grid
          item
          sx={{ backgroundColor: "#3376b5" }}
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Typography
            sx={{
              p: 2,
              textAlign: "left",
              color: "whitesmoke",
              fontWeight: 400,
            }}
            variant="h5"
          >
            My QR Code
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            sx={{ textAlign: "start", mt: 5, ml: 5, mr: 5, fontWeight: 600 }}
            variant="body1"
          >
            Get your QR Code
          </Typography>
          <Typography
            sx={{ textAlign: "start", mt: 1, mr: 5, mb: 5, ml: 5 }}
            variant="body1"
          >
            As the country makes a step forward to digitalization on tracking
            your health status, most establishments are requiring to check your
            vaccination card while still implementing the health protocol of
            maintaining a safe distance and as much as possible avoid any
            physical contact, QR codes is widely used to present your
            vaccination card.You would need to upload first your vaccination
            card in your personal details se we can automatically generate a QR
            code for you.
          </Typography>
          <Typography
            sx={{ textAlign: "start", ml: 5, mr: 5, fontWeight: 600 }}
            variant="body1"
          >
            Steps to generate your QR Code:
          </Typography>
          <Typography
            sx={{ textAlign: "start", mt: 1, mr: 5, ml: 8 }}
            variant="body1"
          >
            1. Navigate to <strong>My Details</strong> option.
          </Typography>
          <Typography sx={{ textAlign: "start", ml: 8, mr: 5 }} variant="body1">
            2. Make sure to fill out all of your personal details.
          </Typography>
          <Typography sx={{ textAlign: "start", ml: 8, mr: 5 }} variant="body1">
            3. Upload an image of your vaccination card.
          </Typography>
          <Typography sx={{ textAlign: "start", ml: 8, mr: 5 }} variant="body1">
            4. Click on <strong>QR Code</strong> option to see your QR Code.
          </Typography>
          <Typography sx={{ textAlign: "start", ml: 8, mr: 5 }} variant="body1">
            5. Download your generated QR Code by clicking on{" "}
            <strong>Download</strong> button below.
          </Typography>
        </Grid>
        <Grid
          sx={{ display: "flex", justifyContent: "center", mt: 8 }}
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <QRCode size="250" value={qrCode} />
        </Grid>
        <Grid
          sx={{ display: "flex", mt: 10, justifyContent: "center" }}
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Button
            sx={{ backgroundColor: "#3376b5", mb: { xs: 10, sm: 10, md: 10 } }}
            variant="contained"
          >
            Download
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MyQRCode;
