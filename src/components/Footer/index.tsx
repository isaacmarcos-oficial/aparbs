import Link from "next/link";
import Image from "next/image";
import { LinkIcons } from "../LinkIcons";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<div className="flex flex-col w-full items-center justify-center bg-secundary text-terciary mt-12 pt-12 ">
			<div className="flex w-full max-w-[1280px] px-4 mb-10 items-center justify-center">
				<div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
					{/* Serviços */}
					<div className="text-sm leading-7">
						<h4 className="text-2xl mb-1 text-primary font-bold">
							Nossos Serviços
						</h4>
						<p>Mecânica em Geral</p>
						<p>Elétrica Automotiva</p>
						<p>Troca de Óleo</p>
						<p>Auto Socorro</p>
						<p>Ar Condicionado</p>
						<p>Injeção Eletrônica</p>
						<p>Limpeza de Bico</p>
						<p>Peças e Baterias</p>
					</div>

					{/* APARBS Porteirinha */}
					<div className="text-sm leading-7">
						<h4 className="text-2xl mb-1 text-primary font-bold">
							Porteirinha/MG
						</h4>
						<p className="font-light text-zinc-300">07.263.234/0001-70</p>
						<p>
							Av. Dalton Cunha, 201
							<br />
							Bairro Eldorado
							<br />
							Porteirinha/MG
							<br />
							CEP: 39520-000
						</p>
					</div>

					{/* APARBS Riacho dos Machados */}
					<div className="text-sm leading-7">
						<h4 className="text-2xl mb-1 text-primary font-bold">
							Riacho dos Machados/MG
						</h4>
						<p className="font-light text-zinc-300">37.555.350/0001-24</p>
						<p>
							Av. Salviana Alves da Cruz, 70
							<br />
							Bairro Lourdes
							<br />
							Riacho dos Machados/MG
							<br />
							CEP: 39529-000
						</p>
					</div>

					{/* APARBS Transportes */}
					<div className="text-sm leading-7">
						<h4 className="text-2xl mb-1 text-primary font-bold">
							APARBS Transportes
						</h4>
						<p className="font-light text-zinc-300">51.494.204/0001-67</p>
						<p>
							Av. Gabriel Mendes Santos, 330
							<br />
							Paciência
							<br />
							Porteirinha/MG
							<br />
							CEP: 39520-000
						</p>
					</div>

					{/* APARBS Soluções Automotivas */}
					<div className="flex flex-col col-span-2 lg:col-span-1 justify-center items-center gap-4">
						<h4 className="text-2xl mb-1 text-primary font-bold">
							APARBS Soluções Automotivas
						</h4>

						<div className="w-full items-center justify-center flex flex-col lg:flex-col md:flex-row gap-4">
							<Image
								width={150}
								height={80}
								src="/Aparbs Dark 3.svg"
								alt="APARBS Soluções Automotivas"
							/>

							<div className="flex flex-col gap-4">
								<p className="text-sm max-w-60 text-center md:text-left">
									Há mais de 25 anos no mercado atendendo com qualidade,
									garantindo eficiência em serviços automotivos.
								</p>

								<LinkIcons theme="bgBlack" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex w-full py-4 leading-10 border-t  border-zinc-600 items-center justify-center">
				<div className="flex w-full max-w-[1280px] text-sm items-center justify-between flex-col md:flex-row px-4 gap-4">
					<p className="font-light">
						Copyright © {currentYear} {" "}
						<Link href="/" className="font-semibold hover:text-primary transition">
							APARBS Soluções Automotivas
						</Link>
					</p>

					<Link href="https://www.isaacmarcos.com.br" target="_blank" rel="noreferrer">
						<div className="flex justify-center items-center h-8 w-[270px] rounded border border-zinc-800 hover:border-yellow-500 shadow bg-zinc-900 hover:bg-zinc-800 transition">
							<p>Construído por Isaac</p>
							<p className="font-semibold">Marcos</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
