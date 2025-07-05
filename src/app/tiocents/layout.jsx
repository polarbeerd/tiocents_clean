import BottomNav from "@/components/tiocents/BottomNav";

export default function TiocentsLayout({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {children}
      <BottomNav />
    </div>
  );
}
