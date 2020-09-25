import Header from "./header/header";
import ContentBasic from "./content-basic/content-basic"
import Footer from "./footer/footer";


function Layout({ children }) {
  return (
    <div class="flex flex-col h-screen justify-between bg-gray-900">
      <Header />
      <ContentBasic children={children}/>
      <Footer />
    </div>
  );
}

export default Layout;
