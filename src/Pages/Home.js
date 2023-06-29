import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MetaData } from "../Components/MetaData";

export const Home = () => {
  let [loading, setLoading] = useState(true);
  const [userList, setuserList] = useState([]);
  const navigate = useNavigate();
  const [change, setChange] = useState();
  const [deleteId, setdeleteId] = useState("");
  const base_url = "http://localhost:4000/api";

  useEffect(() => {
    fetch(`${base_url}/users`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setuserList(data);
      });
  }, [change]);
  const handleDelete = () => {
    toast.loading("Please wait", {
      progressClassName: "success-progress-bar",
      toastId: 2,
    });
    fetch(`${base_url}/users/${deleteId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "OK") {
          toast.update(2, {
            render: "successfully Deleted",
            type: "success",
            hideProgressBar: false,
            autoClose: 1000,
            isLoading: false,
          });
          setChange(deleteId);
        } else {
          toast.update(2, {
            render: data.message,
            type: "warning",
            hideProgressBar: false,
            autoClose: 5000,
            isLoading: false,
          });
        }
      });
  };
  return (
    <>
      <MetaData title="Home" />
      {loading ? (
        <div className="d-grid justify-content-center align-content-center">
          <ClipLoader
            color={"orange"}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
            className="mt-5"
          />
        </div>
      ) : (
        <>
          <div className="home-container">
            <div className="table-responsive my-5 mx-md-5 mx-2">
              <div className="d-flex justify-content-between m-3 text-light">
                <h2>Users</h2>
                <h4
                  className="btn btn-light"
                  onClick={() => navigate("/addUser")}
                >
                  <AiOutlinePlusCircle />
                </h4>
              </div>
              <table className="table table-secondary my-0 text-center">
                <thead>
                  <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {userList == "" ? (
                    <tr>
                      <td className="bg-light text-dark" colSpan={5}>
                        No users found
                      </td>
                    </tr>
                  ) : (
                    userList.map((ele, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{ele.name}</td>
                          <td>{ele.age}</td>
                          <td>
                            <div className="text-dark">
                              <h5
                                className="update-icon"
                                onClick={() =>
                                  navigate(`/updateUser/${ele._id}`)
                                }
                              >
                                <AiOutlineEdit />
                              </h5>
                            </div>
                          </td>
                          <td>
                            <h5
                              className="delete-icon"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              onClick={() => setdeleteId(ele._id)}
                            >
                              <AiFillDelete />
                            </h5>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Alert !
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">Are you sure?</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleDelete}
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
