import { useRouter } from "next/router";

import { FaLock } from "react-icons/fa";

export const PaymentRequiredWall = () => {
  const router = useRouter();

  return (
    <div
      className="payment-required-wall"
      style={{
        display: "none",
        textAlign: "center",
        padding: "15px",
        whiteSpace: "pre-wrap",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        fontFamily: "sans-serif",
        zIndex: 800,
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          maxWidth: "500px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <FaLock style={{ fontSize: "40px", color: "grey" }} />
        <br />
        <br />
        <br />
        <span style={{ lineHeight: "30px" }}>
          402: Payment is required. Contact your web developer to fix this
          issue.{" "}
          <strong style={{ fontWeight: "bold" }}>
            codingthefront@gmail.com
          </strong>{" "}
          OR <strong style={{ fontWeight: "bold" }}>(336) 831-3432</strong>
        </span>
        <br />
        <br />

        <span style={{ lineHeight: "30px" }}>
          If you are seeing this screen and have made your payment, please click
          the button below to refresh the website:
        </span>
        <br />
        <br />
        <br />

        <button
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px",
            cursor: "pointer",
          }}
          onClick={() => {
            router.push("/");
          }}
        >
          Refresh Website
        </button>
      </div>
    </div>
  );
};
