"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// @ts-expect-error - Direct import for performance
import TrendingUp from "lucide-react/dist/esm/icons/trending-up";
// @ts-expect-error - Direct import for performance
import TrendingDown from "lucide-react/dist/esm/icons/trending-down";
import { cn } from "@/lib/utils";
import { formatTimestamp } from "@/lib/format-timestamp";
import { SocialsRefreshStatus } from "./socials-refresh-status";

interface SocialPlatformCardProps {
  platform: string;
  follower_count: number;
  subscriber_count?: number;
  previous_follower_count?: number;
  previous_subscriber_count?: number;
  url?: string;
  profile_url?: string;
  last_updated?: number;
  isClicked: boolean;
  result?: {
    success: boolean;
    error?: string;
  };
  isRefreshing: boolean;
  isDisabled: boolean;
  isAnimatingTimestamp: boolean;
  onRefresh: () => void;
}

function TrendIndicator({ current, previous }: { current: number; previous?: number }) {
  if (previous === undefined) return null;
  const diff = current - previous;
  if (diff === 0) {
    return null;
  }
  if (diff > 0) {
    return (
      <span className="flex items-center gap-1 text-xs text-emerald-500">
        <TrendingUp className="size-3" />
        +{diff.toLocaleString()} <span className="text-muted-foreground">(was {previous.toLocaleString()})</span>
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1 text-xs text-rose-500">
      <TrendingDown className="size-3" />
      {diff.toLocaleString()} <span className="text-muted-foreground">(was {previous.toLocaleString()})</span>
    </span>
  );
}

export function SocialPlatformCard({
  platform,
  follower_count,
  subscriber_count,
  previous_follower_count,
  previous_subscriber_count,
  url,
  profile_url,
  last_updated,
  isClicked,
  result,
  isRefreshing,
  isDisabled,
  isAnimatingTimestamp,
  onRefresh,
}: SocialPlatformCardProps) {
  const displayUrl = profile_url || url;

  return (
    <Card size="sm" className="group">
      <CardHeader>
        <CardTitle className="truncate">
          {displayUrl ? (
            <a
              href={displayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {platform}
            </a>
          ) : (
            platform
          )}
        </CardTitle>
        <CardAction className={cn(
          "transition-opacity duration-200",
          !isRefreshing && !result ? "opacity-0 group-hover:opacity-100" : "opacity-100",
        )}>
          <SocialsRefreshStatus
            platform={platform}
            result={result}
            isRefreshing={isRefreshing}
            isClicked={isClicked}
            isDisabled={isDisabled}
            onRefresh={onRefresh}
          />
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-1.5 overflow-hidden">
        <div className="flex items-baseline gap-2 min-w-0">
          <span className="font-mono tabular-nums text-2xl truncate">
            {follower_count.toLocaleString()}
          </span>
          <span className="font-mono text-xs text-muted-foreground shrink-0">
            followers
          </span>
        </div>
        <TrendIndicator current={follower_count} previous={previous_follower_count} />
        {subscriber_count !== undefined && subscriber_count > 0 && (
          <>
            <span className="font-mono tabular-nums text-xs text-muted-foreground truncate">
              {subscriber_count.toLocaleString()} subscribers
            </span>
            <TrendIndicator current={subscriber_count} previous={previous_subscriber_count} />
          </>
        )}
      </CardContent>
      <CardFooter className="flex-col items-start gap-1.5 overflow-hidden">
        {last_updated ? (
          <p
            className={cn(
              "text-xs text-muted-foreground",
              isAnimatingTimestamp && "animate-green-fade",
            )}
          >
            Updated {formatTimestamp(last_updated)}
          </p>
        ) : (
          <p className="text-xs text-destructive">Not updated</p>
        )}
      </CardFooter>
    </Card>
  );
}
