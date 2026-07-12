import { useEffect } from "react";

export default function LandingRedirect() {
  useEffect(() => {
    window.location.replace("/landing/index.html");
  }, []);

  return null;
}