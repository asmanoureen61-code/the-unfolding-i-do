import { useCallback, useEffect, useRef, useState } from "react";
import { Repeat2, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import invitationFront from "@/assets/invitation-front.png.asset.json";
import invitationInner from "@/assets/invitation-inner.png.asset.json";

type InvitationStage = "loading" | "closed" | "unlocking" | "opening" | "revealing" | "opened";

const invitationImages = [invitationFront.url, invitationInner.url];

export function InvitationExperience() {
  const [stage, setStage] = useState<InvitationStage>("loading");
  const [shareMessage, setShareMessage] = useState("");
  const stageRef = useRef<InvitationStage>("loading");
  const timers = useRef<number[]>([]);

  const moveTo = useCallback((next: InvitationStage) => {
    stageRef.current = next;
    setStage(next);
  }, []);

  const beginOpening = useCallback(() => {
    if (stageRef.current !== "closed") return;

    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
    moveTo("unlocking");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      timers.current.push(window.setTimeout(() => moveTo("opened"), 80));
      return;
    }

    const schedule = (next: InvitationStage, delay: number) => {
      timers.current.push(window.setTimeout(() => moveTo(next), delay));
    };

    schedule("opening", 650);
    schedule("revealing", 1150);
    schedule("opened", 2900);
  }, [moveTo]);

  useEffect(() => {
    let active = true;
    const preload = (src: string) =>
      new Promise<void>((resolve) => {
        const image = new window.Image();
        image.onload = () => resolve();
        image.onerror = () => resolve();
        image.src = src;
        if (image.complete) resolve();
      });

    Promise.all(invitationImages.map(preload)).then(() => {
      if (active) moveTo("closed");
    });

    return () => {
      active = false;
      timers.current.forEach((timer) => window.clearTimeout(timer));
    };
  }, [moveTo]);

  const replay = () => {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
    moveTo("closed");
    window.requestAnimationFrame(beginOpening);
  };

  const shareInvitation = async () => {
    const shareData = {
      title: "Muhammad Ali & Misbah Noureen — Wedding Invitation",
      text: "You are invited to the Baraat Ceremony on 25 December 2026 in Rawalpindi, Pakistan.",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        setShareMessage("Invitation shared.");
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(shareData.url);
      setShareMessage("Invitation link copied.");
    } catch {
      const fallback = document.createElement("textarea");
      fallback.value = shareData.url;
      fallback.setAttribute("readonly", "");
      fallback.className = "copy-fallback";
      document.body.append(fallback);
      fallback.select();
      const copied = document.execCommand("copy");
      fallback.remove();
      setShareMessage(copied ? "Invitation link copied." : "Unable to copy the invitation link.");
    }
  };

  const isReady = stage !== "loading";
  const isClosed = stage === "closed";

  return (
    <main className="invitation-experience">
      <div className="invitation-composition">
        <Button
          type="button"
          variant="ghost"
          aria-label={
            isClosed
              ? "Open the wedding invitation for Muhammad Ali and Misbah Noureen"
              : "Wedding invitation for Muhammad Ali and Misbah Noureen"
          }
          aria-describedby="invitation-details"
          aria-disabled={!isClosed}
          data-state={stage}
          data-ready={isReady}
          className="invitation-trigger"
          onClick={beginOpening}
        >
          <span className="invitation-artwork" aria-hidden="true">
            <img className="opened-artwork" src={invitationInner.url} alt="" draggable={false} />
            <img
              className="closed-artwork"
              src={invitationFront.url}
              alt=""
              draggable={false}
            />
            <span className="seal-hotspot" />
            <span className="gatefold-panels" aria-hidden="true">
              <span className="cover-panel cover-panel--left">
                <img className="panel-source" src={invitationFront.url} alt="" draggable={false} />
              </span>
              <span className="cover-panel cover-panel--right">
                <img
                  className="panel-source panel-source--right"
                  src={invitationFront.url}
                  alt=""
                  draggable={false}
                />
              </span>
            </span>
            <span className="release-ribbon" />
            <span className="release-seal" />
          </span>
        </Button>

        {stage !== "opened" ? (
          <p className="opening-cue" aria-hidden="true">
            TAP TO OPEN
          </p>
        ) : (
          <div className="invitation-controls">
            <Button type="button" variant="ghost" size="sm" className="invitation-control" onClick={replay}>
              <Repeat2 aria-hidden="true" />
              <span>Replay Animation</span>
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="invitation-control"
              onClick={shareInvitation}
            >
              <Share2 aria-hidden="true" />
              <span>Share Invitation</span>
            </Button>
          </div>
        )}

        <p className="sr-only" id="invitation-details">
          Baraat Ceremony for Muhammad Ali and Misbah Noureen, Friday, 25 December 2026, at Al
          Hameed Marriage Hall in Rawalpindi, Pakistan.
        </p>
        <p className="sr-only" role="status" aria-live="polite">
          {shareMessage}
        </p>
      </div>
    </main>
  );
}