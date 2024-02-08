// eslint-disable-next-line react/prop-types
const Button = ({ text, icon, url }) => {
  return (
    <button className="border-2 px-4 py-2 rounded-3xl text-xl font-light hover:border-red-400 hover:text-red-400 transition-all duration-300 flex gap-2 items-center justify-center shadow-lg" style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }} onClick={() => {
      if (url) {
        window.open(url, "_blank")
      }
    }}>
      {icon}
      {text}
    </button>
  )
}

export default Button