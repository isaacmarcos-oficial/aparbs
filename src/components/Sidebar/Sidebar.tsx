import { LinkIcons } from "../LinkIcons";
import Image from "next/image";
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTrigger,
	DrawerFooter,
	DrawerClose,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Sidebar() {
	return (
		<Drawer direction="left">
			<DrawerTrigger asChild>
				<Menu size={25} className="text-terciary cursor-pointer" />
			</DrawerTrigger>
			<DrawerContent className="h-screen w-[450px] bg-primary border-r-4 border-r-[#850000] text-terciary ">
				<div className="flex w-full justify-end pr-4 ">
					<DrawerClose className="_hover:text-secundary">
						<X className="hover:text-secundary transition-colors"  size={20} />
					</DrawerClose>
				</div>

				<div className="flex flex-col justify-between items-center px-16">
					<DrawerHeader className="w-full items-center justify-center gap-8">
						<div className="flex flex-col w-full items-center justify-center">
							<Image
								width={150}
								height={100}
								src="/Aparbs Dark 3.svg"
								alt="APARBS Soluções Automotivas"
							/>
						</div>
						<DrawerDescription className="flex w-full text-sm uppercase text-center tracking-[0.1187rem] left-5 italic">
							O Centro Automotivo que <br /> seu carro se sente seguro
						</DrawerDescription>
					</DrawerHeader>

					<div className="flex flex-col w-full items-center justify-center gap-3 my-10">
						<p className="flex items-center justify-center w-full font-bold text-2xl tracking-[1.6px]">
							Fale Conosco
						</p>

						<LinkIcons theme="bgRed" />
					</div>

					<div className="mt-10 w-full">
						<div className="items-center justify-center bg-terciary py-4 text-secundary rounded-ss-[48px] rounded-br-[48px]">
							<p className="w-full font-bold text-lg text-center tracking-[1.6px]">
								Venha tomar <br /> um café conosco!
							</p>
						</div>
						<Link className="100%" href="/blog">
							<Button className="w-full h-[40px] mt-7 bg-terciary text-secundary">
								Conheça nosso blog
							</Button>
						</Link>

						<DrawerFooter className="flex-grow mt-auto w-full text-left px-0">
							<h3 className="font-bold tracking-[1.6px]">Porteirinha/MG</h3>
							<p className="font-300 tracking-[1.6px] text-sm">
								Avenida Dalton Cunha, 201 <br />
								Bairro Eldorado <br />
							</p>

							<h3 className="font-bold tracking-[1.6px] mt-6">
								Riacho dos Machados/MG
							</h3>
							<p className="font-300 tracking-[1.6px] text-sm">
								Avenida Salviana Alves da Cruz, 70 <br />
								Bairro Lourdes <br />
							</p>
						</DrawerFooter>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
