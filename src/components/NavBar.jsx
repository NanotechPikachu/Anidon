"use client";

import {
  Button,
  Form,
  Input,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { default as NextLink } from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchItem, setsearchItem] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (!searchItem?.trim()) return;
    router.push(`/search/${encodeURIComponent(searchItem)}`);
    setIsOpen(false);
  };

  return (
    <Navbar
      isMenuOpen={isOpen}
      onMenuOpenChange={(open) => setIsOpen(open)}
      maxWidth="full"
      className="bg-slate-900 lg:h-22"
      isBordered
    >
      <NavbarContent justify="end" className="w-full items-center flex">
        <NavbarMenuToggle
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand>
          <NextLink href="/">
            <p className="text-2xl lg:text-3xl font-bold ml-3 font-['Poppins']">
              ANIDON
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      {/*<NavbarContent justify="center" className="hidden lg:flex">
        <NavbarItem>
          <div onClick={() => router.push("/disclaimer")}>
            <Button color="secondary" variant="ghost" isIconOnly>
              <svg
                dataSlot="ic</Button>on"
                fill="none"
                strokeWidth={1.5}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>
            </Button>
          </div>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarContent className="hidden lg:flex h-auto" justify="end">
        <NavbarItem>
          <div className="relative group">
            <Button
              color="secondary"
              variant="ghost"
              isIconOnly
              onClick={() => router.push("/disclaimer")}
            >
              <svg
                dataslot="icon"
                fill="none"
                strokeWidth={1.5}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>
            </Button>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white/80 mt-2 p-1 rounded-lg text-sm text-violet-800/90 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              Disclaimer
            </div>
          </div>
        </NavbarItem>
        <NavbarItem>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Input
              label="Search Anime"
              variant="bordered"
              className="w-80 h-15 text-base mr-3 text-white/80"
              onValueChange={(v) => setsearchItem(v)}
            />
          </Form>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="lg:hidden">
        <NavbarMenuItem>
          <Button
            as={Link}
            color="secondary"
            className="flex justify-start text-base text-left my-2"
            variant="ghost"
            fullWidth
            href="/disclaimer"
          >
            Disclaimer
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Input
              label="Search Anime"
              variant="bordered"
              className="w-full text-sm text-white/80"
              onValueChange={(v) => setsearchItem(v)}
            />
          </Form>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
