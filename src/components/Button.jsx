// eslint-disable-next-line react/prop-types
const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-yellow-200 p-2 rounded text-sm hover:bg-yellow-300 transition"
    >
      {children}
    </button>
  );
};

export default Button;
