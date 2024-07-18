const axios = require("axios");

const username = "GamerBoiRohan";

async function main() {
  try {
    console.log(`Fetching XUID for ${username}..`);
    const xuidResponse = await axios.get(
      `https://api.geysermc.org/v2/xbox/xuid/${username}`,
    );
    const xuid = xuidResponse.data.xuid;
    if (!xuid) throw new Error(`Could not fetch the XUID for ${username}`);
    console.log(`Found XUID of ${username}: ${xuid}`);

    console.log("Fetching Skin Texture ID..");
    const skinResponse = await axios.get(
      `https://api.geysermc.org/v2/skin/${xuid}`,
    );
    const skinTextureID = skinResponse.data.texture_id;
    if (!skinTextureID)
      throw new Error(`Skin Texture ID not found for ${username}`);
    console.log(`Found Skin Texture ID for ${username}: ${skinTextureID}`);

    console.log("Fetching Skin URL..");
    const skinUrl = `http://textures.minecraft.net/texture/${skinTextureID}`;
    console.log(`Skin URL: ${skinUrl}`);
  } catch (error) {
    console.error(error.message);
  }
}

main();
