import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      // transactions: [
      //   {
      //     id: 1,
      //     title: "Tetes",
      //     type: "deposit",
      //     amount: 300,
      //     category: "teste",
      //     createdAt: new Date(),
      //   },
      // ],
    });
  },
  routes() {
    this.namespace = "api";
    this.get("/transactions", (schema) => {
      return schema.all("transaction");
    }),
      this.post("/transactions", (schema, req) => {
        const data = JSON.parse(req.requestBody);
        return schema.create("transaction", data);
      });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
