import "../assets/css/faq.css";

export default function FaqItem({ title, description }) {
  const featureList = description.split(" - ");
  return (
    <div className="collapsible">
      <input type="checkbox" id={`collapsible-${title}`} />
      <label htmlFor={`collapsible-${title}`}>{title}</label>
      <div className="collapsible-text">
        <h2 className="">{title}</h2>
        {featureList.length > 1 ? (
          <ul className="flex flex-col pl-8 capitalize">
            {featureList.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
}
