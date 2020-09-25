import TitleAndSubtitle from "../typography/title";

function Pricing() {
  return (
    <div class="container px-5 py-24 mx-auto">
      <TitleAndSubtitle title="Preise" subtitle="Unser Angebot an Sie." />
      <div class="flex flex-wrap -m-4 justify-center">
        <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
          <div class="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
            <h2 class="text-sm tracking-widest text-gray-600 title-font mb-1 font-medium">
              STARTER
            </h2>
            <h1 class="text-5xl text-white pb-4 mb-4 border-b border-gray-800 leading-none">
              Gratis
            </h1>
            <p class="flex items-center text-gray-500 mb-2">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Rechnungserstellung
            </p>
            <p class="flex items-center text-gray-500 mb-2">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              PDF Download
            </p>
            <button class="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">
              Ich probier's!  
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-auto"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p class="text-xs text-gray-600 mt-3">
              Unser Schnupperangebot.
            </p>
          </div>
        </div>
        <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
          <div class="h-full p-6 rounded-lg border-2 border-blue-600 flex flex-col relative overflow-hidden">
            <span class="bg-blue-600 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
              WARUM NICHT?
            </span>
            <h2 class="text-sm tracking-widest text-gray-600 title-font mb-1 font-medium">
              BUSINESS
            </h2>
            <h1 class="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
              <span>9.99 €</span>
              <span class="text-lg ml-1 font-normal text-gray-600">/monat</span>
            </h1>
            <p class="flex items-center text-gray-500 mb-2">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Rechnungserstellung
            </p>
            <p class="flex items-center text-gray-500 mb-2">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-600 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Rechnungen mit Ihrem Logo
            </p>
            <p class="flex items-center text-gray-500 mb-2">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-600 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              3 Download-Formate
            </p>
            <button class="flex items-center mt-auto text-white bg-blue-600 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-600 rounded">
              Das nehm' ich!
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-auto"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p class="text-xs text-gray-600 mt-3">
              Das Must-Have für kleine Unternehmer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
