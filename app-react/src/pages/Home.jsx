import React, { useEffect, useState } from "react";
import "./Home.css";
import { findItems } from "../logic";

export default function Home() {
  const [itemsAndCount, setItemsAndCount] = useState();
  const [filter, setFilter] = useState(null);
  const [sort, setSort] = useState(null);
  const [paginate, setPaginate] = useState({ page: 0, size: 5 });

  useEffect(() => {
    try {
      findItems(filter, sort, paginate)
        .then((itemsAndCount) => {
          setItemsAndCount(itemsAndCount);
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
        .then((itemsAndCount) => setItemsAndCount(itemsAndCount))
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
        .then((itemsAndCount) => {
          setItemsAndCount(itemsAndCount);
          setSort(sort);
          setPaginate(resetPaginate);
        })
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  const handlePrevPaginate = () => {
    const prevPaginate = { page: paginate.page - 1, size: paginate.size };

    try {
      findItems(filter, sort, prevPaginate)
        .then((itemsAndCount) => {
          setItemsAndCount(itemsAndCount);
          setPaginate(prevPaginate);
        })
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  const handleNextPaginate = () => {
    const nextPaginate = { page: paginate.page + 1, size: paginate.size };

    try {
      findItems(filter, sort, nextPaginate)
        .then((itemsAndCount) => {
          setItemsAndCount(itemsAndCount);
          setPaginate(nextPaginate);
        })
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  const handlePagesPaginate = (page) => {
    const pagePaginate = { page: page, size: paginate.size };

    try {
      findItems(filter, sort, pagePaginate)
        .then((itemsAndCount) => {
          setItemsAndCount(itemsAndCount);
          setPaginate(pagePaginate);
        })
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  const handleItemsPerPagePaginate = (size) => {
    const newPagePaginate = { page: 0, size: size };

    try {
      findItems(filter, sort, newPagePaginate)
        .then((itemsAndCount) => {
          setItemsAndCount(itemsAndCount);
          setPaginate(newPagePaginate);
        })
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoToPagePaginate = (page) => {
    const goToPagePaginate = {page: page, size: paginate.size};

    try {
      findItems(filter, sort, goToPagePaginate)
        .then((itemsAndCount) => {
          setItemsAndCount(itemsAndCount);
          setPaginate(goToPagePaginate);
        })
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  const numberOfButtons = Math.ceil(itemsAndCount?.count / paginate.size);
  const buttons = [];
  if (!isNaN(numberOfButtons)) {
    for (let i = 0; i < numberOfButtons; i++) {
      buttons.push(
        <button key={i} onClick={() => handlePagesPaginate(i)}>
          {i + 1}
        </button>
      );
    }
  }

  return (
    <>
      <header className="home-page-header">
        <h1 className="home-page-header__title">Table ???1</h1>
      </header>
      <main className="home-page-main">
        <form
          className="home-page-find-itemsAndCount"
          onSubmit={handleSubmitFilter}
        >
          <select name="column">
            <option value="0">???????????????? ??????????????:</option>
            <option value="name">????????????????</option>
            <option value="count">????????????????????</option>
            <option value="distance">????????????????????</option>
          </select>
          <select name="condition">
            <option value="1">???????????????? ??????????????????:</option>
            <option value="greater-than">???????????? ??????</option>
            <option value="lower-than">????????????-??????</option>
            <option value="equal-to">??????????</option>
          </select>
          <input type="text" name="value" />
          <button type="submit">??????????</button>
        </form>

        <table className="home-page-table">
          <thead className="home-page-head">
            <tr className="home-page-tr">
              <th className="home-page-th">????????</th>

              <th className="home-page-th">
                ????????????????
                <button
                  class="arrow"
                  type="button"
                  onClick={() => {
                    handleSort("name", "asc");
                  }}
                >
                  ??????
                </button>
                <button
                  class="arrow"
                  type="button"
                  onClick={() => {
                    handleSort("name", "desc");
                  }}
                >
                  ??????
                </button>
              </th>

              <th className="home-page-th">
                ????????????????????
                <button
                  class="arrow"
                  type="button"
                  onClick={() => {
                    handleSort("count", "asc");
                  }}
                >
                  ??????
                </button>
                <button
                  class="arrow"
                  type="button"
                  onClick={() => {
                    handleSort("count", "desc");
                  }}
                >
                  ??????
                </button>
              </th>

              <th className="home-page-th">
                ????????????????????
                <button
                  class="arrow"
                  type="button"
                  onClick={() => {
                    handleSort("distance", "asc");
                  }}
                >
                  ??????
                </button>
                <button
                  class="arrow"
                  type="button"
                  onClick={() => {
                    handleSort("distance", "desc");
                  }}
                >
                  ??????
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="home-page-body">
            {itemsAndCount?.items.map((item) => (
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
        <button onClick={handlePrevPaginate}>??????</button>
        {buttons}
        <button onClick={handleNextPaginate}>??????</button>
        <span>
          Page{" "}
          <strong>
            {paginate.page + 1} of {buttons.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            // defaultValue={paginate.page + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              handleGoToPagePaginate(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <p>Items per page</p>
        <select
          onChange={(e) => {
            const dropSize = e.target.value;
            handleItemsPerPagePaginate(Number(dropSize));
          }}
        >
          {[1, 3, 5, 10, 20].map((page) => (
            <option key={page} value={page}>
              Show {page}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
