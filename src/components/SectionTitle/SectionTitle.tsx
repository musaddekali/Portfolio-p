const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="sticky top-0 z-20 mb-4 bg-sky-100/25 px-6 py-5 backdrop-blur">
      <h2 className="text-sm font-bold uppercase tracking-widest">
        {title}
      </h2>
    </div>
  );
};
export default SectionTitle;
