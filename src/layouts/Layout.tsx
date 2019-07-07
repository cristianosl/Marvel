import React from "react";
import { Container } from "@material-ui/core";
import { Header } from "../components/layouts/Header";
import "./Layout.css";

interface props {
  className?: string;
  childen?: React.ReactNode;
}
export const Layout: React.FC<props> = props => {
  return (
    <Container maxWidth="xl" {...props}>
      <Header />
      {props.children}
    </Container>
  );
};
