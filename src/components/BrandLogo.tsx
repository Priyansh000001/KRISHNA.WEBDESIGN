const FULL_LOGO_SRC = `${import.meta.env.BASE_URL}krishna-webdesign-logo-v2.jpeg`;
const MARK_LOGO_SRC = `${import.meta.env.BASE_URL}krishna-webdesign-mark-v2.png`;

type BrandLogoProps = {
  size?: "nav" | "footer" | "login";
  linked?: boolean;
};

const sizeClass = {
  nav: "h-10 w-10 sm:h-11 sm:w-11",
  footer: "h-9 w-9 sm:h-10 sm:w-10",
  login: "h-24 w-64",
};

const labelClass = {
  nav: "text-[12px] sm:text-[13px]",
  footer: "text-[11px] sm:text-[12px]",
  login: "hidden",
};

export function BrandLogo({ size = "nav", linked = true }: BrandLogoProps) {
  const isFullLogo = size === "login";
  const logo = isFullLogo ? (
    <span className="inline-flex">
      <img
        src={FULL_LOGO_SRC}
        alt="KRISHNA.WEBDESIGN"
        width={931}
        height={757}
        className="brand-logo-image h-24 w-64 rounded-xl object-contain"
      />
    </span>
  ) : (
    <span className="inline-flex items-center gap-2.5 sm:gap-3">
      <span className="brand-logo-shell">
        <img
          src={MARK_LOGO_SRC}
          alt="KRISHNA.WEBDESIGN"
          width={512}
          height={512}
          className={`brand-logo-image ${sizeClass[size]} rounded-full object-cover`}
        />
      </span>
      <span
        className={`brand-wordmark ${labelClass[size]} max-[380px]:hidden`}
        aria-hidden="true"
      >
        KRISHNA.WEBDESIGN
      </span>
    </span>
  );

  if (!linked) {
    return <div className="group inline-flex items-center">{logo}</div>;
  }

  return (
    <a
      href="#home"
      aria-label="KRISHNA.WEBDESIGN home"
      className="group inline-flex items-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
    >
      {logo}
    </a>
  );
}
