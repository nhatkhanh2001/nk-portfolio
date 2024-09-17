import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
    return (
        <main className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8 text-gradient">Contact Me</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input type="firstname" placeholder="Firstname" />
                            <Input type="lastname" placeholder="Lastname" />
                            <Input type="email" placeholder="Your Email" />
                            <Input type="phone" placeholder="Phone number" />
                        </div>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select a service</SelectLabel>
                                    <SelectItem value="est">Web Development</SelectItem>
                                    <SelectItem value="cst">Frontend Development</SelectItem>
                                    <SelectItem value="mst">Backend Development</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {/* <Textarea placeholder="Your Message" className="focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300" /> */}
                        <Button className="hover:bg-blue-500 hover:text-white">Send Message</Button>
                    </form>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                    <ul className="space-y-2">
                        <li>Phone: +1 234 567 890</li>
                        <li>Email: nhat.khanh@example.com</li>
                        <li>Address: 123 Web Dev Street, Coding City, 12345</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}