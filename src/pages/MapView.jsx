import React from "react";
import { useParams } from "react-router-dom";

export default function MapView() {
  const { id } = useParams(); // Optional temple ID

  const templeMaps = {
    1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59635.63327709748!2d70.3166982348688!3d20.903181798793536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bfd328b9ce28aeb%3A0x6d2efaa0d9eda083!2sSomnath%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1758547644778!5m2!1sen!2sin",
    2: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29542.6008117894!2d68.94879391542497!3d22.24671380237371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39569c266399e37b%3A0xb5866e461a106e0a!2sDwarka%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1758547683762!5m2!1sen!2sin",
    3: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29084.60153377349!2d72.83607212040704!3d24.326448609992774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395d22f74567e2ff%3A0xba6ee2bdabf61b43!2sAmbaji%2C%20Gujarat%20385110!5e0!3m2!1sen!2sin!4v1758547881187!5m2!1sen!2sin",
    4: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7377.331914694379!2d73.45377078876744!3d22.403946968448484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fd61bf3dd73b3%3A0xf364666977119bf4!2spavagad%2C%20Gujarat%20389360!5e0!3m2!1sen!2sin!4v1758547947055!5m2!1sen!2sin",
  };

  // Default Gujarat map if no temple ID
  const defaultMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777453.289416903!2d68.68448036338565!3d22.39440222453017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959051f5f0ef795%3A0x861bd887ed54522e!2sGujarat!5e0!3m2!1sen!2sin!4v1758545845113!5m2!1sen!2sin";

  const embedUrl = id ? templeMaps[id] : defaultMap;

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="w-full h-full">
        <iframe
          title="Map"
          src={embedUrl}
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          className="border-0"
        ></iframe>
      </div>
    </div>
  );
}
