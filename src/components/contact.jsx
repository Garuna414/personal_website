import "bootstrap/dist/css/bootstrap.css";
import "./hover.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    setIsValidName((!/\d/.test(value)) && (value !== null && value.trim() !== ""));
  }

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value)
    setIsValidEmail(value.includes('@') && value.includes('.'))
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hnh22gr",
        "template_ivgr9as",
        form.current,
        "UPjKB_qejz6CCr2Zj"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          console.log("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container-fluid" style={{ position: "fixed" }}>
      <div className="row">
        <div
          className="col-2"
          style={{
            position: "sticky",
            top: "3.563rem",
            left: "0",
            backgroundColor: "#2b3035",
            height: "100vh",
          }}
        >
          <div>
            <nav
              className="nav"
              style={{
                width: "100%",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <p style={{ fontSize: "1.563rem", color: "white" }}>Page contents:</p>
              <hr
                style={{
                  marginTop: "0",
                  marginBottom: "0",
                  height: "0.063rem",
                  color: "white",
                  width: "100%",
                }}
              />
              <div>
                <ul
                  style={{
                    paddingLeft: "0",
                    marginBottom: "0",
                    listStyle: "none",
                    transform: "translateX(-0.938rem)",
                  }}
                >
                  <li>
                    {" "}
                    <a className="nav-link" href="#contactForm">
                      Contact Form
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#otherLinks">
                      Social Media Links
                    </a>
                  </li>
                </ul>
              </div>

              {/*<a className="nav-link" href="#item-2">
                    Projects
        </a>*/}
            </nav>
          </div>
        </div>
        <div
          className="col-10"
          style={{
            overflowY: "scroll",
            height: "calc(100vh - 3.563rem)",
            scrollBehavior: "smooth",
            backgroundColor:"beige"
          }}
        >
          <form id="contactForm" ref={form} onSubmit={sendEmail}>
            <h1>Contact Form</h1>
            <p>Message me using this form.</p>
            <br />
            <div className="form-floating mb-3" style={{ maxWidth: "31.25rem", width:"auto" }}>
              <input
                type="name"
                className="form-control"
                id="floatingUsername"
                placeholder="Username"
                name="user_name"
                onChange={handleNameChange}
                value={name}
              />
              <label htmlFor="floatingUsername">Your Name</label>
              {!isValidName && <p>Name should not contain numbers!</p>}
            </div>

            <div className="form-floating mb-3" style={{ maxWidth: "31.25rem", width:"auto" }}>
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="user_email"
                onChange={handleEmailChange}
                value={email}
              />
              <label htmlFor="floatingInput">Your Email</label>
              {!isValidEmail && <p>Enter valid email address!</p>}
            </div>

            <div className="form-floating mb-3" style={{ maxWidth: "43.75rem", width:"auto" }}>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: "6.25rem" }}
                name="message"
              ></textarea>
              <label htmlFor="floatingTextarea2">Message</label>
            </div>

            <div className="col-12">
              <button className="sbmt" type="submit" value="Send">
                Submit form
              </button>
            </div>
          </form>
          <hr />
          <br />

          <section id="otherLinks">
            <h1>Other Links</h1>
            <p>You can also contact me through these platforms.</p>
            <div className="contactIcons"
              style={{
                display: "flex",
                flexDirection:"row",
                alignItems: "center",
                flexWrap:"wrap",
                gap:"2rem"
              }}
            >
              <a
                href="https://www.reddit.com/user/Mr-Nobody-4-1-4"
                aria-label="reddit"
                target="_blank"
                rel="noreferrer"
                className="links"
              >
                <svg className="svgIcons"
                  xmlns="http://www.w3.org/2000/svg"
                  height="4rem"
                  width="4rem"
                  viewBox="0 0 512 512"
                >
                  <title>Reddit</title>
                  <path d="M324,256a36,36,0,1,0,36,36A36,36,0,0,0,324,256Z" />
                  <circle
                    cx="188"
                    cy="292"
                    r="36"
                    transform="translate(-97.43 94.17) rotate(-22.5)"
                  />
                  <path d="M496,253.77c0-31.19-25.14-56.56-56-56.56a55.72,55.72,0,0,0-35.61,12.86c-35-23.77-80.78-38.32-129.65-41.27l22-79L363.15,103c1.9,26.48,24,47.49,50.65,47.49,28,0,50.78-23,50.78-51.21S441,48,413,48c-19.53,0-36.31,11.19-44.85,28.77l-90-17.89L247.05,168.4l-4.63.13c-50.63,2.21-98.34,16.93-134.77,41.53A55.38,55.38,0,0,0,72,197.21c-30.89,0-56,25.37-56,56.56a56.43,56.43,0,0,0,28.11,49.06,98.65,98.65,0,0,0-.89,13.34c.11,39.74,22.49,77,63,105C146.36,448.77,199.51,464,256,464s109.76-15.23,149.83-42.89c40.53-28,62.85-65.27,62.85-105.06a109.32,109.32,0,0,0-.84-13.3A56.32,56.32,0,0,0,496,253.77ZM414,75a24,24,0,1,1-24,24A24,24,0,0,1,414,75ZM42.72,253.77a29.6,29.6,0,0,1,29.42-29.71,29,29,0,0,1,13.62,3.43c-15.5,14.41-26.93,30.41-34.07,47.68A30.23,30.23,0,0,1,42.72,253.77ZM390.82,399c-35.74,24.59-83.6,38.14-134.77,38.14S157,423.61,121.29,399c-33-22.79-51.24-52.26-51.24-83A78.5,78.5,0,0,1,75,288.72c5.68-15.74,16.16-30.48,31.15-43.79a155.17,155.17,0,0,1,14.76-11.53l.3-.21,0,0,.24-.17c35.72-24.52,83.52-38,134.61-38s98.9,13.51,134.62,38l.23.17.34.25A156.57,156.57,0,0,1,406,244.92c15,13.32,25.48,28.05,31.16,43.81a85.44,85.44,0,0,1,4.31,17.67,77.29,77.29,0,0,1,.6,9.65C442.06,346.77,423.86,376.24,390.82,399Zm69.6-123.92c-7.13-17.28-18.56-33.29-34.07-47.72A29.09,29.09,0,0,1,440,224a29.59,29.59,0,0,1,29.41,29.71A30.07,30.07,0,0,1,460.42,275.1Z" />
                  <path d="M323.23,362.22c-.25.25-25.56,26.07-67.15,26.27-42-.2-66.28-25.23-67.31-26.27h0a4.14,4.14,0,0,0-5.83,0l-13.7,13.47a4.15,4.15,0,0,0,0,5.89h0c3.4,3.4,34.7,34.23,86.78,34.45,51.94-.22,83.38-31.05,86.78-34.45h0a4.16,4.16,0,0,0,0-5.9l-13.71-13.47a4.13,4.13,0,0,0-5.81,0Z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/AnuragNalkar/"
                aria-label="linkedin"
                target="_blank"
                rel="noreferrer"
                className="links"
              >
                <svg className="svgIcons"
                  xmlns="http://www.w3.org/2000/svg"
                  width="4rem"
                  height="4rem"
                  color="black"
                  viewBox="0 0 16 16"
                >
                  <title>LinkedIn</title>
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/anurag.nalkar/"
                aria-label="facebook"
                target="_blank"
                rel="noreferrer"
                className="links"
              >
                <svg 
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  height="4rem"
                  width="4rem"
                  color="black"
                >
                  <title>Facebook</title>
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>

              <a
                href="https://twitter.com/Garuna414"
                aria-label="twitter"
                target="_blank"
                rel="noreferrer"
                className="links"
              >
                <svg
                  color="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  height="4rem"
                  width="4rem"
                >
                  <title>X</title>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/garuna414/"
                aria-label="instagram"
                target="_blank"
                rel="noreferrer"
                className="links"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4rem"
                  height="4rem"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                  color="black"
                >
                  <title>Instagram</title>
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />{" "}
                </svg>
              </a>

              <a
                href="https://github.com/Garuna414"
                aria-label="github"
                target="_blank"
                rel="noreferrer"
                className="links"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="text-xl"
                  height="4rem"
                  width="4rem"
                  xmlns="http://www.w3.org/2000/svg"
                  color="black"
                >
                  <title>GitHub</title>
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                </svg>
              </a>
            </div>
            <p style={{ fontSize: "1.563rem" }}></p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;

/*
<a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by edt.im - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/reddit" title="reddit icons">Reddit icons created by Freepik - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/tweet" title="tweet icons">Tweet icons created by Freepik - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">Facebook icons created by Freepik - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Freepik - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by riajulislam - Flaticon</a>



<div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start" style="align-items:center">

<a href="https://www.facebook.com/codewithharry" aria-label="facebook" target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-300">
<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z">
</path>
</svg>
</a>

<a href="https://www.twitter.com/codewithharry" aria-label="twitter" target="_blank" rel="noreferrer" className="ml-3 text-gray-500 dark:text-gray-300">
<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
</path>
</svg>
</a>

<a href="https://www.instagram.com/codewithharry" aria-label="instagram" target="_blank" rel="noreferrer" className="ml-3 text-gray-500 dark:text-gray-300">
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg></a>


<a href="https://www.github.com/codewithharry" aria-label="github" target="_blank" rel="noreferrer" className="ml-3 text-gray-500 dark:text-gray-300">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z">
</path>
</svg>
</a>
</div>
*/
