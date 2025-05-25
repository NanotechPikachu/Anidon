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
      className="bg-slate-900 lg:h-22" isBordered
    >
      <NavbarContent justify="end" className="w-full items-center flex">
        <NavbarMenuToggle
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand>
          <p className="text-2xl font-bold ml-3">ANIDON</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center" className="hidden lg:flex">
        <NavbarItem>
          <div className="hover:border-b-2 shadow-md hover:border-violet-500 rounded-lg p-2" onClick={() => router.push("/disclaimer")}>
          <p className="text-violet-600 bold text-xl">Disclaimer</p>
          </div>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex h-auto" justify="end">
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
          <Button as={Link} color="secondary" className="flex justify-start text-base text-left my-2" variant="ghost" fullWidth href="/disclaimer">
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
