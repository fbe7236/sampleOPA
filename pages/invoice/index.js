// this page includes the wubs invoicing template with input possibilities as well as a button to export the invoice as a pdf

import ContentBasic from "../../components/content-basic/content-basic";
import TitleAndSubtitle from "../../components/typography/title";

function Invoice() {
  return (
    <div class="flex flex-col h-screen justify-between bg-gray-900 py-10">
      <ContentBasic>
        <TitleAndSubtitle
          title="Rechnung"
          subtitle="Ihre Rechnung im Überblick"
        />
        <section class="text-white body-font">
          <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
            <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-300">
              <TitleAndSubtitle
                title="Rechnung"
                subtitle="Ihre Rechnung im Überblick."
              />
            </div>
            <div class="flex flex-col md:w-1/2 md:pl-12">
              <TitleAndSubtitle
                title="Informationen"
                subtitle="Ihre Rechnungsinformationen."
              />
              </div>
          </div>
        </section>
      </ContentBasic>
    </div>
  );
}

export default Invoice;
