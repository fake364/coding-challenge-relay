import Fab from "@material-ui/core/Fab";
import React from "react";
import Home from "@material-ui/icons/Home";
import { useRouter } from "next/router";

const HomeButton = () => {
  const router = useRouter();
  return (
    <Fab
      style={{ position: "fixed", right: "32px", bottom: "32px" }}
      color="primary"
      size="large"
      aria-label="home"
      onClick={() => router.push("/")}
    >
      <Home />
    </Fab>
  );
};

export default HomeButton;
