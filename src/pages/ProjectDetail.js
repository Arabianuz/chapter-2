import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetail.css";

function ProjectDetail({ userName }) {
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://api.github.com/repos/${userName}/${name}`
      );
      const result = await data.json();
      if (result) {
        setProject(result);
        setLoading(false);
      }
    }
    if (userName && name) {
      fetchData();
    }
  }, [userName, name]);
  return (
    <div className="Project-container">
      <h2>Project: {project.name}</h2>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <div className="table-wrapper">
            <table className="fl-table">
              <thead>
                <tr>
                  <th>Param:</th>
                  <th>Value:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>{project.name}</td>
                </tr>
                <tr>
                  <td>Full Name:</td>
                  <td>{project.full_name}</td>
                </tr>
                <tr>
                  <td>Owner img:</td>
                  <td>
                    <img
                      src={project.owner}
                      width="100px"
                      height="100px"
                      alt="owner-img"
                    />{" "}
                  </td>
                </tr>
                <tr>
                  <td>Project Description:</td>
                  <td>{project.description}</td>
                </tr>
                <tr>
                  <td>Project Url:</td>
                  <td>{project.html_url}</td>
                </tr>
                <tr>
                  <td>Content 6</td>
                  <td>Content 6</td>
                </tr>
                <tr>
                  <td>Content 7</td>
                  <td>Content 7</td>
                </tr>
                <tr>
                  <td>Content 8</td>
                  <td>Content 8</td>
                </tr>
                <tr>
                  <td>Content 9</td>
                  <td>Content 9</td>
                </tr>
                <tr>
                  <td>Content 10</td>
                  <td>Content 10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProjectDetail;
