import Image from "next/image";
import { motion as m } from "framer-motion";

const SomethingWentWrong: React.FC = () => {
  const openLinkInNewTab = (url: string) => {
    window.open(url, "_blank");
    window.location.reload();
  };
  return (
    <div className="flex flex-col items-center p-4 w-3/4">
      <m.div
        initial={{ opacity: 0, y: "5%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 0, y: "5%" }}
      >
        <Image
          src="/images/anxiety.png"
          width={250}
          height={250}
          alt="sad face"
          className="mb-6"
        ></Image>
      </m.div>
      <m.div
        initial={{ opacity: 0, y: "5%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 0, y: "10%" }}
        className="flex flex-col items-center"
      >
        <p className="text-white text-2xl  mt-4">
          Oops.. Somehting went wrong on our side.
        </p>
        <p className="text-white text-2xl  mt-2">
          Fill this form to help us imporve:
        </p>
        <a
          className="text-green-400 hover:green-600 text-2xl mt-2 font-semibold cursor-pointer"
          onClick={() =>
            openLinkInNewTab(process.env.NEXT_PUBLIC_BUG_FORM as string)
          }
        >
          Click Here
        </a>
      </m.div>
    </div>
  );
};

export default SomethingWentWrong;
