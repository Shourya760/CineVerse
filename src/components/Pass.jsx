// PassCard.js
import React from "react";
import { QRCodeSVG } from "qrcode.react";

export default function PassCard({ pass }) {
  return (
    <div
      style={{
        width: "350px",
        padding: "20px",
        borderRadius: "15px",
        border: "2px solid #6B46C1",
        background: "#F3E8FF",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
      id={`pass-${pass.id}`}
    >
      <h2 style={{ color: "#6B46C1", fontSize: "18px" }}>{pass.templeName}</h2>
      <div>Name: {pass.name}</div>
      <div>
        {pass.date} - {pass.timeSlot}
      </div>
      <div style={{ marginTop: "10px" }}>
        <QRCodeSVG value={pass.id} size={120} />
      </div>
    </div>
  );
}
