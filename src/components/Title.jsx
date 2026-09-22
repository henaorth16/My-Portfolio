
const Title = ({ title }) => {
  return (
    <div className="mb-3.5 flex items-center gap-2.5">
      <span className="w-1.5 h-5 bg-primary-500 rounded-sm"></span>
      <h2 className="text-lg sm:text-xl font-bold font-heading text-secondary-100">
        {title}
      </h2>
    </div>
  );
};

export function MainTitle({ title, subtitle }) {
  return (
    <div className="text-center pt-16 pb-3 max-w-2xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-secondary-50 tracking-tight">
        {title}<span className="text-primary-500">.</span>
      </h1>
      {subtitle && (
        <p className="text-secondary-300 text-sm sm:text-base mt-1.5">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function MainParagraph({ text }) {
  return (
    <p className="text-secondary-300 text-sm sm:text-base leading-relaxed text-center max-w-2xl mx-auto mb-4">
      {text}
    </p>
  );
}

export default Title;


