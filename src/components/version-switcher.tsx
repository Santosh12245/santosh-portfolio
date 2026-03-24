"use client";

import { Check, ChevronsUpDown, GalleryVerticalEnd } from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { NavItem } from "@/types/nav";

export function VersionSwitcher({
  versions,
  defaultVersion,
}: {
  versions: NavItem[];
  defaultVersion: NavItem;
}) {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="default"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="bg-sidebar-primary text-sidebar-primary-foreground hidden aspect-square size-8 items-center justify-center rounded-lg md:flex">
            <GalleryVerticalEnd className="size-4" />
          </div>
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="block md:hidden">
              {defaultVersion.title.split(":")[0]}
            </span>

            <span className="hidden md:block">{defaultVersion.title}</span>
          </div>
          <ChevronsUpDown className="ml-auto" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width)"
        align="start"
      >
        {versions.map((version) => (
          <DropdownMenuItem
            key={version.title}
            onSelect={() => {
              // setSelectedVersion(version.title);
              if (version.href.startsWith("http")) {
                window.open(version.href, "_blank");
              } else {
                router.push(version.href);
              }
            }}
          >
            {version.title}{" "}
            {version.title === defaultVersion.title && (
              <Check className="ml-auto" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
