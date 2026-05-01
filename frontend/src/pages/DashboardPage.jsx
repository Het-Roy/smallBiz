import React from 'react';
import DashboardMain from '../components/dashboard/DashboardMain';
import QuickActionPanel from '../components/dashboard/QuickActionPanel';
import DashboardLayout from '../layouts/DashboardLayout';
import SEO from '../components/common/SEO';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <SEO title="Dashboard" description="View your business overview, recent activity, and quick actions." />
      <div className="flex flex-col xl:flex-row flex-1 relative">
        <DashboardMain />
        <QuickActionPanel />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
