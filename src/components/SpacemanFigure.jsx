import React from "react";

const SPACEMAN_STAGES = [
  "",
  `
    ( )
  `,
  `
    ( )
     |
  `,
  `
    ( )
     |
     |
  `,
  `
    ( )
    /|
     |
  `,
  `
    ( )
    /|\\
     |
  `,
  `
    ( )
    /|\\
     |
    /
  `,
  `
    ( )
    /|\\
     |
    / \\
  `,
];

function SpacemanFigure({ wrongGuesses }) {
  const stageIndex = Math.min(wrongGuesses, SPACEMAN_STAGES.length - 1);
  return (
    <div
      style={{
        fontSize: "2rem",
        lineHeight: "1.2",
      }}
    >
      <pre
        style={{
          display: "inline-block",
          padding: "1rem",
          paddingLeft: "1rem",
          borderRadius: "8px",
        }}
      >
        {SPACEMAN_STAGES[stageIndex]}
      </pre>
    </div>
  );
}

export default SpacemanFigure;
