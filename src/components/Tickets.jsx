import React from "react";
import TicketItem from "./TicketItem";
import { useCart } from "../hooks/useCart";

export default function Tickets({ tickets }) {
  const { cart } = useCart();

  const checkProductInCart = (ticket) => {
    return cart.some((item) => item.id === ticket.id);
  };

  return (
    <main className="flex justify-center items-center mt-10 md:px-10">
      <ul className="grid grid-cols-2 lg:grid-cols-3 md:gap-6 place-items-center p-1">
        {tickets.map((ticket, index) => {
          const isProductInCart = checkProductInCart(ticket);

          return <TicketItem key={index} ticket={ticket} isProductInCart={isProductInCart}/>;
        })}
      </ul>
    </main>
  );
}
