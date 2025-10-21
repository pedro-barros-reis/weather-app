import { Cloud } from "lucide-react";

const Footer = () => {
  return (
    <footer id="about" className="bg-background border-border border-t">
      <div className="container mx-auto px-8 py-8 sm:px-6 lg:px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center gap-2">
            <Cloud className="text-foreground h-6 w-6" />
            <span className="text-foreground text-xl font-semibold">
              Sobre o Weather App
            </span>
          </div>
          <div className="text-muted-foreground space-y-4">
            <p>
              O Weather App é uma ferramenta informativa que permite consultar o
              clima em tempo real de qualquer cidade do mundo.
            </p>
            <p>
              Utilizamos a API do Weather API para fornecer em tempo real os
              dados atualizados. Os resultados são apresentados de forma clara e
              contextualizada para facilitar a compreensão do usuário.
            </p>
            <p className="text-sm">
              Desenvolvido com tecnologias modernas para oferecer a melhor
              experiência ao usuário.
            </p>
          </div>
        </div>
        <div className="border-border mt-8 border-t pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Weather App. Todos os direitos reservados. Desenvolvido por{" "}
            <a
              href="http://linkedin.com/in/pedro-barros-reis/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-all ease-in hover:font-semibold"
            >
              Pedro Barros Reis
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
