const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-muted/30">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-xl font-bold text-foreground">
            WealthFi
          </div>
          
          {/* Legal text */}
          <p className="text-sm text-muted-foreground text-center max-w-md">
            Conteúdo educacional. Não constitui recomendação de investimento.
          </p>
          
          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Termos
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacidade
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} WealthFi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
