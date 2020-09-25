function TitleAndSubtitle({ title, subtitle }) {
  return (
    <div class="flex flex-col text-center w-full mb-10">
      <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
        {subtitle}
      </h2>
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-white">
        {title}
      </h1>
    </div>
  );
}

export default TitleAndSubtitle;
