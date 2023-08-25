import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./SignIn.css";
import CreateAc from "../Create Account Component/CreateAc";
import signInImage from "../SVG/Computer login-cuate.svg";

const SignIn = ({ show, handleClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showCreateAc, setShowCreateAc] = useState(false);

  const handleSignInSubmit = (event) => {
    event.preventDefault();

    // Perform form validations
    const validationErrors = {};
    if (!username) {
      validationErrors.username = "Username is required";
    }
    if (!password) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({}); // Clear any existing errors
      // Implement your sign-in logic here
    }
  };

  const handleGoogleSignIn = () => {
    // Implement your Google Sign-In logic here
  };

  const handleCreateAccountClick = () => {
    setShowCreateAc(true);
  };

  const handleCloseCreateAc = () => {
    setShowCreateAc(false);
  };

  return (
    <>
      <Modal show={show && !showCreateAc} onHide={handleClose} centered>
      
        <Modal.Body>
        <div className="text-center">
            <img src={signInImage} alt="Sign In" style={{ maxWidth: "50%" }} />
          </div>
          <Form onSubmit={handleSignInSubmit} style={{marginTop:20}}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label style={{ fontSize: 13, marginLeft: 10 }}>
                <i class="bi bi-person-fill"></i> Username
              </Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                isInvalid={errors.username}
                style={{ boxShadow: "none", borderRadius: 50 }}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" style={{ marginTop: 20,marginBottom:50 }}>
              <Form.Label style={{ fontSize: 13, marginLeft: 10 }}>
                <i class="bi bi-key-fill"></i> Password
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={errors.password}
                style={{ boxShadow: "none", borderRadius: 50 }}
              />
              <Form onSubmit={handleSignInSubmit}>
            {/* ... */}
            
            {/* ... */}
          </Form>
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
              <div className="text-center mt-3" style={{fontSize:14,marginRight:10,color:"#adadad"}}>
            Don't you remember the password?{" "}
              <a
                href="#"
                style={{ color: "blue", cursor: "pointer",textDecoration:"none"}}
                
              >
                forget now
              </a>
            </div>
            </Form.Group>

            <Button
              className="mt-3 d-flex justify-content-center"
              variant="primary"
              type="submit"
              id="sign_in_btn_1"
              block
              style={{ borderRadius: 50, marginTop: 50 }}
            >
              Sign In
            </Button>
          </Form>

          <div className="mt-4 text-center" style={{fontSize:10}}>Or</div>
        </Modal.Body>
        <Modal.Body>
          {/* Your sign-in form */}
          <Form onSubmit={handleSignInSubmit}>
            {/* ... */}
            <div className="text-center mt-3" style={{fontSize:14}}>
              Don't have an account?{" "}
              <a
                href="#"
                style={{ color: "blue", cursor: "pointer",textDecoration:"none"}}
                onClick={handleCreateAccountClick}
              >
                Register
              </a>
            </div>
            {/* ... */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="light"
            className="mt-3"
            onClick={handleGoogleSignIn}
            block
            style={{ borderRadius: 50, width: 470}}
          >
            <i className="bi bi-google"></i> Sign In with Google
          </Button>
        </Modal.Footer>
      </Modal>

      {showCreateAc && (
        <CreateAc show={showCreateAc} handleClose={handleCloseCreateAc} />
      )}
    </>
  );
};

export default SignIn;
