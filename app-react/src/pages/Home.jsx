import React, { useEffect, useState } from "react";
import "./Home.css";
import { retrieveItems, findItems } from "../logic";

export default function Home() {
  const [items, setItems] = useState([]);
  const [sortItems, setSortItems] = useState();
  const [filterItems, setFilterItems] = useState();
  const [paginateItems, setPaginateItems] = useState();

  useEffect(() => {
    try {
      retrieveItems()
        .then((items) => {
          setItems(items);
        })
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  }, []);

  //  useEffect(() => {
  //    try {
  //      findItems()
  //      .then((sortItems)=>{setSortItems(sortItems)})
  //      .then((filterItems)=>{setFilterItems(filterItems)})
  //      .then((paginateItems)=>{setPaginateItems(paginateItems)})
  //    } catch (error) {
  //      alert(error.message);
  //    }
  //  });

  const handleSortItems = (event) => {
    event.preventDefault();

    try {
      findItems()
        .then(() => retrieveItems())
        .then((sortItems) => setSortItems(sortItems))
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <header className="home-page-header">
        <h1 className="home-page-header__title">Table №1</h1>
      </header>
      <main className="home-page-main">
        <table className="home-page-table">
          <thead className="home-page-head">
            <tr className="home-page-tr">
              <th>Дата</th>
              <th>
                Название
                {/* <button
                  type="button"
                  onClick={() => setSortedField("name")}
                ></button> */}
              </th>
              <th>
                Количество
                {/* <button
                  type="button"
                  onClick={() => setSortedField("count")}
                ></button> */}
              </th>
              <th>
                Расстояние
                {/* <button
                  type="button"
                  onClick={() => setSortedField("distance")}
                ></button> */}
              </th>
            </tr>
          </thead>
          <tbody className="home-page-body">
            {items.map((item) => (
              <tr className="home-page-td">
                <td>{item.date}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>{item.distance}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <div className="paginate">
          <button></button>
        </div> */}
      </main>
    </>
  );
}
