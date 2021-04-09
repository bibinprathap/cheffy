import React from "react";
import { useDispatch } from "react-redux";
import FoodHeader from "../../src/components/Layouts/Header/HomeHeader";
import { FoodFooter } from "../../src/components/Layouts/home";
import Category from "../../src/components/Layouts/category/Category";
import Head from "next/head";

function Index() {
  const dispatch = useDispatch();
  return (
    <div>
      <Head>
        <title>
          Cheffy - Category
        </title>
      </Head>
      <FoodHeader />
      <Category dispatch={dispatch} />
      <FoodFooter />
    </div>
  );
}

export default Index;
