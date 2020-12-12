import React, { useState } from "react";

//create your first component
export function Home() {
	const player = React.createRef();
	const data = [
		{
			id: 1,
			category: "game",
			name: "Mario Castle",
			url: "files/mario/songs/castle.mp3"
		},
		{
			id: 2,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/hurry-starman.mp3"
		},
		{
			id: 3,
			category: "game",
			name: "Mario Overworld",
			url: "files/mario/songs/overworld.mp3"
		}
	];
	const [src, setSrc] = useState("");
	const [playing, setPlaying] = useState(false);

	const handleSongClick = index => {
		let song = `https://assets.breatheco.de/apis/sound/${data[index].url}`;
		setSrc(song);
		setPlaying(true);
		player.current.play();
		console.log(player.current);
	};
	const handlePauseClick = () => {
		player.current.pause();
		setPlaying(false);
	};

	const handlePlayClick = () => {
		if (src !== "") {
			player.current.play();
			setPlaying(true);
		} else {
			setTimeout(() => {
				player.current.play();
				setPlaying(true);
			}, 100);
		}
	};
	// const handlePlayClick = () => {
	// 	player.current.play();
	// 	setPlaying(true);
	// };
	return (
		<div className="text-center py-3 px-1 player ">
			<audio ref={player} src={src} />
			<ul>
				{data.map((item, index) => {
					return (
						<li key={index} onClick={() => handleSongClick(index)}>
							{item.name}
						</li>
					);
				})}
			</ul>
			<div className="nav">
				<i class="fas fa-caret-square-left mr-3" />
				{playing ? (
					<i class="fas fa-pause" onClick={handlePauseClick} />
				) : (
					<i class="fas fa-play" onClick={handlePlayClick} />
				)}{" "}
				<i class="fas fa-caret-square-right ml-3" />
			</div>
		</div>
	);
}
