import React, { useEffect, useState } from "react";
import "./Home.css";
import { findItems } from "../logic";

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

    const filter = { column, condition, value };
    setFilter(filter);

    try {
      findItems(filter, sort, paginate)
        .then((items) => setItems(items))
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSort = (column, order) => {
    const sort = { column, order };
    const resetPaginate = { page: 0, size: paginate.size };
    try {
      findItems(filter, sort, resetPaginate)
        .then((items) => {
          setItems(items);
          setSort(sort);
          setPaginate(resetPaginate);
        })
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  const handlePrevPaginate = (page, size) => {
    const prevPaginate = { page: paginate.page - 1, size: paginate.size };

    try {
      findItems(filter, sort, prevPaginate)
        .then((items) => {
          setItems(items);
          setPaginate(prevPaginate);
        })
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  // const handlePagesPaginate = (page, size) => {
  //   const pagePaginate = { page: paginate.page, size: 5 };

  //   try {
  //     findItems(filter, sort, pagePaginate)
  //       .then((items) => {
  //         setItems(items);
  //         setPaginate(pagePaginate);
  //       })
  //       .catch((error) => alert(error.message));
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  const handleNextPaginate = (page, size) => {
    const nextPaginate = { page: paginate.page + 1, size: paginate.size };

    try {
      findItems(filter, sort, nextPaginate)
        .then((items) => {
          setItems(items);
          setPaginate(nextPaginate);
        })
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
              <th className="home-page-th">Дата</th>

              <th className="home-page-th">
                Название
                <button
                  class="arrow"
                  type="button"
                  onClick={() => {
                    handleSort("name", "asc");
                  }}
                >
                  ⬆️
                </button>
                <button
                  class="arrow"
                  type="button"
                  onClick={() => {
                    handleSort("name", "desc");
                  }}
                >
                  ⬇️
                </button>
              </th>

              <th className="home-page-th">
                Количество
                <button
                  class="arrow"
                  type="button"
                  onClick={() => {
                    handleSort("count", "asc");
                  }}
                >
                  ⬆️
                </button>
                <button
                  class="arrow"
                  type="button"
                  onClick={() => {
                    handleSort("count", "desc");
                  }}
                >
                  ⬇️
                </button>
              </th>

              <th className="home-page-th">
                Расстояние
                <button
                  class="arrow"
                  type="button"
                  onClick={() => {
                    handleSort("distance", "asc");
                  }}
                >
                  ⬆️
                </button>
                <button
                  class="arrow"
                  type="button"
                  onClick={() => {
                    handleSort("distance", "desc");
                  }}
                >
                  ⬇️
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="home-page-body">
            {items.map((item) => (
              <tr className="home-page-td">
                <td>{item.date.substring(10, 0)}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>{item.distance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <div className="home-page-paginate-btn">
        <button onClick={handlePrevPaginate}>⬅️</button>
        {/* <button onClick={handlePagesPaginate}>1</button>
        <button onClick={handlePagesPaginate}>2</button>
        ...
        <button onClick={handlePagesPaginate}>5</button> */}
        <button onClick={handleNextPaginate}>➡️</button>
      </div>
    </>
  );
}
