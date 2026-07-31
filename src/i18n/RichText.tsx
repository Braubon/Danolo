import { ReactNode } from "react";

/**
 * Renders text where **bold** segments become <strong>.
 * Newlines (\n) become <br />.
 */
export const RichText = ({ text }: { text: string }): ReactNode => {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, li) => {
        const parts = line.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
        return (
          <span key={li}>
            {parts.map((p, i) =>
              p.startsWith("**") && p.endsWith("**") ? (
                <strong key={i}>{p.slice(2, -2)}</strong>
              ) : (
                <span key={i}>{p}</span>
              )
            )}
            {li < lines.length - 1 && <br />}
          </span>
        );
      })}
    </>
  );
};
