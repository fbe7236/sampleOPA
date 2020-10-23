import Link from "next/link";

function Hero({ title, subtitle }) {
  return (
    <section class="text-gray-500 bg-gray-900 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-white">
            {title}
          </h1>
          <p class="mb-8 leading-relaxed text-justify">{subtitle}</p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300">
              <Link href="/invoice">Jetzt verrechnen</Link>
            </button>
          </div>
        </div>
        <div class="flex md:w-1/2 w-5/6">
          <svg
            id="a2fab10e-fac6-497d-8ec7-92fd5f96fda5"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            width="836.00447"
            height="437.46152"
            viewBox="0 0 836.00447 437.46152"
          >
            <g id="f59d61bb-6173-4011-886f-cab752b15cf5" data-name="Group 14">
              <path
                id="ea601028-2261-4201-a5c6-6d1fee0209f8"
                data-name="Path 284"
                d="M994.40227,465.87775a10.13794,10.13794,0,0,1-2.678-15.312l-10.57-77.264,22.019,1.081,3.457,75.363a10.192,10.192,0,0,1-12.228,16.132Z"
                transform="translate(-181.99777 -231.26924)"
                fill="#a0616a"
              />
              <path
                id="bab8e504-63c3-4a02-b094-c521f4d0da0a"
                data-name="Path 285"
                d="M1006.19527,375.40676a4.138,4.138,0,0,1-1.681,1.189l-19.788,7.552a4.157,4.157,0,0,1-5.281-2.194l-17.529-39.393a16.46,16.46,0,0,1-.805-11.649,16.0099,16.0099,0,0,1,12.185-10.924,15.26906,15.26906,0,0,1,6.578.093,15.947,15.947,0,0,1,11.461,9.963l15.585,41.2A4.16588,4.16588,0,0,1,1006.19527,375.40676Z"
                transform="translate(-181.99777 -231.26924)"
                fill="#ccc"
              />
              <path
                id="e3cfda6a-f51e-4c96-8af0-12d99ec512c5"
                data-name="Path 286"
                d="M903.07927,654.46178h-13.691l-4.966-53.057,18.657.25Z"
                transform="translate(-181.99777 -231.26924)"
                fill="#a0616a"
              />
              <path
                id="a90fb924-173c-4f4a-b9ae-ede5dff37993"
                data-name="Path 287"
                d="M879.60925,650.55077h26.4v16.625h-43.028a16.625,16.625,0,0,1,16.625-16.625h.003Z"
                transform="translate(-181.99777 -231.26924)"
                fill="#2f2e41"
              />
              <path
                id="f7d48866-455f-47a0-876b-9c2c9b7d2f2d"
                data-name="Path 288"
                d="M966.73323,654.46278h-13.691l-6.513-52.808h20.206Z"
                transform="translate(-181.99777 -231.26924)"
                fill="#a0616a"
              />
              <path
                id="ae80d259-143f-4a2f-8815-2d5111ab51c8"
                data-name="Path 289"
                d="M943.26326,650.55077h26.4v16.625h-43.028a16.625,16.625,0,0,1,16.625-16.625h.003Z"
                transform="translate(-181.99777 -231.26924)"
                fill="#2f2e41"
              />
              <path
                id="b7aaac11-5418-4b5b-a747-2fb27f89cd88"
                data-name="Path 290"
                d="M968.45525,635.67377l-21.5-1.592a5.032,5.032,0,0,1-4.655-4.768l-4.794-99.088a3.909,3.909,0,0,0-7.733-.6l-20,97.611a5.03194,5.03194,0,0,1-5.324,4l-19.438-1.555a5.02495,5.02495,0,0,1-4.60883-5.40924q.00394-.04944.00885-.09876l18.033-180.326a5.025,5.025,0,0,1,6.068-4.41l68.574,14.907a5.038,5.038,0,0,1,3.957,5l-3.193,171.41192a5.028,5.028,0,0,1-5.013,4.932C968.71025,635.68775,968.58324,635.68275,968.45525,635.67377Z"
                transform="translate(-181.99777 -231.26924)"
                fill="#2f2e41"
              />
              <circle
                id="eccc2a78-7d3a-4be1-aa48-fb8bb5d1e30a"
                data-name="Ellipse 40"
                cx="767.64546"
                cy="34.37753"
                r="27.428"
                fill="#a0616a"
              />
              <path
                id="a0a57a86-6e42-4b50-b3a1-f8a38df428dd"
                data-name="Path 291"
                d="M907.08727,457.75575a24.525,24.525,0,0,1-8.145-18.835c0-39.422,34.123-127.5,35.192-130.243.1-.662,1-.948,5.728-4.139s11.542-3.684,20.257-1.458a5,5,0,0,1,3.629,3.706l1.621,2.342a3.9,3.9,0,0,0,2.27,2.687c7.028,2.961,29.368,16.615,21.755,68-7.071,47.733-9.941,75.8-10.846,85.659a5.015,5.015,0,0,1-4.547,4.54c-3.446.308-9.36.719-16.4.719C941.26628,470.72877,918.86925,468.52876,907.08727,457.75575Z"
                transform="translate(-181.99777 -231.26924)"
                fill="#ccc"
              />
              <path
                id="e2026d9f-0f48-4627-b939-bcbd235b248e"
                data-name="Path 292"
                d="M874.31224,443.15074a10.13694,10.13694,0,0,1,6.309-14.207l34.276-70.047,17.682,13.167-39.122,64.505a10.192,10.192,0,0,1-19.143,6.582Z"
                transform="translate(-181.99777 -231.26924)"
                fill="#a0616a"
              />
              <path
                id="aa5178ad-b05d-4950-85b1-a624717fe499"
                data-name="Path 293"
                d="M934.51427,374.60176a4.13711,4.13711,0,0,1-2.058.051l-20.64-4.755a4.157,4.157,0,0,1-3.163-4.764l7.4-42.478a16.46109,16.46109,0,0,1,5.822-10.122,16.01107,16.01107,0,0,1,16.205-2.281,15.269,15.269,0,0,1,5.41,3.742,15.947,15.947,0,0,1,3.965,14.659l-10.01709,42.892a4.16594,4.16594,0,0,1-2.924,3.056Z"
                transform="translate(-181.99777 -231.26924)"
                fill="#ccc"
              />
              <path
                id="f1455aca-238f-491a-b535-1c1a045e39f4"
                data-name="Path 294"
                d="M943.22124,290.42876a11.82,11.82,0,0,1-3.171-10.482c.956-5,1.518-8.275,1.625-9.466h0c.364-4.073-3.754-7.371-7.828-7.9-.158-.021-.29-.034-.4-.043.1.1.215.206.313.3.774.727,1.737,1.632,1.508,2.566-.138.562-.652.961-1.571,1.218-6.372,1.783-11.28.146-15.445-5.155a12.31284,12.31284,0,0,1-2.351-5.135c-1.492-7.32,2.483-13.56,6.081-17.505,2.967-3.253,7.776-7.2,13.841-7.54,4.716-.263,10.325,2.451,12,7.342a9.112,9.112,0,0,1,7.1-4,16.374,16.374,0,0,1,9.111,2.534c13.3,7.618,19.015,25.766,12.481,39.63-4.11,8.721-13.015,15.213-23.239,16.943a11.61316,11.61316,0,0,1-1.937.164,11.29988,11.29988,0,0,1-8.125-3.467Z"
                transform="translate(-181.99777 -231.26924)"
                fill="#2f2e41"
              />
            </g>
            <path
              id="f152a38b-6c6f-456c-96ce-4c801960ccf2"
              data-name="Path 336"
              d="M545.65724,426.83875a7.59994,7.59994,0,0,0-6.95-4.65h-138.725a7.524,7.524,0,0,0-7.52,7.52v175.5a7.524,7.524,0,0,0,7.52,7.52h138.73a7.53,7.53,0,0,0,7.52-7.52v-175.5a7.38549,7.38549,0,0,0-.57-2.87Zm-1.1,178.37a5.857,5.857,0,0,1-5.85,5.85h-138.725a5.851,5.851,0,0,1-5.85-5.849v-175.5a5.858,5.858,0,0,1,5.85-5.85h138.73a5.87906,5.87906,0,0,1,5.43,3.68,6.48627,6.48627,0,0,1,.22.66,5.80051,5.80051,0,0,1,.2,1.51Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#3182ce"
            />
            <path
              id="fabca9b7-6499-499c-b0ba-e512eedfa0e6"
              data-name="Path 337"
              d="M516.70723,463.62375H474.92128a3.343,3.343,0,1,1,0-6.686h41.78595a3.343,3.343,0,1,1,0,6.686Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#3182ce"
            />
            <path
              id="b1b2178d-f6c7-4a19-857a-cc93cc70df69"
              data-name="Path 338"
              d="M516.70723,481.17377H474.92128a3.343,3.343,0,1,1,0-6.686h41.78595a3.343,3.343,0,1,1,0,6.686Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#3182ce"
            />
            <path
              id="bd84b5e9-e9c5-4886-bcfd-3c769a5bd20c"
              data-name="Path 339"
              d="M453.48125,491.16675h-30.537a3.765,3.765,0,0,1-3.761-3.761v-36.036a3.765,3.765,0,0,1,3.761-3.761h30.537a3.765,3.765,0,0,1,3.761,3.761v36.036A3.765,3.765,0,0,1,453.48125,491.16675Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#3182ce"
            />
            <path
              id="ad20b6ae-6256-4ad3-9ba5-bff6ef303c78"
              data-name="Path 340"
              d="M516.41725,517.10977h-94.436a3.343,3.343,0,0,1,0-6.686h94.436a3.343,3.343,0,1,1,0,6.686Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#ccc"
            />
            <path
              id="f5b31b5a-d389-4394-a0c3-430493f21651"
              data-name="Path 341"
              d="M516.41725,534.65976h-94.436a3.343,3.343,0,0,1,0-6.686h94.436a3.343,3.343,0,1,1,0,6.686Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#ccc"
            />
            <path
              id="e6b00d4f-f233-434b-82e7-f520ed55a592"
              data-name="Path 342"
              d="M516.41725,552.20975h-94.436a3.343,3.343,0,0,1,0-6.686h94.436a3.343,3.343,0,1,1,0,6.686Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#ccc"
            />
            <path
              id="f83e6214-6629-4e95-ad35-3c9b0c78a3d6"
              data-name="Path 343"
              d="M516.41725,569.75977h-94.436a3.343,3.343,0,0,1,0-6.686h94.436a3.343,3.343,0,1,1,0,6.686Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#ccc"
            />
            <path
              id="b83f14e7-a754-4235-a578-aebf681d4a1c"
              data-name="Path 344"
              d="M516.41725,587.30976h-94.436a3.343,3.343,0,0,1,0-6.686h94.436a3.343,3.343,0,1,1,0,6.686Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#ccc"
            />
            <path
              id="a38c097c-1c01-4356-80b1-56a89c2c58fa"
              data-name="Path 349"
              d="M822.00223,668.73076h195a1,1,0,0,0,0-2h-195a1,1,0,0,0,0,2Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#3182ce"
            />
            <circle
              id="af1d3ae0-b86a-44f8-8168-f2f371efc620"
              data-name="Ellipse 44"
              cx="289.69649"
              cy="116.37251"
              r="32.262"
              fill="#3182ce"
            />
            <path
              id="b4906b3b-71df-4c7e-84d8-52e6769e6d26"
              data-name="Path 395"
              d="M468.49727,359.94875a3.346,3.346,0,0,1-2.013-.669l-.036-.027-7.582-5.8a3.36939,3.36939,0,1,1,4.1-5.348l4.911,3.766,11.605-15.14a3.368,3.368,0,0,1,4.722-.62372l.001.00074-.072.1.074-.1a3.372,3.372,0,0,1,.623,4.723l-13.65,17.8a3.37,3.37,0,0,1-2.68,1.314Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#fff"
            />
            <circle
              id="eb67bc87-0ab3-400d-9346-8836e9b135a0"
              data-name="Ellipse 46"
              cx="77.29649"
              cy="79.77253"
              r="21.862"
              fill="#ccc"
            />
            <path
              id="a587243e-22a7-4e92-b127-7238b8715868"
              data-name="Path 408"
              d="M257.12726,319.38077a2.268,2.268,0,0,1-1.364-.453l-.024-.018-5.138-3.934a2.283,2.283,0,0,1,2.776-3.624l3.328,2.552,7.864-10.256a2.282,2.282,0,0,1,3.19946-.42242l.00055.00043-.049.066.05-.065a2.285,2.285,0,0,1,.422,3.2l-9.25,12.064a2.283,2.283,0,0,1-1.816.891Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#fff"
            />
            <path
              id="b24c2fd4-5735-4a8b-b246-c12b52e11f5f"
              data-name="Path 410"
              d="M320.72925,362.30178a5.982,5.982,0,0,0-5.468-3.659h-109.161a5.92,5.92,0,0,0-5.917,5.917v138.093a5.92,5.92,0,0,0,5.917,5.917h109.161a5.925,5.925,0,0,0,5.917-5.917v-138.093A5.81028,5.81028,0,0,0,320.72925,362.30178Zm-.865,140.352a4.609,4.609,0,0,1-4.6,4.6h-109.164a4.6,4.6,0,0,1-4.6-4.6h0v-138.094a4.609,4.609,0,0,1,4.6-4.6h109.161a4.626,4.626,0,0,1,4.273,2.9,5.10768,5.10768,0,0,1,.173.519,4.5588,4.5588,0,0,1,.158,1.188Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#ccc"
            />
            <path
              id="f030a160-4767-48dc-a1cd-6e8d6a87c559"
              data-name="Path 411"
              d="M297.94627,391.24677h-32.88a2.63049,2.63049,0,0,1,0-5.261h32.879a2.6305,2.6305,0,0,1,0,5.261Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#ccc"
            />
            <path
              id="f0576b91-fb67-46c0-9bc8-b0d78fa4e393"
              data-name="Path 412"
              d="M297.94627,405.05675h-32.88a2.6305,2.6305,0,0,1,0-5.261h32.879a2.6305,2.6305,0,0,1,0,5.261Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#ccc"
            />
            <path
              id="bb47cdff-cafb-4bb6-bfa7-d7f244c106f8"
              data-name="Path 413"
              d="M248.19526,412.91976h-24.028a2.962,2.962,0,0,1-2.959-2.959v-28.355a2.962,2.962,0,0,1,2.959-2.959h24.028a2.963,2.963,0,0,1,2.959,2.959v28.355a2.962,2.962,0,0,1-2.959,2.959Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#ccc"
            />
            <path
              id="b9c4730d-541e-403a-bfc4-7f597a133cff"
              data-name="Path 414"
              d="M297.71726,433.33276h-74.307a2.6305,2.6305,0,0,1,0-5.261h74.307a2.63049,2.63049,0,0,1,0,5.261Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#ccc"
            />
            <path
              id="b0b4ad5b-1090-4149-ad9f-38443074182d"
              data-name="Path 415"
              d="M297.71726,447.14678h-74.307a2.6305,2.6305,0,0,1,0-5.261h74.307a2.6305,2.6305,0,0,1,0,5.261Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#ccc"
            />
            <path
              id="a36ae105-a865-43f2-a38b-4a3728e49bb5"
              data-name="Path 416"
              d="M297.71726,460.95176h-74.307a2.63049,2.63049,0,0,1,0-5.261h74.307a2.63049,2.63049,0,0,1,0,5.261Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#ccc"
            />
            <path
              id="bd69ee89-5535-4e79-aba4-c83b03de0083"
              data-name="Path 417"
              d="M297.71726,474.76475h-74.307a2.6305,2.6305,0,0,1,0-5.261h74.307a2.63049,2.63049,0,0,1,0,5.261Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#ccc"
            />
            <path
              id="a075ca9b-1e14-49c6-b2ff-3fb4066a82fb"
              data-name="Path 418"
              d="M297.71726,488.57077h-74.307a2.63049,2.63049,0,0,1,0-5.261h74.307a2.63049,2.63049,0,1,1,0,5.261Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#ccc"
            />
            <path
              id="b99f005d-5535-4af5-95d9-44a7a4f0c0b8"
              data-name="Path 419"
              d="M182.78925,509.14673h153.434a.787.787,0,0,0,0-1.574h-153.434a.787.787,0,1,0-.00894,1.574Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#ccc"
            />
            <circle
              id="b1c5fac5-a790-403a-b8d0-31ae0bc4b4ba"
              data-name="Ellipse 46"
              cx="497.29649"
              cy="79.77253"
              r="21.862"
              fill="#ccc"
            />
            <path
              id="a5ae1e6c-de0b-426c-a811-1990f7b7ccda"
              data-name="Path 408"
              d="M677.12726,319.38077a2.268,2.268,0,0,1-1.364-.453l-.024-.018-5.138-3.934a2.283,2.283,0,0,1,2.776-3.624l3.328,2.552,7.864-10.256a2.282,2.282,0,0,1,3.19946-.42242l.00055.00043-.049.066.05-.065a2.285,2.285,0,0,1,.422,3.2l-9.25,12.064a2.283,2.283,0,0,1-1.816.891Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#fff"
            />
            <path
              id="e481f25f-f0ef-423d-9e4a-b2d79b6febf5"
              data-name="Path 410"
              d="M740.72925,362.30178a5.982,5.982,0,0,0-5.468-3.659h-109.161a5.92,5.92,0,0,0-5.917,5.917v138.093a5.92,5.92,0,0,0,5.917,5.917h109.161a5.925,5.925,0,0,0,5.917-5.917v-138.093A5.81028,5.81028,0,0,0,740.72925,362.30178Zm-.865,140.352a4.609,4.609,0,0,1-4.6,4.6h-109.164a4.6,4.6,0,0,1-4.6-4.6h0v-138.094a4.609,4.609,0,0,1,4.6-4.6h109.161a4.626,4.626,0,0,1,4.273,2.9,5.10768,5.10768,0,0,1,.173.519,4.5588,4.5588,0,0,1,.158,1.188Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#ccc"
            />
            <path
              id="a5b052e7-0a6d-48d5-ba9e-291ff1ca3bfd"
              data-name="Path 411"
              d="M717.94627,391.24677h-32.88a2.63049,2.63049,0,0,1,0-5.261h32.879a2.6305,2.6305,0,0,1,0,5.261Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#ccc"
            />
            <path
              id="bd247f09-cb3d-4df5-9c12-787ea9e72b07"
              data-name="Path 412"
              d="M717.94627,405.05675h-32.88a2.6305,2.6305,0,0,1,0-5.261h32.879a2.6305,2.6305,0,0,1,0,5.261Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#ccc"
            />
            <path
              id="b3d7a89f-9ffc-4079-aa15-40ad611f9a98"
              data-name="Path 413"
              d="M668.19526,412.91976h-24.028a2.962,2.962,0,0,1-2.959-2.959v-28.355a2.962,2.962,0,0,1,2.959-2.959h24.028a2.963,2.963,0,0,1,2.959,2.959v28.355a2.962,2.962,0,0,1-2.959,2.959Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#ccc"
            />
            <path
              id="e1bf4aca-fc8d-43da-a727-289201e2eac7"
              data-name="Path 414"
              d="M717.71726,433.33276h-74.307a2.6305,2.6305,0,0,1,0-5.261h74.307a2.6305,2.6305,0,0,1,0,5.261Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#ccc"
            />
            <path
              id="b286f981-abb8-47cd-9209-f09770ef33ad"
              data-name="Path 415"
              d="M717.71726,447.14678h-74.307a2.63049,2.63049,0,0,1,0-5.261h74.307a2.63049,2.63049,0,0,1,0,5.261Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#ccc"
            />
            <path
              id="ad15bc08-a918-4115-a327-9a31c97a6753"
              data-name="Path 416"
              d="M717.71726,460.95176h-74.307a2.63049,2.63049,0,0,1,0-5.261h74.307a2.63049,2.63049,0,1,1,0,5.261Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#ccc"
            />
            <path
              id="a508ff04-1989-4f94-915f-90cf16933556"
              data-name="Path 417"
              d="M717.71726,474.76475h-74.307a2.6305,2.6305,0,0,1,0-5.261h74.307a2.6305,2.6305,0,0,1,0,5.261Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#ccc"
            />
            <path
              id="e65b0501-2d31-4d85-b27f-ea92835ed026"
              data-name="Path 418"
              d="M717.71726,488.57077h-74.307a2.63049,2.63049,0,1,1,0-5.261h74.307a2.63049,2.63049,0,1,1,0,5.261Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#ccc"
            />
            <path
              id="a3e956aa-8abe-48aa-ba4a-17518f20fda0"
              data-name="Path 419"
              d="M602.78925,509.14673h153.434a.787.787,0,0,0,0-1.574h-153.434a.787.787,0,1,0-.00894,1.574Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#ccc"
            />
            <path
              id="b01c4841-6b77-41d3-9bc6-bba4643c130f"
              data-name="Path 420"
              d="M371.00225,613.3281h195a1,1,0,0,0,0-2h-195a1,1,0,0,0,0,2Z"
              transform="translate(-181.99777 -231.26924)"
              fill="#3182ce"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
