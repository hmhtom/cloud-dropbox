import { Authenticator } from "@aws-amplify/ui-react";
import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useDispatch } from "react-redux";
import { removePath } from "@/utils/fileReducer";

import DocumentUpload from "./DocumentUpload";
import DocumentList from "./DocumentList";

function HomeSection() {
  const dispatch = useDispatch();

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Nav className="me-auto">
                <Button
                  onClick={() => {
                    dispatch({
                      type: removePath,
                    });
                  }}>
                  Back
                </Button>
                <Button onClick={signOut}>Sign out</Button>
                <Navbar.Text>Signed in as: {user.username}</Navbar.Text>
              </Nav>
            </Container>
          </Navbar>
          <Row>
            <Col>
              <DocumentList />
            </Col>
            <Col>
              <DocumentUpload />
            </Col>
          </Row>
        </>
      )}
    </Authenticator>
  );
}

export default HomeSection;
