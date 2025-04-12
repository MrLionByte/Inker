import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/user/common/AppSidebar";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/user/common/Navbar";
import BottomNavigation from "@/components/user/common/BottomNavbar";

export default function AppLayout() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset >
          <Navbar />
          <main className="w-full flex flex-col h-full">
            <Outlet />
          </main>
        </SidebarInset>
        <BottomNavigation />
      </SidebarProvider>
    </>
  );
}
