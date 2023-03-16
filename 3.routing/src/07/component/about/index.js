import React from "react";
import { Outlet } from "react-router";
import SiteLayout from "../../layout/SiteLayout";
import Navigation from "./Navigation";

//이름을 index.js로 바꾸면 ./component/about 시 기본으로 임포트됨

export default function About() {
  return (
    <SiteLayout>
      <Navigation />
      <Outlet />
    </SiteLayout>
  );
}
