import React, { useEffect, useState } from "react";

const EndPoints = () => {

    const [endpoints, setEndpoints] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/endpoints')
            .then((response) => response.json())
            .then((data) => setEndpoints(data))
            .catch((error) => console.error('Error fetching endpoints:', error));
        }, []);


  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-10">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Path</th>
            <th scope="col" className="px-6 py-3">HTTP Method</th>
            <th scope="col" className="px-6 py-3">Handler Method</th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
            {endpoints.map((endpoint) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {endpoint.path}
                    </th>
                    <td className="px-6 py-4">{endpoint.method}</td>
                    <td className="px-6 py-4">{endpoint.handler}</td>
                    <td className="px-6 py-4 text-right">
                    <a href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default EndPoints;
