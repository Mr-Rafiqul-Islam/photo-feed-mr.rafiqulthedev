import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let defaultLocale = "en";

let locales = ["bn", "en"];

// get the preffered locale , similar to above or using a library

function getLocale(request) {
  const acceptedLanguage = request.header.get("accept-language") ?? undefined;

  const headers = { "accept-language": acceptedLanguage };

  const languages = new Negotiator({ headers }).languages();

  console.log(languages);

  return match(languages, locales, defaultLocale);
}

export default function middleware(request) {
  const pathName = request.nextUrl.pathName;

  const pathNameIsMissingLocale = locales.every(
    (locale) => !pathName.startswith(`/${locale}/`) && pathName !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathNameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathName}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    "/((?!api|assets|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
