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
        <title>NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero title="wubs" subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"/>
      <Pricing />
      <Testimonials/>
      <ContactForm />
    </Layout>
  );
}
