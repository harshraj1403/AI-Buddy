import { checkSubscription } from "@/lib/subscription";
import { SubscriptIcon } from "lucide-react";
import { SubscriptionButton } from "@/components/subscription-button";

const SettingsPage=async()=>{
    const isPro=await checkSubscription();
    return (
        <div className="h-full p-4 space-y-2">
            <h3 className="text-lg font-medium">Helo setting</h3>
            <div className="text-muted-foreground text-sm">
                {isPro? "You are currently on a Pro Plan.":"You are currently on a free plan."}

            </div>
            <SubscriptionButton isPro= {isPro}/>
        </div>
    )
}
export default SettingsPage ;