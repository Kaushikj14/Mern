import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";

export const Register = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    phone: "",
  });

  
  const navigate = useNavigate();
  const {storeTokenInLS} = useAuth();

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });



  };

  // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    
    try {
    // Most important code
    const response = await fetch(`http://localhost:5500/api/auth/register`, {
                                  method: "POST",
                                  headers:{'Content-Type':'application/json'},
                                  body:JSON.stringify(user)});
                                  console.log("===============================================>");
                                  console.log(response);

    const res_data = await response.json();
    console.log("res from server ",res_data);
        
    if(response.ok){
          // stored data in localhost
          storeTokenInLS(res_data.token);
          setUser( { userName:"", email:'', phone:"", password:"",});
          navigate("/login")

        }else{
          alert(res_data.extraDetails?res_data.extraDetails:res_data.message)
        }                          


    } catch (error) {
      console.log("Error in resgistration",error);
    }
  };


  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/images/register.png"
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">registration form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="userName">username</label>
                    <input
                      type="text"
                      name="userName"
                      value={user.userName}
                      onChange={handleInput}
                      placeholder="userName"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={user.phone}
                      onChange={handleInput}
                      placeholder="phone"
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};