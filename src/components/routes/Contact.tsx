import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
const Contact = () => {
  return (
    <div>
      <Card className="mx-auto my-3 md:w-[100%]">
        <CardHeader>
          <CardTitle className="text-3xl md:text-md font-allura text-blue-600 dark:text-blue-400 tracking-widest text-center ">
            Contact me
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 w-full border border-black mx-auto">
          <div className="flex flex-col items-center w-full">
            <p className="md:shrink-0 sm:shrink text-xl md:text-2xl font-semibold text-black dark:text-blue-400">
              Ways To Contact Me
            </p>
            <p className="text-sm font-semibold text-muted-foreground md:shrink-0 sm:shrink">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus eius officiis totam! Quod, officiis dolorem! Saepe
              nobis
            </p>
          </div>
          <div className="grid md:grid-cols-2 justify-items-center content-center place-content-center md:w-[70%] md:mx-auto gap-4 text-sm">
            <div className="border border-blue-400 font-semibold w-fit p-2 justify-self-start md:justify-self-end rounded-md ">
              <a href="#">sdumarfarookh212@gmail.com</a>
            </div>
            <div className="border border-blue-400 font-semibold w-fit p-2 justify-self-start rounded-md font-mono tracking-wide">
              <a href="#">+91 9441812115</a>
            </div>
            <div className="border border-blue-400 font-semibold w-fit p-2 md:justify-self-end rounded-md">
              <a
                href="https://www.linkedin.com/in/umarfarookh/"
                target="_blank"
              >
                https://www.linkedin.com/in/umarfarookh/
              </a>
            </div>
            <div className="border border-blue-400 font-semibold w-fit p-2 justify-self-start  rounded-md">
              <a href="https://github.com/umarfarookh12">
                https://github.com/umarfarookh12
              </a>
            </div>
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default Contact;
