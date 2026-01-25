import { Bell } from "lucide-react";

const Notification = () => {
  return (
    <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 backdrop-blur-md w-full h-full">
      <div className="flex items-center gap-2 mb-6">
        <Bell className="w-5 h-5 text-purple-500" />
        <h3 className="text-lg font-semibold text-white">
          Notification Preferences
        </h3>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-800/20 transition-colors">
          <div>
            <p className="text-sm font-medium text-zinc-200">
              Expiry Notifications
            </p>
            <p className="text-xs text-zinc-500">
              Notify me 3 days before a subscription expires.
            </p>
          </div>
          <label className="switch rounded-lg ">
            <input defaultChecked type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>

        <div className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-800/20 transition-colors">
          <div>
            <p className="text-sm font-medium text-zinc-200">
              Tool Announcements
            </p>
            <p className="text-xs text-zinc-500">
              Get emails about new premium tools added to the site.
            </p>
          </div>
          <label className="switch rounded-lg ">
            <input defaultChecked type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Notification;
