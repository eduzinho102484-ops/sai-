import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { ArrowLeft, SearchX } from "lucide-react";

import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="bg-gradient-brand flex min-h-screen items-center justify-center px-5 py-20">
      <div className="flex max-w-[520px] flex-col items-center gap-5 text-center">
        <span
          className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-glow-whatsapp"
          aria-hidden="true"
        >
          <SearchX className="h-7 w-7" />
        </span>
        <p className="text-label-caps text-brand-muted">Erro 404</p>
        <h1 className="text-display-lg font-bold text-brand-foreground">
          {t("notFound.title")}
        </h1>
        <p className="text-body-lg text-brand-muted">
          O endereço acessado não existe neste site. Volte para a página inicial para
          falar com a Lucky Service pelo WhatsApp.
        </p>
        <Button asChild size="lg" className="mt-2">
          <a href="/">
            <ArrowLeft aria-hidden="true" />
            <span>{t("notFound.actions.backHome")}</span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
