function Header() {
  return (
    <header class="text-gray-500 bg-gray-900 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a class="mr-5 hover:text-white">Home</a>
          <a class="mr-5 hover:text-white">Pricing</a>
          <a class="mr-5 hover:text-white">Testimonials</a>
        </nav>
        <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
          <img src="/unicorn.svg" class="w-16 h-16 rounded-full"/>
        </a>
        <nav class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <a class="mr-5 hover:text-white">FAQ</a>
          <a class="mr-5 hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
