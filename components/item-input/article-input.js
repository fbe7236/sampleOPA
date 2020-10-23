import React, { useState, Fragment } from "react";

const ArticleInput = () => {
  const [inputFields, setInputFields] = useState([
    { article: "", price: 0, amount: 0 },
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ article: "", price: 0, amount: 0 });
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "article") {
      values[index].article = event.target.value;
    } else if (event.target.name === "price") {
      values[index].price = event.target.value;
    } else {
      values[index].amount = event.target.value;
    }

    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputFields", inputFields);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="flex flex-wrap -mx-3 mb-2 py-2">
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                  for="article"
                >
                  Artikel
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  className="form-control"
                  id="article"
                  name="article"
                  value={inputField.article}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>

              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                  for="article"
                >
                  Preis / Einheit
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  className="form-control"
                  id="price"
                  name="price"
                  value={inputField.price}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>

              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                  for="article"
                >
                  Anzahl
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  className="form-control"
                  id="amount"
                  name="amount"
                  value={inputField.amount}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
            </Fragment>
          ))}
        </div>
      </form>
    </>
  );
};

export default ArticleInput;
