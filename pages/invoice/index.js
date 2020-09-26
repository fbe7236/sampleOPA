import React from "react";
import ContentBasic from "../../components/content-basic/content-basic";
import TitleAndSubtitle from "../../components/typography/title";

class Invoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invoice: {
        id: 1,
        date: new Date(),
        due_date: new Date(),
        total: 8000,
      },
      recipient: {
        name: "John Doe",
        address: "1234 Main Street",
        city: "San Francisco",
        state: "CA",
        country: "US",
        postal_code: 94111,
      },
      items: [
        {
          item: "TC 100",
          description: "Toner Cartridge",
          quantity: 2,
          amount: 6000,
        },
        {
          item: "USB_EXT",
          description: "USB Cable Extender",
          quantity: 1,
          amount: 2000,
        },
      ],
    };
  }

  render() {
    return (
      <div class="flex flex-col h-screen justify-between bg-gray-900 py-10">
        <ContentBasic>
          <section class="text-white body-font">
            <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
              <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-300">
                <TitleAndSubtitle
                  title="Rechnungssteller"
                  subtitle="Wer verrechnet?"
                />
              </div>
              <div class="flex flex-col md:w-1/2 md:pl-12">
                <form class="w-full max-w-lg">
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        Rechnungssteller
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div class="w-full md:w-1/2 px-3"></div>
                  </div>
                  <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                        for="grid-state"
                      >
                        Land
                      </label>
                      <div class="relative">
                        <select
                          class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-state"
                        >
                          <option>Österreich</option>
                          <option>Schweiz</option>
                          <option>Liechtenstein</option>
                          <option>Deutschland</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            class="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                        for="grid-zip"
                      >
                        Postleitzahl
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-zip"
                        type="text"
                        placeholder="90210"
                      />
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                        for="grid-city"
                      >
                        Stadt
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city"
                        type="text"
                        placeholder="Feldkirch"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
          <section class="text-white body-font">
            <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
              <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-300">
                <TitleAndSubtitle
                  title="Rechnungsempfänger"
                  subtitle="An wen wird verrechnet?"
                />
              </div>
              <div class="flex flex-col md:w-1/2 md:pl-12">
                <form class="w-full max-w-lg">
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        Rechnungsempfänger
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div class="w-full md:w-1/2 px-3"></div>
                  </div>
                  <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                        for="grid-state"
                      >
                        Land
                      </label>
                      <div class="relative">
                        <select
                          class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-state"
                        >
                          <option>Österreich</option>
                          <option>Schweiz</option>
                          <option>Liechtenstein</option>
                          <option>Deutschland</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            class="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                        for="grid-zip"
                      >
                        Postleitzahl
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-zip"
                        type="text"
                        placeholder="90210"
                      />
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                        for="grid-city"
                      >
                        Stadt
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city"
                        type="text"
                        placeholder="Feldkirch"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </ContentBasic>
      </div>
    );
  }
}

export default Invoice;
