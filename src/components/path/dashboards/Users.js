import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";

const Users = () => {
  const {
    data: datas = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/users");
      const data = await res.json();
      console.log("API Response:", data); // Log the response data
      return data;
    },
  });

  if (isLoading) {
    return <span className="flex justify-center"><progress className="progress w-56 text-center"></progress></span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const handleAdmin = (id) => {
    fetch(`http://localhost:4000/users/admin/${id}`, {
      method: "PUT",
      headers:{
        authorization:`bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount>0){
           toast.success('make admin successfully.....');
           refetch();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // delte button working

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:4000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.error("deleted the user");
        refetch();
      });
  };
  // console.log("user data ",datas);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>email</th>
              <th>password</th>

              <th>Editable</th>
              <th>make admin</th>
            </tr>
          </thead>
          <tbody>
            {datas?.map((user) => (
              <tr user={user} key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td
                  onClick={() => handleDelete(user._id)}
                  className="btn btn-sm bg-red-500 mt-1"
                >
                  Delete
                </td>
                
                <td>
                  {
                    user?.role !=='admin' && <button className="btn btn-sm bg-red-300" onClick={()=>handleAdmin(user._id)} >make admin</button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
