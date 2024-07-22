import { Button } from "./ui/button";
import { MdOutlineExpandMore } from "react-icons/md";

//componentes
import Socials from "./Socials";
import Photo from "./Photo";

const Homepage = () => {
  return (
    <div className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* TEXTO */}
          <div className="text-center xl:text-left ">
            <span className="text-xl">junte-se!</span>
            <h1 className="h1 mb-5 mt-5">
              Seu <span className="text-accent">hub</span> de inovação!
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Descubra, aprenda e
              compartilhe conhecimento em um espaço dedicado aos apaixonados por
              tecnologia.
            </p>
            {/* BOTÃO */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                varient="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Ver mais</span>
                <MdOutlineExpandMore className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* IMAGEM */}
          <div className="mb-5">
            <Photo className="order-1 xl:order-none mb-8 xl:mb-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
