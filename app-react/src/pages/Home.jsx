import React, { useEffect, useState } from "react";
import "./Home.css";
import { retrieveItems, findItems, paginateItems } from "../logic";

export default function Home() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState(null);
  const [sort, setSort] = useState(null);
  const [paginate, setPaginate] = useState({ page: 0, size: 5 });

  useEffect(() => {
    try {
      findItems(filter, sort, paginate)
        .then((items) => {
          setItems(items);
        })
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const handleSubmitFilter = (event) => {
    event.preventDefault();

    const column = event.target.column.value;
    const condition = event.target.condition.value;
    const value = event.target.value.value;

    const filter = { column, condition, value }
    setFilter(filter)

    try {
        findItems(filter, sort, paginate)
        .then((items) => setItems(items))
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
        <form className="home-page-find-items" onSubmit={handleSubmitFilter}>
          <select name="column">
            <option value="0">Выберите колонку:</option>
            <option value="name">Название</option>
            <option value="count">Количество</option>
            <option value="distance">Расстояние</option>
          </select>
          <select name="condition">
            <option value="1">Выберите состояние:</option>
            <option value="greater-than">Больше чем</option>
            <option value="lower-than">Меньше-чем</option>
            <option value="equal-to">Равно</option>
          </select>
          <input type="text" name="value" />
          <button type="submit">Найти</button>
        </form>

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
