import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://avatars1.githubusercontent.com/u/42638797?s=460&u=0690dec92c80e9ab0f3b09322272e1cc4cb3ba3f&v=4"
              alt="avatarimage"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Ashwin Goolamhossen🐱‍💻</h1>
              <hr />
              <p>
                Learning FullStack Dev(MERN🔧⚙🧱📚) | HTML/CSS | JavaScript |
                Reactjs{" "}
              </p>
              <div className="social-links">
                {/*Social Links*/}

                <a
                  href="https://github.com/Ashwingoolam"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github" aria-hidden="true" />
                </a>
                <a
                  href="https://twitter.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className=" fab fa-twitter" aria-hidden="true" />
                </a>
                <a
                  href="https://dev.to"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-dev" aria-hidden="true" />
                </a>
                <a
                  href="https://stackoverflow.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-stack-overflow" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Landing;
