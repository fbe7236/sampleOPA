function Header() {
  return (
    <header class="text-gray-500 bg-gray-900 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a href="#home" class="mr-5 hover:text-white transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300">Home</a>
          <a href="#pricing" class="mr-5 hover:text-white transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300">Preise</a>
        </nav>
        <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
          <img src="/wubs.png" class="w-16 h-16 rounded transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300" />
        </a>
        <nav class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <a href="#references" class="mr-5 hover:text-white transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300">Referenzen</a>
          <a href="#contact" class="mr-5 hover:text-white transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300">Kontakt</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
