import React, { useEffect } from "react";

const BubbleText = ({ children, className }) => {
  useEffect(() => {
    const spans = document.querySelectorAll(".hover-text span");

    spans.forEach((span) => {
      span.addEventListener("mouseenter", function () {
        this.style.fontWeight = "100";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "300";
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "300";
        }
      });

      span.addEventListener("mouseleave", function () {
        this.style.fontWeight = "900";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "900";
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "900";
        }
      });
    });
  }, []);

  return (
    <h2 className={`hover-text text-5xl font-black ${className}`}>
      <Text>{children}</Text>
    </h2>
  );
};

const Text = ({ children }) => {
  return (
    <>
      {children.split("").map((child, idx) => (
        <span
          style={{
            transition: "0.35s font-weight, 0.35s color",
          }}
          key={idx}
        >
          {child}
        </span>
      ))}
    </>
  );
};

export default BubbleText;
