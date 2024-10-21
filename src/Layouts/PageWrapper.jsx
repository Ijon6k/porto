const PageWrapper = ({ children, customClass }) => {
  return (
    <div
      className={`${customClass} max-w-screen-2xl mx-auto w-full  overflow-hidden overflow-x-hidden`}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
