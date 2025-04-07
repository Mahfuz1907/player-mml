import React from "react";
import Swal from "sweetalert2";

const PlayerTeamButton = ({ team, player, base_url, image_url }) => {
  const handleClick = (team) => {
    const url = `${base_url}/teams/${team.id}/`;
    const payload = { id: player.id };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(
        Swal.fire({
          text: `${player.name} is selected for ${team.name}`,
          imageUrl: `${image_url}${player.image}`, // Provide the path to your custom image
          imageWidth: 100,
          imageHeight: 100,
          imageAlt: "Custom icon",
          customClass: {
            image: "rounded-xl",
            confirmButton:
              "!bg-green-400 hover:!bg-white hover:!border-[1px] hover:!border-green-400 hover:!text-green-400",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        })
      );
  };

  return (
    <>
      <button
        onClick={() => {
          handleClick(team);
        }}
        className="bg-green-400 text-white font-semibold px-3 py-1 rounded-xl cursor-pointer hover:bg-white hover:border-[1px] hover:border-green-400 hover:text-green-400"
      >
        {team.short_name}
      </button>
    </>
  );
};

export default PlayerTeamButton;
