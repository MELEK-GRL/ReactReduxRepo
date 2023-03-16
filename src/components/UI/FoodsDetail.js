import React from "react";
import Tab from "./Tab";
import Comments from "./Comments";
import FoodsDetailBanner from "./FoodsDetailBanner";

export default function FoodsDetail() {
  return (
    <div className="flex w-full flex-col gap-8">
      <FoodsDetailBanner />
      <Tab />
      <Comments />
    </div>
  );
}