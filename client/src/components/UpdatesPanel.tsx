import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Update {
  id: string;
  text: string;
  date?: string;
}

export default function UpdatesPanel() {
  const updates: Update[] = [
    { id: '1', text: 'Order RB-1938: Delivery delayed to CW 2 2023' },
    { id: '2', text: 'Order RB-1938: Delivery has arrived at customs and will be processed shortly' },
    { id: '3', text: 'Order RB-1938: Delivery is in the process of being delivered' },
    { id: '4', text: 'Order RB-1939: Order has been shipped' },
    { id: '5', text: 'Order RB-1942: Order was shipped' },
    { id: '6', text: 'Order RB-1942: Delivery has arrived at customs and will be processed shortly' },
    { id: '7', text: 'Order RB-1942: Order has been shipped' },
    { id: '8', text: 'Order RB-1942: Order was placed' },
    { id: '9', text: 'Order RB-1942: Delivery now on CW 4 2023' }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Updates</span>
          <span className="text-sm font-normal text-muted-foreground">5 Orders have new updates</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {updates.map((update, index) => (
          <div 
            key={update.id} 
            className="text-sm py-2 border-b border-border last:border-0"
            data-testid={`update-${index}`}
          >
            {update.text}
          </div>
        ))}
        <Button variant="outline" className="w-full mt-4" data-testid="button-show-more-updates">
          Show more
        </Button>
      </CardContent>
    </Card>
  );
}
