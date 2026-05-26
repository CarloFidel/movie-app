const LoadingComponent = () => {
  return (
    <section className="absolute top-50 left-0 flex flex-row justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center rounded-lg p-20">
        <div className="w-16 h-16 border-dashed border-4 border-t-4 border-primary-600 rounded-full animate-ping"></div>
        <p className="mt-10 text-primary-600 animate-pulse text-lg">Loading...</p>
      </div>
    </section>
  );
};

export default LoadingComponent;
