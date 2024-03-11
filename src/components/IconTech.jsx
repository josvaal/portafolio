
// eslint-disable-next-line react/prop-types
function IconTech({ text, icon }) {
  return (
    <div className="h-full has-tooltip px-4 pb-2 pt-4 rounded-3xl text-xl font-light  hover:text-red-400 transition-all duration-300 flex gap-2 items-center justify-center">
      <div className="scale-150">
        {icon}
      </div>
      <span className="tooltip rounded shadow-lg py-1 px-2 bg-[rgba(0,0,0,0.1)] text-white -mt-16 text-sm">
        {text}
      </span>
    </div>
  )
}

export default IconTech