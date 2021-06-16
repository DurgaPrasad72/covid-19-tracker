import React, { useEffect, useState } from 'react';
import './Covid.css'
const Covid = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.covid19india.org/data.json')
      .then(res => res.json())
      .then(jsondata => setData(jsondata.statewise));
  }, []);
  return (
    <div>
      <centre>
        <h1>COVID 19 TRACKER APP </h1>
      </centre>
      <table className="table">
        <thead className="thead-dark">
          <th>State </th>
          <th>Confirmed</th>
          <th>Recovered</th>
          <th>Deaths</th>
          <th>Active</th>
          <th>Last Updated </th>
        </thead>
        <tbody>
          {data.map((datas, index) => {
            return (
              <tr key={index}>
                <td>{datas.state}</td>
                <td>{datas.confirmed}</td>
                <td>{datas.recovered}</td>
                <td>{datas.deaths}</td>
                <td>{datas.active}</td>
                <td>{datas.lastupdatedtime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>

  );
};

export default Covid;
