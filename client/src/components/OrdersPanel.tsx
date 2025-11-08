import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, ChevronDown, ChevronRight } from 'lucide-react';

interface Order {
  id: string;
  product: string;
  status: 'pending' | 'shipped' | 'delivered';
  week: string;
  quantity: string;
  details: string;
}

export default function OrdersPanel() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedOrders, setExpandedOrders] = useState<Set<string>>(new Set());

  const orders: Order[] = [
    { id: 'RB-1944', product: 'African Mango Extract', status: 'pending', week: 'Week 53', quantity: '1500kg', details: 'Delivery delayed to CW 2 2023' },
    { id: 'RB-1943', product: 'Apocynum Venetum', status: 'shipped', week: 'Week 53', quantity: '500kg', details: 'In process of being delivered' },
    { id: 'RB-1937', product: 'Ginkgo Biloba', status: 'delivered', week: 'Week 53', quantity: '1075g', details: 'Order has arrived' }
  ];

  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleExpand = (orderId: string) => {
    setExpandedOrders(prev => {
      const newSet = new Set(prev);
      if (newSet.has(orderId)) {
        newSet.delete(orderId);
      } else {
        newSet.add(orderId);
      }
      return newSet;
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-600';
      case 'shipped': return 'bg-blue-600';
      case 'delivered': return 'bg-green-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Current Orders</span>
          <span className="text-sm font-normal text-muted-foreground">
            {filteredOrders.length} active
          </span>
        </CardTitle>
        <div className="relative mt-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search orders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
            data-testid="input-search-orders"
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {filteredOrders.map((order) => {
          const isExpanded = expandedOrders.has(order.id);
          return (
            <div 
              key={order.id} 
              className="border border-border rounded-lg p-3 hover-elevate"
              data-testid={`order-${order.id.toLowerCase()}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">{order.id}</span>
                    <Badge className={`${getStatusColor(order.status)} text-white`}>
                      {order.status}
                    </Badge>
                  </div>
                  <div className="text-sm">{order.product}</div>
                  <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                    <span>{order.week}</span>
                    <span>{order.quantity}</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-6 h-6"
                  onClick={() => toggleExpand(order.id)}
                  data-testid={`button-expand-${order.id.toLowerCase()}`}
                >
                  {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </Button>
              </div>
              {isExpanded && (
                <div className="mt-3 pt-3 border-t border-border text-sm text-muted-foreground">
                  {order.details}
                </div>
              )}
            </div>
          );
        })}
        <Button variant="outline" className="w-full" data-testid="button-show-more-orders">
          Show more
        </Button>
      </CardContent>
    </Card>
  );
}
