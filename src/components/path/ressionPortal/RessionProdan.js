import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";

const RessionProdan = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term
  const {count,setCount}=useState(0)
  const { data: datas = [], isLoading, isError, error, refetch } = useQuery({
    queryKey: "nationalId",
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/ressionUsers");
      const data = await res.json();
      console.log("ression prodan ", data);
      return data;
    },
  });

  const handleClick=id=>{
     console.log(id)

     fetch(`http://localhost:4000/ressionUsers/${id}`,{
      method:'PUT',
     }).then(res=>res.json())
     .then(data=>{
      console.log(data);
      toast.success('updated....succefffully.......')
      refetch();
     })

   
  }

  // Filter the data based on the search term
  const filteredData = datas.filter((id) =>
    id.nationalId.includes(searchTerm)
  );

  return (
    <div>
      <div className="py-10 flex justify-center">
        <input
          className="input input-bordered input-info w-96"
          type="text"
          placeholder="Search by national ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="btn mx-2"
          onClick={() => refetch()} // Refresh the data
        >
          Search
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>National Id</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((ression, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{ression.name}</td>
                <td>{ression.nationalId}</td>
              
                <td onClick={()=>handleClick(ression._id)} className="btn btn-sm mt-1 bg-slate-500">
                 {ression.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RessionProdan;
