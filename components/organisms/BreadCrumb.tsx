import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Breadcrumb = () => {
  const router = useRouter();
  let joinedPath = "";
  return (
    <>
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
    </>
  );
};

export default Breadcrumb;
