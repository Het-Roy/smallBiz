import React from 'react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardMain from '../components/dashboard/DashboardMain';
import QuickActionPanel from '../components/dashboard/QuickActionPanel';

const DashboardPage = () => {
  return (
    <div className="flex w-full min-h-screen bg-[#F9FAFB]">
      <DashboardSidebar />
      <DashboardMain />
      <QuickActionPanel />
    </div>
  );
};

export default DashboardPage;
