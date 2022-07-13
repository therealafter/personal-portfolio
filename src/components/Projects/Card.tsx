interface CardProps {
  data: {
    title: string;
    subtitle: string;
    image: string;
    href?: string;
  };
}

export function Card({
  data: { title, subtitle, image, href = "#" },
}: CardProps) {
  function redirectTo(url: string) {
    window.open(url, "_blank");
  }

  return (
    <article className="relative rounded-2xl overflow-hidden group">
      <img src={image} alt="" className="w-full h-full object-cover" />

      <div className="bg-gradient-to-b from-first-color-satured via-first-color-satured to-black absolute w-full h-full -bottom-full left-0 grid items-end py-6 px-5 duration-300 group-hover:bottom-0 z-10">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-white">{subtitle}</span>
          <h3 className="text-lg text-white">{title}</h3>
          <button
            onClick={() => (href !== "#" ? redirectTo(href) : null)}
            disabled={href === "#"}
            className="button !shadow-none !p-4 w-6 h-6 cursor-pointer disabled:opacity-50 disabled:bg-text-color disabled:cursor-default"
          >
            <i className="ri-link text-lg ri-lg" />
          </button>
        </div>
      </div>
    </article>
  );
}
