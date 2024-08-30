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
      <Card className="mx-auto my-3 space-y-10 md:w-[100%] border-none ">
        <CardHeader>
          <CardTitle className="text-3xl md:text-md font-allura text-blue-600 tracking-widest text-center">
            Contact me
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-10 w-full mx-auto">
          <div className="flex flex-col items-center w-full space-y-10">
            <p className="md:shrink-0 sm:shrink text-xl md:text-2xl font-semibold text-black">
              Ways To Contact Me
            </p>
            <p className="text-sm font-semibold text-muted-foreground md:shrink-0 sm:shrink md:w-[70%] space-y-10">
              For any inquiries or further communication, please don't hesitate
              to reach out to me. You can contact me via email, or if you
              prefer, you can call or text me , I am also available on [mention
              any other platforms like LinkedIn or WhatsApp, and I will do my
              best to respond promptly
            </p>
          </div>
          <div className="grid md:grid-cols-2 justify-items-center content-center place-content-center md:w-[70%] md:mx-auto gap-4 text-sm">
            <div className="border border-blue-400 font-semibold w-fit p-2 justify-self-start md:justify-self-end rounded-md ">
              <a href="#">umarsyed1200@gmail.com</a>
            </div>
            <div className="border border-blue-400 font-bold w-fit p-2 justify-self-start rounded-md font-mono tracking-wide">
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
              <a href="https://github.com/umarfarookh12" target="_blank">
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
