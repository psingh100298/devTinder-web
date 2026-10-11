const EmptyState = ({ icon, title, message }) => {
  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body items-center text-center">
          <div className="text-6xl">{icon}</div>
          <h2 className="card-title">{title}</h2>
          <p className="opacity-70">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
