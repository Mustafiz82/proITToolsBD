type ThemedRadioProps = {
  checked: boolean;
};

export const ThemedRadio = ({ checked }: ThemedRadioProps) => {
  return (
    <span
      className={[
        "relative mt-1 grid place-items-center",
        "min-h-5 min-w-5 rounded-full",
        "border transition-all duration-200",
        checked
          ? "border-purple-400/70 "
          : "border-white/20",
      ].join(" ")}
    >
      {/* inner dot */}
      <span
        className={[
          "h-2.5 w-2.5 rounded-full transition-all duration-200",
          checked
            ? "bg-linear-to-r from-purple-400 to-blue-400 scale-100 opacity-100"
            : "bg-white/10 scale-75 opacity-0",
        ].join(" ")}
      />

      {/* subtle glow blob when checked */}
      {checked && (
        <span className="absolute -inset-2 rounded-full bg-purple-500/10 blur-md" />
      )}
    </span>
  );
};
