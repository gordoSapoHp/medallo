import { faq } from "../db/faqContent.js";
import FaqItem from "./FaqItem.jsx";

export default function Faq() {
  return (
    <main className="my-20 md:my-32">
      <h1 className="text-center md:p-8 text-6xl font-bold">FAQ</h1>
      <div className="wrapper">
        {faq.map((item, index) => (
          <FaqItem
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </main>
  );
}
