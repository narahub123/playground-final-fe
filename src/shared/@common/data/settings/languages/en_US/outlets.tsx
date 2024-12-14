import { HyperLink } from "@shared/@common/ui/components";

const outlets = {
  TopicsOutlet: {
    description1:
      "Topics you follow are used to personalize posts, events, and ads, and publicly display which topics you follow on your profile.",
    heading: "Recommended Topics",
    expl: "See popular posts related to this topic directly on your home timeline.",
    hyperlink: "More Topics",
    description2: (
      <>
        Topics you follow will appear here. To see all topics recommended by PG,
        check <HyperLink text="Your PG Data" path="/settings/your_data" />. You
        can also learn more about following topics.
      </>
    ),
  },
};

export default outlets;
