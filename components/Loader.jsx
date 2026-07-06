"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div id="ftco-loader" className={`fullscreen${show ? " show" : ""}`}>
      <svg className="circular" width="48px" height="48px">
        <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee" />
        <circle
          className="path"
          cx="24"
          cy="24"
          r="22"
          fill="none"
          strokeWidth="4"
          strokeMiterlimit="10"
          stroke="#ffbd39"
        />
      </svg>
    </div>
  );
}
