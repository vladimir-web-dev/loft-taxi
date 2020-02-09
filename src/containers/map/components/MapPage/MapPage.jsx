import React from "react";
import { Header } from "../../../general/Header";
import { Map } from "../Map";
import { AddressesForm } from "../AddressesForm";

export function MapPage() {
  return (
    <section className="section">
      <Header />
      <div style={{ position: "relative", height: "100%" }}>
        <Map />
        <div style={{ position: "absolute", top: "20px", left: "20px" }}>
          <AddressesForm />
        </div>
      </div>
    </section>
  );
}
