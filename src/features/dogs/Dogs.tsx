import React, { useState } from "react";
// import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useFetchBreedsQuery } from "./dogs-api-slice";
// import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import { AppDispatch, RootState } from "../../app/store";

export function Dogs() {
  const [numDogs, setNumDogs] = useState(5);
  const { data = [], error, isFetching } = useFetchBreedsQuery(numDogs);

  return (
    <>
      <div className="card">
        <div>
          <p>Number of dogs to fetch:</p>
          <select
            value={numDogs}
            onChange={(e) => setNumDogs(Number(e.target.value))}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div>
          <p> number of dogs fetched: {data.length} </p>
          <div>
            {isFetching && <h3>Loading ...</h3>}
            {!error && !isFetching && (
              <table>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Picture</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((breed, i) => (
                    <tr key={breed.id}>
                      <td>{i + 1}</td>
                      <td>{breed.name}</td>
                      <td>
                        <img
                          src={breed.image.url}
                          alt={breed.name}
                          height="250"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
