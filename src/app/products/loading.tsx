import LoadingCardSkeleton from "@/lib/loadingCardSkeleton";

const loading = () => {
  const loadingSkeletons = Array.from({ length: 4 });
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
      {loadingSkeletons.map((_, i) => (
        <LoadingCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default loading;
