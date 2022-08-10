import React, { Fragment, useCallback, useEffect, useState } from "react";
import { CardList } from "../components/cards/CardList";
import { Header } from "../components/layout/Header";
import { Loading } from "../components/ui/Loading";
import { sendRequest } from "../helpers/send-request";

//Here you can change time between every request
//Note provide time in seconds: 5 => 5s
const time = 15;
//If you want to add more endpoints you can do it here
const params = [
  "accounts",
  "assets",
  "customers",
  "datapoints",
  "devices",
  "documents",
  "forms",
  "invites",
  "media",
  "messages",
  "namespaces",
  "orders",
  "patients",
  "relationships",
  "rules",
  "templates",
  "users",
  "workflows",
];

//Home Page
export const HomePage = () => {
  // useState to store data returned from apis
  const [items, setItems] = useState([]);
  //Loading state
  const [loading, setLoading] = useState(true);

  //Function that fires all requests
  const getData = useCallback(async () => {
    let data = [];
    for (let param of params) {
      const res = await sendRequest(param);
      data.push(res);
    }
    setItems(data);
    // This is gonna be fired just the first time app loads just to give feedback to user of what's happening
    setLoading(false);
  }, []);

  //Interval every specified time
  useEffect(() => {
    let interval = setInterval(() => {
      getData();
    }, time * 1000);
    return () => {
      clearInterval(interval);
    };
  }, [getData]);

  //Get data first time it loads
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Fragment>
      <Header title="Status Dashboard" />
      {loading && <Loading />}
      {items.length > 0 && <CardList items={items} />}
    </Fragment>
  );
};
