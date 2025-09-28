"use client";

import { DiscordSvg, GitSvg, MailSvg } from "@/components/Svg";
import { Alert, Button, Divider, Link } from "@heroui/react";

export default function Disclaimer() {
  const desc =
    "All the content, from anime information to anime episodes and their links is owned by the makers of animepahe.ru and I am in no way responsible for any content shown be it be due to its incorrectness or legal implications as the project is strictly for personal use, educational purpose and non commercial.";
  return (
    <div className="mt-10 mr-4 ml-4 mb-10">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-blue-500/70 hover:underline">
          DISCLAIMER AND INFORMATION
        </h1>
      </div>
      <div className="text-lg text-white/50">
        This project aims to explore the world of scraping and data extraction
        from{" "}
        <Link href="https://animepahe.si" target="_blank" showAnchorIcon>
          AnimePahe
        </Link>{" "}
        website.
        <br />
        <br />
        <Alert
          variant="bordered"
          color="warning"
          hideIconWrapper
          title="Content Source"
          description={desc}
        />
        <br />
        <Divider className="mb-4" />
        <h2 className="text-xl lg:text-2xl font-bold text-center text-blue-500/70 hover:underline mb-4">
          LICENSE
        </h2>
        This project is under{" "}
        <b>
          <Link
            href="https://creativecommons.org/licenses/by-nc/4.0/"
            showAnchorIcon
            target="_blank"
          >
            Creative Commons Attribution-Non Commercial 4.0 International
          </Link>
        </b>{" "}
        license. Please click on the highlighted text to know the clauses and
        terms of usage of this website and its source.
        <br />
        <Divider className="mb-4 mt-3" />
        <h2 className="text-xl lg:text-2xl font-bold text-center text-blue-500/70 hover:underline mb-4">
          SOURCE CODE
        </h2>
        The project is fully open-source and the source code can be accessed by
        clicking the button, which will redirect to the GitHub
        repository.&nbsp;&nbsp;
        <Button
          as={Link}
          showAnchorIcon
          href="https://github.com/NanotechPikachu/Anidon"
          color="success"
          target="_blank"
          variant="ghost"
          className="text-lg"
          size="sm"
        >
          Anidon
        </Button>
        <br />
        <Divider className="mb-4 mt-3" />
        <h2 className="text-xl lg:text-2xl font-bold text-center text-blue-500/70 hover:underline mb-4">
          DMCA
        </h2>
        As said at first, the ownership of the content shown on the website,
        except the code and structure resides with the owners or providers of{" "}
        <Link href="https://animepahe.si" target="_blank" showAnchorIcon>
          animepahe.si
        </Link>
        . I am no way legally responsible for the contents which may/may not be
        under copyright or the likes. As such, all DMCA complaints should be
        redirected to AnimePahe.
        <br />
        <br />
        Still, if you, who owns the rights of any results shown in this website
        want it to be taken down, you're free to send a mail saying so to the
        address which will be given below. On receiving such information and
        validating it, I&apos;ll be taking down the hosting of this website,
        while keeping the code still open as the project is for{" "}
        <b>
          educational purposes only. I DO NOT endorse or support piracy or any
          illegal activity.
        </b>
        <br />
        <Divider className="mb-4 mt-3" />
        <h2 className="text-xl lg:text-2xl font-bold text-center text-blue-500/70 hover:underline mb-4">
          Developer&apos;s Profile
        </h2>
        <div className="flex justify-center items-center flex-wrap gap-5">
          <Button color="success" variant="faded" startContent={<MailSvg />}>
            nanotechpikachu@gmail.com
          </Button>
          <Button
            as={Link}
            color="success"
            variant="faded"
            startContent={<DiscordSvg />}
            href="https://discord.com/users/949588732498018324"
          >
            NanotechPikachu
          </Button>
          <Button
            as={Link}
            color="success"
            variant="faded"
            startContent={<GitSvg />}
            href="https://github.com/NanotechPikachu"
          >
            NanotechPikachu
          </Button>
        </div>
      </div>
    </div>
  );
}
