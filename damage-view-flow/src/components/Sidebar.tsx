
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutGrid,
  FileText,
  Clock,
  LogOut,
  Settings as SettingsIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SettingsDialog } from "@/components/SettingDialog"; // Make sure path is correct

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutGrid, label: "Overview", path: "/overview" },
    { icon: FileText, label: "Claims", path: "/claims" },
    { icon: FileText, label: "AI Report", path: "/" },
    { icon: Clock, label: "History", path: "/history" },
    // ❌ REMOVE SETTINGS FROM HERE
    // { icon: LogOut, label: "Logout", path: "/logout" },
  ];

  return (
    <div className="w-60 bg-white border-r border-gray-100 h-full fixed left-0 flex flex-col justify-between">
      <div className="p-5">
        {/* Logo */}
        <div className="flex items-center mb-8">
          <span className="text-lg font-bold">TPL</span>
          <span className="text-lg font-bold text-orange-500 ml-1">Claims</span>
        </div>

        {/* Top Menu */}
        <div className="space-y-1">
          {menuItems.map((item) => {
            const isAIReportSection =
              item.path === "/" &&
              ["/", "/review-damage", "/generate-report"].includes(location.pathname);

            const isActive = location.pathname === item.path || isAIReportSection;

            return (
              <Link
                key={item.label}
                to={item.path}
                className={cn(
                  "flex items-center py-3 px-4 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors",
                  isActive && (item.path === "/" ? "bg-orange-50 text-orange-500" : "bg-gray-100 text-black")
                )}
              >
                <item.icon
                  className={cn("mr-3", isActive && item.path === "/" && "text-orange-500")}
                  size={20}
                />
                <span className={cn(isActive && item.path === "/" && "text-orange-500")}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom Icons: Settings + Logout */}
      <div className="p-5 space-y-1">
        {/* SettingsDialog Trigger */}
        <SettingsDialog />

        {/* Logout */}
        <Link
          to="/logout"
          className="flex items-center py-3 px-4 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
        >
          <LogOut className="mr-3" size={20} />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
