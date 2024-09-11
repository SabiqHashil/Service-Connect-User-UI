import PropTypes from "prop-types";

const ButtonComp = ({
  text,
  onClick,
  className,
  icon: Icon,
  iconPosition = "before",
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-black flex items-center justify-cente w-[430px] h-[60px] hover:bg-blue-700 text-white font-bold rounded-full relative ${className}`}
    >
      {Icon && iconPosition === "before" && (
        <Icon className="absolute left-4 rounded-full bg-white text-black p-2 text-5xl" />
      )}
      <span className="flex-grow text-center">{text}</span>

      {Icon && iconPosition === "after" && (
        <Icon className="absolute right-4  rounded-full bg-white text-black p-2 text-5xl" />
      )}
    </button>
  );
};

ButtonComp.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.elementType,
  iconPosition: PropTypes.oneOf(["before", "after"]),
};

export default ButtonComp;
