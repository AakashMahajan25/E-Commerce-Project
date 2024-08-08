"use client";
import React, { useState } from "react";

export default function SecondaryNavbar() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <nav>
      <ul className="flex space-x-4">
        <li
          className="relative"
          onMouseEnter={() => setHovered("menu1")}
          onMouseLeave={() => setHovered(null)}
        >
          <a href="#" className="text-white">
            Menu Item 1
          </a>
          {hovered === "menu1" && (
            <div className="absolute left-0 mt-2 bg-white text-black p-2 rounded shadow-lg">
              <ul>
                <li>
                  <a href="#" className="block px-4 py-2">
                    Subitem 1
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2">
                    Subitem 2
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2">
                    Subitem 3
                  </a>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li
          className="relative"
          onMouseEnter={() => setHovered("menu2")}
          onMouseLeave={() => setHovered(null)}
        >
          <a href="#" className="text-white">
            Menu Item 2
          </a>
          {hovered === "menu2" && (
            <div className="absolute left-0 mt-2 bg-white text-black p-2 rounded shadow-lg">
              <ul>
                <li>
                  <a href="#" className="block px-4 py-2">
                    Subitem 1
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2">
                    Subitem 2
                  </a>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}
