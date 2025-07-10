import Image from 'next/image';
import { HomeIcon, CurrencyDollarIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TeamMember {
  id: number
  name: string
  position: string
  image: string
}

export default function Page() {
      // Team members state
      const teamMembers: TeamMember[] = [
        { id: 1, name: "Tom Cruise", position: "Founder & Chairman", image: "/images/tomc.png" },
        { id: 2, name: "Emma Watson", position: "Managing Director", image: "/images/emma.png" },
        { id: 3, name: "Will Smith", position: "Product Designer", image: "/images/wills.png" },
      ]

    return (
        <div>
            <div className='grid md:grid-cols-2 items-center my-10'>
                <div className='px-2 w-full'>
                    <h1 className='text-6xl font-bold py-10 text-'>Our Story</h1>
                    <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsum totam perferendis et sapiente earum alias voluptate, aliquam, magnam temporibus architecto, optio maiores sunt. Quas quisquam ipsum et officiis quibusdam?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptates? Quidem, nobis. Esse quasi culpa porro libero ea. Est odio cupiditate, voluptate aliquid voluptatibus culpa iure itaque quis? Amet, nostrum.</p>
                </div>
                <Image
                    src={'/images/About Image.png'}
                    alt='About image'
                    width={705}
                    height={609}
                    className='hidden md:block w-full'
                />
            </div>
            <div className='flex justify-around flex-wrap'>
                <div className='w-1/6 min-w-[250px] py-10 px-10 my-3 border rounded-lg shadow-lg flex flex-col items-center hover:bg-tertiary hover:text-white'>
                        <HomeIcon
                            className='h-[40] w-[40] '
                        />
                    <div className='text-2xl font-bold mt-4 mb-2'>
                        10.5K
                    </div>
                    <p>active sellers on our site</p>
                </div>
                
                <div className='w-1/6 min-w-[250px] py-10 px-10 my-3 border rounded-lg shadow-lg flex flex-col items-center hover:bg-tertiary hover:text-white'>
                        <CurrencyDollarIcon
                            className='h-[40] w-[40] '
                        />
                    <div className='text-2xl font-bold mt-4 mb-2'>
                        45K
                    </div>
                    <p>monthly sales</p>
                </div>

                <div className='w-1/6 min-w-[250px] py-10 px-10 my-3 border rounded-lg shadow-lg flex flex-col items-center hover:bg-tertiary hover:text-white'>
                        <ShoppingBagIcon
                            className='h-[40] w-[40] '
                        />
                    <div className='text-2xl font-bold mt-4 mb-2'>
                        20K
                    </div>
                    <p>active customers on our site</p>
                </div>

                <div className='w-1/6 min-w-[250px] py-10 px-10 my-3 border rounded-lg shadow-lg flex flex-col items-center hover:bg-tertiary hover:text-white'>
                        <CurrencyDollarIcon
                            className='h-[40] w-[40] '
                        />
                    <div className='text-2xl font-bold mt-4 mb-2'>
                        10.5K
                    </div>
                    <p>annual gross sales on our site</p>
                </div>
            </div>
            {/* Team Section */}
        <div className="flex justify-around flex-wrap space-x-2 my-10">
          {teamMembers.map((member) => (
            <Card key={member.id} className="text-center overflow-hidden w-1/4 max-w-[350px]">
              <CardContent className="p-0">
                <div className="relative h-80 bg-gray-100">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-fit" />
                </div>

                <div className="p-6 space-y-4">
                    <>
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-gray-600">{member.position}</p>
                    </>
                  

                  <div className="flex justify-center space-x-4">
                    <Button variant="ghost" size="sm" className="p-2">
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2">
                      <Instagram className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
    )
}