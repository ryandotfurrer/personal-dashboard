"use client";

import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Socials() {
  const socials = useQuery(api.socials.listSocials);

  return (
    <section className="flex flex-wrap gap-4">
      {socials?.map(({ _id, follower_count, platform, url }) => (
        <div key={_id} className="flex flex-col gap-2 border rounded-lg h-full w-fit aspect-square p-4 justify-between">
          <p className="font-semibold">{platform}</p>
          <span className="font-mono tabular-nums text-3xl">{follower_count}</span>
          <Button 
            nativeButton={false}
            render={
              <a 
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            variant="secondary" 
            size="sm" 
            data-icon="inline-end"
          >
            View Profile
            <ArrowUpRight className="size-[1.2em]" />
          </Button>
        </div>
      ))}
    </section>
  );
}