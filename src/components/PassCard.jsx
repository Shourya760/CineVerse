// PassCard.js
import React from "react";
import { QRCodeSVG } from "qrcode.react";

export default function PassCard({ pass }) {
  return (
    <div
      id={`pass-${pass.id}`}
      className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 rounded-2xl shadow-lg p-6 w-80 text-center border border-purple-200 flex flex-col items-center gap-4 relative"
      style={{ fontFamily: "Inter, sans-serif", backgroundColor: "#F3E8FF" }}
    >
      {/* Decorative top bar */}
      <div className="absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400" />

      {/* Temple name */}
      <h2 className="text-2xl font-extrabold text-purple-700 mt-2">
        {pass.templeName}
      </h2>

      {/* User info */}
      <div className="text-gray-700 font-medium text-lg">👤 {pass.name}</div>
      <div className="text-gray-600 text-sm">
        📅 {pass.date} | ⏰ {pass.timeSlot}
      </div>

      {/* QR code */}
      <div className="p-3 bg-white rounded-xl shadow-inner border border-purple-100">
        <QRCodeSVG value={JSON.stringify(pass)} size={128} />
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-500 mt-1 italic">
        Show this QR at the temple entrance
      </div>
    </div>
  );
}
