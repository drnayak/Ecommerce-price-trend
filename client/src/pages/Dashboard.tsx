import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import InteractiveTrendsChart from '@/components/InteractiveTrendsChart';
import PriceHeatmap from '@/components/PriceHeatmap';
import OrdersPanel from '@/components/OrdersPanel';
import UpdatesPanel from '@/components/UpdatesPanel';
import FavoritesPanel from '@/components/FavoritesPanel';
import PriceTrendsSidebar from '@/components/PriceTrendsSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Bell, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <InteractiveTrendsChart />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PriceHeatmap />
                
                <Card>
                  <CardHeader>
                    <CardTitle>News</CardTitle>
                    <p className="text-xs text-muted-foreground">18 posts in the last 30 days</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-3">
                      <img src="https://via.placeholder.com/40" alt="News" className="w-10 h-10 rounded" />
                      <div>
                        <h4 className="font-semibold text-sm">News for African Mango Extract</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          In recent months, we have seen an interesting development...
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <img src="https://via.placeholder.com/40" alt="News" className="w-10 h-10 rounded" />
                      <div>
                        <h4 className="font-semibold text-sm">Amino Acid shortage</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Many of our suppliers are currently reporting tight...
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full" data-testid="button-show-more-news">
                      Show More
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <FavoritesPanel />
            </div>

            <div className="space-y-6">
              <OrdersPanel />
              <UpdatesPanel />
              <div className="sticky top-6">
                <PriceTrendsSidebar />
              </div>
            </div>
          </div>
        );
      
      case 'orders':
        return (
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Orders Management</h2>
            <OrdersPanel />
            <div className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Order History</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">View and manage all your orders in one place.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      
      case 'markets':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Market Analytics</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <InteractiveTrendsChart />
              <PriceHeatmap />
            </div>
            <PriceTrendsSidebar />
          </div>
        );
      
      case 'settings':
        return (
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold mb-6">Settings</h2>
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Email Notifications</label>
                  <p className="text-xs text-muted-foreground mt-1">Receive price alerts and updates</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Data Refresh Rate</label>
                  <p className="text-xs text-muted-foreground mt-1">How often to update price data</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Default Currency</label>
                  <p className="text-xs text-muted-foreground mt-1">Select your preferred currency</p>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="border-b border-border bg-sidebar px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold">GREENJEEVA</h1>
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for everything..."
                  className="pl-10 bg-background"
                  data-testid="input-global-search"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" data-testid="button-notifications">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-profile">
                <User className="w-5 h-5" />
              </Button>
              <Button data-testid="button-orders">Orders</Button>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto">
          <div className="p-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
