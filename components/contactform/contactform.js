import TitleAndSubtitle from "../typography/title";

function ContactForm() {
  return (
    <div>
      <TitleAndSubtitle
        title="Kontaktieren Sie uns!"
        subtitle="Fragen?"
      />
      <section class="text-gray-500 bg-gray-900 body-font relative">
        <div class="absolute inset-0 bg-gray-900">
          <iframe
            title="map"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Marktplatz%203,%20Feldkirch+(Florian%20Bechtold)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-gray-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <h2 class="text-white text-lg mb-1 font-medium title-font">
              Kontaktieren Sie uns!
            </h2>
            <p class="leading-relaxed mb-5 text-gray-500">
              Interesse geweckt?
            </p>
            <input
              class="bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-blue-700 text-base px-4 py-2 mb-4"
              placeholder="E-Mail Adresse"
              type="email"
            />
            <textarea
              class="bg-gray-800 text-white rounded border border-gray-700 focus:outline-none h-32 focus:border-blue-700 text-base px-4 py-2 mb-4 resize-none"
              placeholder="Ihre Nachricht"
            ></textarea>
            <button class="text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">
              Senden
            </button>
            <p class="text-xs text-gray-600 mt-3">
              Ihre Anfragen werden vertraulich behandelt.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
