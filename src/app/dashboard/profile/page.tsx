"use client";
import ProfilePic from "@/components/Profile/ProfilePic";
import PersonalInfo from "@/components/Profile/PersonalInfo";
import SecuritySetting from "@/components/Profile/SecuritySetting";
import Notification from "@/components/Profile/Notification";
import "../../../styles/toggle.css";

const ProfilePage = () => {
  return (
    <div className="min-h-full w-full overflow-y-auto">
      <div className="mx-auto w-full max-w-6xl  pb-10">
        {/* HEADER */}
        <div className="mb-6 pt-2">
          <h1 className="text-2xl font-bold text-white">Profile Settings</h1>
          <p className="text-zinc-400 text-sm">
            Manage your identity and account security
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-12 gap-5 items-stretch">
          {/* 1. IDENTITY SUMMARY */}
          <div className="col-span-12 lg:col-span-4 flex">
            <ProfilePic />
          </div>

          {/* 2. PERSONAL INFO */}
          <div className="col-span-12 lg:col-span-8 flex">
            <PersonalInfo />
          </div>

          {/* 3. SECURITY SETTINGS */}
          <div className="col-span-12 lg:col-span-7 flex">
            <SecuritySetting />
          </div>

          {/* 4. NOTIFICATIONS */}
          <div className="col-span-12 lg:col-span-5 flex">
           <Notification/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
