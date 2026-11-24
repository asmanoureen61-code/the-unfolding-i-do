import { createFileRoute } from "@tanstack/react-router";
import { InvitationExperience } from "@/components/InvitationExperience";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Ali & Misbah Noureen | Wedding Invitation" },
      {
        name: "description",
        content:
          "Open the invitation for Muhammad Ali and Misbah Noureen's Baraat Ceremony on 25 December 2026 in Rawalpindi, Pakistan.",
      },
      { property: "og:title", content: "Muhammad Ali & Misbah Noureen | Wedding Invitation" },
      {
        property: "og:description",
        content:
          "An invitation to the Baraat Ceremony of Muhammad Ali and Misbah Noureen, 25 December 2026, Rawalpindi, Pakistan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <InvitationExperience />;
}
