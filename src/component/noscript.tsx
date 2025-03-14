import { memo } from "react";

const Noscript = () => {
  return (
    <noscript>
      <div
        style={{
          position: "fixed",
          zIndex: 1000,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "grid",
          placeItems: "center",
          margin: "0 1rem",
          pointerEvents: "none",
        }}
        role="alert"
      >
        <p
          style={{
            padding: "1rem",
            backgroundColor: "#fff4f4",
            color: "#d32f2f",
            border: "2px solid currentColor",
            borderRadius: "0.5rem",
            textAlign: "center",
            lineHeight: 1.5,
            pointerEvents: "auto",
            maxWidth: "30rem",
          }}
        >
          JavaScript is required for this website to function properly. Please
          ensure that it is supported and enabled in your browser settings.
          <br />
          To learn more, check out{" "}
          <a
            style={{ textDecorationLine: "underline", color: "LinkText" }}
            href="https://enable-javascript.com/"
          >
            How to enable JavaScript in your browser
          </a>
          .
        </p>
      </div>
    </noscript>
  );
};

export default memo(Noscript);
