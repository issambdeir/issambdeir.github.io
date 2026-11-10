// Add one object per project. Copy the shape below — nothing else needs to change.
// image: path to a screenshot (e.g. "images/my-project.png"), or leave as "" for a placeholder.
// liveUrl / codeUrl: leave as "" to hide that link on the card.

const projects = [
  {
    name: "Pill Defect Detection",
    description: "A deep learning project that fine-tunes a ResNet-18 to classify pill images as good or defective, picks a decision threshold based on the real-world cost of each kind of mistake, and uses Grad-CAM to visualize where the model sees the defect.",
    tags: ["Python", "PyTorch", "Deep Learning"],
    image: "images/pill-defect-detection.svg",
    liveUrl: "",
    codeUrl: "https://github.com/issambdeir/pill-defect-detection",
  },
  {
    name: "ATP Tennis Scheduler",
    description: "A Python simulation that generates realistic ATP tournament draws (Grand Slam, ATP 1000/500/250) using real seeding rules, then schedules matches across courts and days based on player rankings, weather, and time-of-day preferences.",
    tags: ["Python"],
    image: "images/atp-tennis-scheduler.svg",
    liveUrl: "",
    codeUrl: "https://github.com/issambdeir/atp-tennis-scheduler",
  },
  {
    name: "Vela",
    description: "A React Native (Expo) health app that lets people log their symptoms over time, view them on a timeline, and generate a clean PDF report to share with a doctor. Built with Supabase for auth/data and RevenueCat for subscriptions.",
    tags: ["React Native", "Expo", "TypeScript", "Supabase"],
    image: "images/vela.svg",
    liveUrl: "",
    codeUrl: "https://github.com/issambdeir/vela",
  },
];
