import { tickets } from "../db/tickets.js";
import Tickets from "../components/Tickets";
import Faq from "../components/Faq";

import React from "react";

export default function TicketsPage() {
  return (
    <>
      <h1 className="text-center text-4xl md:text-5xl p-4 md:p-8 mt-32 md:mt-40">OFFICIAL STORE</h1>
      <div className="line mx-auto w-[300px] md:w-[450px] border-b-2 border-white"></div>
      <h3 className="text-xl text-center p-4 md:p-8 md:pb-1">
        TOMORROWLAND PRESENTS CORE MEDELLIN 96.3% IS SOLD OUT.
      </h3>
      <h3 className="text-xl text-center max-w-[600px] px-8 md:px-0 mx-auto">
      Due to issues with our payment gateway, you can now securely place your orders via WhatsApp. A representative will guide you through your purchase and send you the payment link!
      </h3>
      <Tickets tickets={tickets} />
      <Faq />
    </>
  );
}
