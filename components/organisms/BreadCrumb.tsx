import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Breadcrumb = () => {
  const router = useRouter();
  let joinedPath = "";
  return (
    <div className="font-bold leading-6 text-gray-500 mt-4">
      {router.asPath.split("/").map((path, index) => {
        if (path) {
          joinedPath += path + "/";
          return (
            <Link key={index} href={`/${joinedPath}`}>
              <a>
                <span>/</span> {path}
              </a>
            </Link>
          );
        }
      })}
    </div>
  );
};

export default Breadcrumb;
