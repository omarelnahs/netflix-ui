import React, { useState, useCallback } from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utills/firebase-config";

export default function Login() {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = useCallback(async () => {
    if (!formValues.email || !formValues.password) return;
    try {
      await signInWithEmailAndPassword(
        firebaseAuth,
        formValues.email,
        formValues.password
      );
      navigate("/");
    } catch (error) {
      console.log(error.code);
    }
  }, [formValues, navigate]);

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
              <input
                type="email"
                placeholder="Email address"
                name="email"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues((prevValues) => ({
                    ...prevValues,
                    email: e.target.value,
                  }))
                }
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues((prevValues) => ({
                    ...prevValues,
                    password: e.target.value,
                  }))
                }
              />
              <button onClick={handleLogin}>Log In</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
    }
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        background-color: #000000b0;
        padding: 2rem;
        width: 300px;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
        }
        .title {
          h3 {
            color: white;
            font-size: 3.5rem;
          }
        }
        input {
          padding: 0.5rem 1rem;
          border: none;
        }
        button {
          padding: 0.5rem 1rem;
          border: none;
          cursor: pointer;
          background-color: #e50914;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
    }
  }
`;
