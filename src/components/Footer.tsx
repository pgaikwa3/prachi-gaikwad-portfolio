import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground">
            <span className="font-semibold text-primary">Prachi</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
