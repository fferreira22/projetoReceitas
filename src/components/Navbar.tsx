import { useEffect } from "react";
import "./Navbar.css";
import Search from "./Search";
import { useSearchParams, generatePath, useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants";

export default function Navbar() {
  const [searchParams, setSearchParams] = useSearchParams({ title: "" });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(searchParams.get("title") || "");
  }, [searchParams]);

  return (
    <nav className="navbar">
      <div className="nav-links">
        <a onClick={() => navigate(generatePath(ROUTES.recipes))}>
          Página Inicial
        </a>
        <a onClick={() => navigate(generatePath(ROUTES.contactUs))}>Contacto</a>
      </div>
      <Search
        value={searchParams.get("title") || ""}
        onChange={(title) => setSearchParams({ title })}
      />
    </nav>
  );
}
