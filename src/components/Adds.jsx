import React from 'react'

export default function Adds() {
  const WebsiteTermsOfUse = 'https://www.tomorrowland.com/en/website-terms-of-use'
  const PrivacyPolicy = 'https://www.tomorrowland.com/en/festival/tickets/your-privacy'
  const FAQ = 'https://www.tomorrowland.com/en/faq-contact'
  return (
    <div className="hidden lg:flex justify-center">
    <ul className="flex gap-8">
      <li>
        <a href={WebsiteTermsOfUse}>
          <span className="text-slate-300 hover:text-slate-50 hover:animate-pulse duration-300">
            WEBSITE TERMS OF USE
          </span>
        </a>
      </li>
      <li>
        <a href={PrivacyPolicy}>
          <span className="text-slate-300 hover:text-slate-50 hover:animate-pulse duration-300">
            PRIVACY POLICY
          </span>
        </a>
      </li>
      <li>
        <a href={FAQ}>
          <span className="text-slate-300 hover:text-slate-50 hover:animate-pulse duration-300">
            FAQ
          </span>
        </a>
      </li>
    </ul>
  </div>
  )
}
