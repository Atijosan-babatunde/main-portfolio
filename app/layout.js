import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "aos/dist/aos.css";
import "./globals.css";

export const metadata = {
  title: "Babatunde Atijosan | Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer & Fintech Specialist based in Lagos, Nigeria. Architecting financial infrastructure for the web.",
  icons: {
    icon: "/images/icon-2.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900"
          rel="stylesheet"
        />
        <link
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        {/* Copy these two folders from your old project into /public exactly as-is: */}
        {/* public/css/icomoon.css  (contact/footer icons) */}
        {/* public/css/open-iconic-bootstrap.min.css  (mobile menu icon) */}
        <link rel="stylesheet" href="/css/icomoon.css" />
        <link rel="stylesheet" href="/css/open-iconic-bootstrap.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
