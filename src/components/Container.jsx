const Container = ({ children, className = '' }) => {
  return (
    <div
      className={`
        w-full
        max-w-300
        mx-auto
        px-5
        md:px-8
        lg:px-10
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;
