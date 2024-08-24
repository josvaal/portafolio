// eslint-disable-next-line react/prop-types
function IconTech({ text, icon }) {
  return (
    <div className="h-full px-4 pb-2 pt-4 rounded-3xl text-xl font-light  hover:text-red-400 transition-all duration-300 flex flex-col gap-2 items-center justify-center">
      <div className="scale-150">{icon}</div>
      <p className="rounded  py-1 px-2  text-white text-sm opacity-50">
        {text}
      </p>
    </div>
  );
}

export default IconTech;
