"use client";

import { useRef, useState, useEffect } from "react";

export default function Home() {
	const lyrics = [
		{ text: "Yeah", start: 28, end: 29 },
		{ text: "Uchiha Madara", start: 29, end: 30, color: "yellow" },
		{ text: "(Uchiha Madara)", start: 30, end: 31, color: "yellow" },
		{ text: "Aham, Player Tauz, mais uma vez!", start: 32, end: 34 },
		{ text: "Tamo junto!", start: 34, end: 35 },
		{ text: "An... Quarta guerra mundial", start: 39, end: 41 },
		{ text: "O meu retorno a vida", start: 41, end: 42 },
		{ text: "Eu sou a lenda que nasceu no clã Uchiha", start: 42, end: 44 },
		{ text: "Aliança Shinobi pra mim é como nada", start: 44, end: 46 },
		{ text: "Chegou quem eles temem...", start: 46, end: 48 },
		{ text: "Uchiha Madara", start: 48, end: 49, color: "yellow" },
		{ text: "Agora acaba... a morte os aguarda", start: 49, end: 51 },
		{ text: "Mesmo no deserto não há chance para Gaara", start: 51, end: 53 },
		{ text: "Ninguém escapa da força do meu chakra", start: 53, end: 55 },
		{ text: "Quem me venceria? QUEM?", start: 53, end: 57 },
		{ text: "(Então me fala)", start: 57, end: 58 },
		{ text: "Só existe um ninja que pode contra mim", start: 58, end: 60 },
		{ text: "Veja as estátuas no vale do fim (FIM)", start: 60, end: 62 },
		{ text: "E mesmo assim, hoje eu venceria SIM", start: 62, end: 64 },
		{ text: "Nem os 5 Kages puderam contra mim", start: 64, end: 67 },
		{ text: "Porque enfim... Sou o mestre do passado", start: 67, end: 69 },
		{ text: "Deixei o meu legado ao ninja mascarado", start: 69, end: 71 },
		{ text: "E agora renascido eu fui revelado", start: 71, end: 73 },
		{
			text: "UCHIHA MADARA o líder lendário",
			start: 73,
			end: 76,
			color: "yellow",
		},
		{ text: "Uma lenda se destaca... no campo de batalha", start: 77, end: 80 },
		{ text: "Mangekyou Sharingan que não acaba", start: 80, end: 82 },
		{
			text: "UCHIHA MADARA (UCHIHA MADARA)",
			start: 82,
			end: 85,
			color: "yellow",
		},
		{ text: "Uma lenda se destaca no campo de batalha", start: 85, end: 89 },
		{ text: "Mangekyou Sharingan que não acaba", start: 89, end: 91 },
		{
			text: "UCHIHA MADARA (UCHIHA MADARA)",
			start: 91,
			end: 93,
			color: "yellow",
		},
		{ text: "Cresci em meio a guerra muito tempo atrás", start: 93, end: 95 },
		{ text: "Após muitas batalhas um acordo de paz", start: 95, end: 98 },
		{ text: "Fundei com Hashirama: a vila de konoha", start: 98, end: 100 },
		{ text: "E dei o seu nome: aldeia da folha", start: 100, end: 102 },
		{ text: "Senti a ameaça que haveria um dia", start: 102, end: 105 },
		{ text: "Queriam reduzir o poder dos Uchihas", start: 105, end: 107 },
		{
			text: "Falei com o meu clã e uma guerra eu tentei",
			start: 107,
			end: 109,
		},
		{
			text: "Mas ninguém se importou... então abandonei",
			start: 109,
			end: 111,
		},
		{ text: "Onde existe luz, também haverá trevas", start: 111, end: 113 },
		{ text: "Na busca pela paz, sempre haverá guerra", start: 113, end: 116 },
		{ text: "Onde existe amor, também haverá ódio", start: 116, end: 118 },
		{ text: "Ensinei meus ideais para Uchiha Obito", start: 118, end: 120 },
		{ text: "Genjutsu na lua, vivendo de ilusão", start: 120, end: 123 },
		{ text: "O mundo ideal pela minha visão", start: 123, end: 125 },
		{ text: "Não pense você que é manipulação", start: 125, end: 127 },
		{
			text: "(UCHIHA MADARA) É MINHA CONVICÇÃO",
			start: 127,
			end: 130,
			color: "yellow",
		},
		{ text: "Uma lenda se destaca no campo de batalha", start: 130, end: 134 },
		{ text: "Mangekyou Sharingan que não acaba", start: 134, end: 137 },
		{
			text: "UCHIHA MADARA (UCHIHA MADARA!!!)",
			start: 137,
			end: 139,
			color: "yellow",
		},
		{ text: "Uma lenda se destaca no campo de batalha", start: 139, end: 143 },
		{ text: "Mangekyou Sharingan que não acaba", start: 143, end: 146 },
		{
			text: "UCHIHA MADARA (UCHIHA MADARA!!!)",
			start: 146,
			end: 148,
			color: "yellow",
		},
		{ text: "Com o meu poder o 9 caudas eu invoco", start: 156, end: 159 },
		{ text: "Com olhos Sharingan eu também controlo", start: 159, end: 161 },
		{ text: "Você não faz ideia de tudo que eu posso", start: 161, end: 163 },
		{ text: "Faço cair na Terra mais de um METEORO", start: 163, end: 166 },
		{ text: "Poder incomparável (se você não sabe)", start: 166, end: 168 },
		{ text: "De amigo a rival do primeiro Hokage", start: 168, end: 170 },
		{
			text: "Experiente na guerra vou cumprir minha vontade",
			start: 170,
			end: 172,
		},
		{
			text: "Despertei o Rinnegan, voltei para o combate",
			start: 172,
			end: 174,
		},
		{ text: "Só de ouvir meu nome todos sentem medo", start: 174, end: 176 },
		{ text: "Para as cinco nações eu virei um pesadelo", start: 177, end: 179 },
		{
			text: "Já perdi para o Hokage mas dessa vez eu vejo",
			start: 179,
			end: 181,
		},
		{
			text: "Que eu ficarei de pé (Hashirama de joelhos)",
			start: 181,
			end: 184,
		},
		{ text: "Uma lenda se destaca no campo de batalha", start: 193, end: 196 },
		{ text: "Mangekyou Sharingan que não acaba ", start: 196, end: 199 },
		{
			text: "UCHIHA MADARA (uchiha madara)",
			start: 199,
			end: 201,
			color: "yellow",
		},
		// 20 segundos
		{ text: "Parabéns!!", start: 204, end: 206, color: "yellow-p" },
		{ text: "Feliz aniversário <3", start: 207, end: 209, color: "yellow-p" },
		{
			text: "Aproveite seu dia! :P",
			start: 210,
			end: 212,
			color: "yellow-p",
		},
		{ text: "WOOOOOOOOOOWWWWW", start: 213, end: 215, color: "yellow-p" },

		{ text: "Beijocas", start: 220, end: 222, color: "yellow-p" },
	];
	const [finished, setFinished] = useState(false);
	const [currentLyric, setCurrentLyric] = useState<{
		text: string;
		color?: string;
	} | null>(null);

	const audioRef = useRef<HTMLAudioElement | null>(null);
	const [started, setStarted] = useState(false);

	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		const handleTimeUpdate = () => {
			const currentTime = audio.currentTime;

			const activeLyric = lyrics.find(
				(line) => currentTime >= line.start && currentTime <= line.end
			);

			setCurrentLyric(activeLyric || null);
		};

		audio.addEventListener("timeupdate", handleTimeUpdate);

		return () => {
			audio.removeEventListener("timeupdate", handleTimeUpdate);
		};
	}, [started]);

	const specialAudioRef = useRef<HTMLAudioElement | null>(null);
	const handleImageClick = async () => {
		if (specialAudioRef.current) {
			specialAudioRef.current.volume = 0.7;
			await specialAudioRef.current.play();
		}
	};

	const handleStart = async () => {
		if (audioRef.current) {
			try {
				audioRef.current.volume = 0.6;
				await audioRef.current.play();
				setStarted(true);
			} catch (error) {
				console.error("Erro ao tocar áudio:", error);
			}
		}
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<div className="min-h-screen bg-black flex items-center justify-center relative">
				{!started && (
					<button
						onClick={handleStart}
						className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition"
					>
						O que esse botão faz?
					</button>
				)}

				{currentLyric && (
					<p
						className={`bottom-24 text-2xl font-semibold text-center px-6 transition-opacity duration-500 ${
							currentLyric.color === "yellow"
								? "text-yellow-400 drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]"
								: currentLyric.color === "yellow-p"
								? "text-yellow-400 drop-shadow-[0_0_10px_rgba(255,255,0,0.8)] animate-[glowPulse_1.5s_infinite]"
								: "text-white"
						}`}
					>
						{currentLyric.text}
					</p>
				)}

				{finished && (
					<div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm fade-in text-center">
						<h3 className="text-4xl md:text-6xl font-bold text-yellow-200 mb-8 drop-shadow-[0_0_15px_rgba(255,255,0,0.8)] animate-[glowPulse_1.5s_infinite]">
							Você é como um girassol
							<img
								src="/assets/images/surpresa.webp"
								alt="Surpresa"
								onClick={handleImageClick}
								className="block w-64 md:w-[420px] cursor-pointer transition-transform duration-300 hover:scale-110 drop-shadow-[0_0_40px_rgba(255,200,0,0.7)]"
							/>
						</h3>
					</div>
				)}

				<audio ref={specialAudioRef} src="/assets/songs/surpresa.mp3" />
				<audio
					ref={audioRef}
					src="/assets/songs/tauz.mp3"
					onEnded={() => setFinished(true)}
				/>
			</div>
		</div>
	);
}
