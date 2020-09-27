function ItemInput() {
  return (
    <div class="flex flex-wrap -mx-3 mb-2 py-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
          for="grid-zip"
        >
          Artikel
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-name"
          type="text"
          placeholder="Name"
        />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
          for="grid-price"
        >
          Preis pro Stück
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-zip"
          type="number"
        />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
          for="grid-amount"
        >
          Anzahl
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-zip"
          type="text"
          placeholder="1"
        />
      </div>
    </div>
  );
}

export default ItemInput;
