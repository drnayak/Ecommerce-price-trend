import { LayoutDashboard, ShoppingCart, TrendingUp, Settings, LogOut, Menu as MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'markets', label: 'Markets', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-16 bg-sidebar border-r border-sidebar-border flex flex-col items-center py-4 space-y-4">
      <div className="mb-4">
        <Button variant="ghost" size="icon" className="w-12 h-12">
          <MenuIcon className="w-6 h-6" />
        </Button>
      </div>
      
      {menuItems.map((item) => {
        const Icon = item.icon;
        return (
          <Button
            key={item.id}
            variant={activeTab === item.id ? 'default' : 'ghost'}
            size="icon"
            className={cn(
              'w-12 h-12 relative group',
              activeTab === item.id && 'bg-primary'
            )}
            onClick={() => onTabChange(item.id)}
            data-testid={`button-nav-${item.id}`}
          >
            <Icon className="w-6 h-6" />
            <div className="absolute left-full ml-2 px-2 py-1 bg-card border border-border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {item.label}
            </div>
          </Button>
        );
      })}

      <div className="flex-1" />

      <Button variant="ghost" size="icon" className="w-12 h-12">
        <LogOut className="w-5 h-5" />
      </Button>
    </div>
  );
}
