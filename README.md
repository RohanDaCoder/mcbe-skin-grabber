# MCPE Skin Grabber

This script utilizes [Geyser's API](https://api.geysermc.org/docs) to fetch a Minecraft: Bedrock Edition user's skin using Node.js and Axios.

### Usage

This repository provides a basic example script to retrieve a user's skin by interacting with Geyser's API.

### Steps to Use:

1. Join the `test.geysermc.org` server once using the target user's Minecraft account.
2. Execute the provided script to obtain the skin URL.

### Installation

Follow these steps to set up and run the script:

1. Clone this repository:
   ```
   git clone https://github.com/RohanDaCoder/mcbe-skin-grabber
   ```

2. Navigate to the project directory:
   ```
   cd mcbe-skin-grabber
   ```

3. Install dependencies (axios):
   ```
   npm install axios
   ```

4. Edit `index.js` and replace `'username'` with the target Minecraft username.

5. Run the script:
   ```
   node index.js
   ```

### Note

Ensure that you have joined `test.geysermc.org` server at least once with the Minecraft account whose skin you wish to fetch. This step is necessary to save the skin to the API before retrieval.
