/**
 * The editorial side-label used throughout the proposal PDF:
 * a small uppercase label on the left, separated from main content by a vertical red rule.
 */
export function SectionLabel({
  eyebrow,
  brand = true,
}: {
  eyebrow: string;
  brand?: boolean;
}) {
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      {brand && (
        <p className="font-bold tracking-tight text-sm leading-tight">
          OSHODI<br />
          <span className="text-accent">FAMILY</span><br />
          FOUNDATION
        </p>
      )}
      <p className="text-xs uppercase tracking-widest text-muted-foreground">
        {eyebrow}
      </p>
    </div>
  );
}
