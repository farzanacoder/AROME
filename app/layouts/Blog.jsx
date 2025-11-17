import React from "react";
import CommonHead from "../components/CommonHead";
import CommonPara from "../components/CommonPara";
import CommonBlog from "../components/CommonBlog";
import Button from "../components/Button";

export default function Blog() {
  return (
    <section className="my-20">
      <div className="container">
        <div className="flex justify-between items-center mb-10">
          <div>
            <CommonPara para="OUR BLOG" />
            <CommonHead Heading="News & Blog Updates" />
          </div>
          <button className="underline cursor-pointer text-lg">
            View All
          </button>
        </div>

        <div className="flex gap-7">
            <CommonBlog />
        <CommonBlog />
        <CommonBlog />
        </div>
      </div>
    </section>
  );
}
