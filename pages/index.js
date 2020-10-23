import Head from "next/head";
import Layout from "../components/layout";
import Pricing from "../components/pricing/pricing";
import Hero from "../components/hero/hero";
import ContactForm from "../components/contactform/contactform"
import Testimonials from "../components/testimonials/testimonials";

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>wubs rechnungen.</title>
        <link rel="icon" href="/wubs.png" />
      </Head>
      <Hero title="Willkommen zur modernen Rechnungserstellung!" subtitle="Einfach, schnell und unkompliziert."/>
      <Pricing/>
      <Testimonials/>
      <ContactForm />
    </Layout>
  );
}
