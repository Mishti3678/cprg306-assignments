import Link from "next/link";
import React from "react";

export default function StudentInfo() {
  return (
    <div>
      <h1>Github: <Link
          href="https://github.com/Mishti3678/CPRG306_assignments" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: 'white', textDecoration: 'underline' }}
        >
          Mishti3678/cprg306-assignments
        </Link>
      </h1>
    </div>
  );
}

