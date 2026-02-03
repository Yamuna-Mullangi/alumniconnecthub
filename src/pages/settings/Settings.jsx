import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Settings = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">Settings</h1>
                <p className="text-gray-500">Manage your account settings and preferences.</p>
            </div>

            <Tabs defaultValue="account" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                    <TabsTrigger value="privacy">Privacy</TabsTrigger>
                </TabsList>

                <TabsContent value="account">
                    <Card>
                        <CardHeader>
                            <CardTitle>Account Information</CardTitle>
                            <CardDescription>
                                Update your account details and profile information.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First name</Label>
                                    <Input id="firstName" defaultValue="John" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last name</Label>
                                    <Input id="lastName" defaultValue="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" defaultValue="john.doe@example.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="bio">Bio</Label>
                                <Input id="bio" defaultValue="Software Engineer at TechCorp" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="notifications">
                    <Card>
                        <CardHeader>
                            <CardTitle>Notification Preferences</CardTitle>
                            <CardDescription>
                                Choose what notifications you want to receive.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between space-x-2">
                                <Label htmlFor="email-notifs" className="flex flex-col space-y-1">
                                    <span>Email Notifications</span>
                                    <span className="font-normal leading-snug text-muted-foreground">
                                        Receive emails about new events and job postings.
                                    </span>
                                </Label>
                                <Badge variant="outline">Enabled</Badge>
                            </div>
                            <div className="flex items-center justify-between space-x-2">
                                <Label htmlFor="push-notifs" className="flex flex-col space-y-1">
                                    <span>Push Notifications</span>
                                    <span className="font-normal leading-snug text-muted-foreground">
                                        Receive push notifications for messages.
                                    </span>
                                </Label>
                                <Badge variant="secondary">Disabled</Badge>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline">Manage Preferences</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="privacy">
                    <Card>
                        <CardHeader>
                            <CardTitle>Privacy Settings</CardTitle>
                            <CardDescription>
                                Control who can see your profile and information.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-1">
                                <Label>Profile Visibility</Label>
                                <div className="p-3 border rounded-md text-sm text-gray-500 bg-gray-50">
                                    Your profile is currently visible to <strong>All Alumni</strong>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Settings;
