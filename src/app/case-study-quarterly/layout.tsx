import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MCSDD Quarterly Pro | Case Study",
  description: "High-fidelity audit resilience and compliance automation for Missouri DMH/MMAC reporting standards.",
  openGraph: {
    title: "MCSDD Quarterly Pro | Case Study",
    description: "High-fidelity audit resilience and compliance automation.",
    images: ["/assets/MCSDDQUARTERLYPRO.png"],
  },
};

export default function QuarterlyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}